# Learning Terraform and Infrastructure as Code

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red.svg)](https://github.com/habedi/learning-terraform)

This repository includes the files related to learning about Terraform and Infrastructure as Code (IaC) using AWS.

## Modules

The repository is divided into modules, each of which covers a specific topic related to using Terraform for managing
infrastructure in AWS. The modules are designed to be completed in order, starting with the basics and progressing to
more
advanced topics. Each module includes a README file with instructions and a set of tasks to complete.

The following table provides an overview of the modules and tasks included in this repository.

| Index | Task                                       | Description                                                                                                                                             |
|-------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | [Create an EC2 Instance](modules/task-01/) | Write Terraform code to provision a basic EC2 instance in AWS. Specify instance type, AMI, and networking configuration.                                |
| 2     | Add Tags to Resources                      | Extend Terraform configuration to include tags for the EC2 instance. Tags provide metadata for organization and management.                             |
| 3     | Create a Security Group                    | Define a security group in Terraform to control inbound and outbound traffic to the EC2 instance. Specify SSH access and other rules.                   |
| 4     | Deploy Multiple EC2 Instances              | Modify Terraform code to deploy multiple EC2 instances using loops or count parameters. Demonstrate efficient management of multiple resources.         |
| 5     | Use IAM Roles                              | Integrate IAM roles into Terraform configuration to assign permissions to EC2 instances. Attach IAM roles to instances for access to AWS services.      |
| 6     | Configure Load Balancer and Auto Scaling   | Implement a load balancer and auto scaling group using Terraform. Distribute traffic across EC2 instances and adjust capacity based on demand.          |
| 7     | Manage RDS Database                        | Extend Terraform configuration to provision an RDS database instance. Specify database engine, instance class, storage, and other parameters.           |
| 8     | Implement VPC Networking                   | Define a custom VPC network using Terraform. Configure subnets, route tables, internet gateways, and NAT gateways for secure and scalable networking.   |
| 9     | Set Up High Availability Architecture      | Design and deploy a highly available architecture using Terraform. Implement multi-AZ deployments for EC2 instances, RDS databases, and load balancers. |
| 10    | Implement Infrastructure as Code Best Practices | Review Terraform codebase and refactor to follow best practices for infrastructure as code. Improve modularity, reusability, and maintainability.       |

## Installing Poetry

We use [Poetry](https://python-poetry.org/) for managing the dependencies and virtual environment for the Python scripts
in this repository. To get
started, you need to install Poetry on your machine. We can install Poetry by running the following command in the
command
line using pip.

```bash
pip install poetry
```

When the installation is finished, run the following command in the shell in the root folder of this repository to
install the dependencies, and create a virtual environment for the project.

```bash
poetry install
```

After that, enter the Poetry environment by invoking the poetry shell command.

```bash
poetry shell
```

## License

Files in this repository are licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
