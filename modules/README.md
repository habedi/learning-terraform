# How to Work with a Module

To use a module, you need to have an AWS account with the necessary permissions to create and provision the resources.
Assuming the credentials are set up, you can follow the steps below to build and use a module.

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

To destroy the resources created by Terraform, you can run the following command:

```bash
terraform destroy
```

This will remove the resources created by Terraform from AWS.
