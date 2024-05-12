variable "ami_id" {
  description = "The ID of the AMI to use for the instance."
  default     = "ami-0ddda618e961f2270"
}

variable "instance_type" {
  description = "The type of instance to launch."
  default     = "t2.micro"
}
