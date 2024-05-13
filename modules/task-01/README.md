This module creates a single server on AWS using Terraform. The server is an EC2 instance with a public IP address.

To run the module, you need to have an AWS account and configure the AWS CLI on your machine.

You can run the module by following the steps below:

1 - Initialize the Terraform configuration by running the following command in the terminal:

```bash
terraform init
```

2 - Create a plan for the resources to be created by running the following command:

```bash
terraform plan -out plan.tfplan
```

3 - Apply the plan by running the following command:

```bash
terraform apply plan.tfplan
```

After running the commands, Terraform will create the resources on AWS. You can access the server using the public IP
address of the EC2 instance.

To destroy the resources created by Terraform, you can run the following command:

```bash
terraform destroy
```

This will remove the resources created by Terraform from AWS.
