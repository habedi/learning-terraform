# How to Get Started

A typical workflow for using Terraform for provisioning and managing cloud resources involves the following stages:

```mermaid
graph TD
    A["A. Initialize terraform"]
    B["B. Edit and update the Terraform files"]
    C["C. Create or update the execution plan from the (updated) files"]
    D["D. Apply the (updated) plan to provision the resources"]
    E["E. Destroy the infrastructure and clean up the resources"]
    A --> B
    B --> C
    C --> D
    D --> E
    D --> B
    E --> A

```

## Initialize Terraform

```bash
terraform init
```

## Create an Execution Plan

```bash
terraform plan -out=plan.tfplan
```

## Apply the Plan

```bash
terraform apply -parallelism=4
```

## Destroy the Infrastructure

```bash
terraform destroy
```
