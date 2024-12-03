# Provision a Server and a Database in AWS

This use case provisions an EC2 instance and an RDS MySQL database instance in AWS.
The EC2 instance is created in a new VPC with a single public subnet and a security group that allows SSH access from the public internet.
The RDS MySQL database instance is created in the same VPC as the EC2 instance, however, in a private subnet.
The security group of the RDS MySQL database instance allows inbound traffic only from the security group of the EC2 instance.
So, the ECT instance can connect to the RDS MySQL database instance.
