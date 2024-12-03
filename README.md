# Terraform Use Cases

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github/habedi/terraform-usecases/blob/main/LICENSE)
[![CodeFactor](https://www.codefactor.io/repository/github/habedi/terraform-usecases/badge)](https://www.codefactor.io/repository/github/habedi/terraform-usecases)

This repository contains a collection of use cases where [Terraform](https://www.terraform.io/) is used to provision resources
in [AWS](https://aws.amazon.com/) to set up environments for various tasks.

List of currently implemented use cases:

| Index | Title                                                                        | Complexity |
|-------|------------------------------------------------------------------------------|------------|
| 1     | [Provision a Server](use-cases/use-case-1/)                                  | Simple     |
| 2     | [Provision a Server and a Database](use-cases/use-case-2/)                   | Simple     |
| 3     | [Set up a GraphQL API with AppSync and Amazon Aurora](use-cases/use-case-3/) | Complex    |

## Installing Poetry

Optionally, you can use [Poetry](https://python-poetry.org/) to manage the Python dependencies (if you use Python for scripting, etc.).

```bash
pipx install poetry # or uv tool install poetry
```
