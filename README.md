# Learning Terraform and Infrastructure as Code

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red.svg)](https://github.com/habedi/learning-terraform)

This repository includes the files related to learning about Terraform and Infrastructure as Code (IaC) using AWS.

## Modules

The repository is divided into modules, each of which covers a specific topic related to Terraform and IaC. The modules
are shown in table below:

| Module                                        | Description                                                                                            |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [One Server](modules/01-one-server/README.md) | Create a single server on AWS using Terraform. The server is an EC2 instance with a public IP address. |

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
