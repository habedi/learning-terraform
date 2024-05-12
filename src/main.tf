terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "example" {
  # AMI ID can be different based on the region (see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html)
  ami           = "ami-0ddda618e961f2270"
  instance_type = "t2.micro"
}
