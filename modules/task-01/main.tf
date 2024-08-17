terraform {
    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = "~> 3.0"
        }
    }
}

# AWS Region to deploy the resources
provider "aws" {
    region = "us-east-1"
}

# Network Resources
## Create a VPC
resource "aws_vpc" "main" {
    cidr_block = "172.16.0.0/16"
}

## Create an Internet Gateway
resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.main.id
}

## Create a subnet
resource "aws_subnet" "public" {
    vpc_id                  = aws_vpc.main.id
    cidr_block              = "172.16.1.0/24"
    availability_zone       = "us-east-1a"
    map_public_ip_on_launch = true
}

## Create a route table
resource "aws_route_table" "public_rt" {
    vpc_id = aws_vpc.main.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.igw.id
    }
}

## Associate the route table with the subnet
resource "aws_route_table_association" "public_association" {
    subnet_id      = aws_subnet.public.id
    route_table_id = aws_route_table.public_rt.id
}

## Create a security group
resource "aws_security_group" "allow_ssh" {
    name   = "allow_ssh"
    vpc_id = aws_vpc.main.id

    ingress {
        from_port = 22
        to_port   = 22
        protocol  = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 0
        to_port   = 0
        protocol  = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_instance" "server_one" {
    ## AMI
    ami = var.ami_id
    instance_type = var.instance_type

    ## Network
    vpc_security_group_ids = [aws_security_group.allow_ssh.id]
    subnet_id = aws_subnet.public.id

    ## Assign a public IP address
    associate_public_ip_address = true
}
