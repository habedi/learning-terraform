# Task 02 - A Server and an RDS Database in AWS

This Terraform module provisions a server and an RDS MySQL database instance in AWS.
The database instance is created in a private subnet, and the server is created in a public subnet.
The server can access the database instance through network the routing table and security group rules. 
