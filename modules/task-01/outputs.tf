output "instance_info" {
  description = "The instance information."
  value = {
    instance_id   = aws_instance.server_one.id
    instance_type = aws_instance.server_one.instance_type
    public_ip     = aws_instance.server_one.public_ip
  }
}

output "network" {
  description = "The network configuration of the instance."
  value = {
    vpc_id            = aws_vpc.main.id
    subnet_id         = aws_subnet.public.id
    security_group_id = aws_security_group.allow_ssh.id
  }
}
