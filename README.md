# Learning Terraform with AWS

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red.svg)](https://github.com/habedi/learning-terraform)

The repository is divided into [modules](modules/), each of which covers a specific topic related to
using [Terraform](https://www.terraform.io/) for managing
infrastructure in AWS. Each module includes a README file with descriptions of what the module does and how to run it.

The following table provides the list of modules:

| Index | Task                                       | Implemented |
|-------|--------------------------------------------|-------------|
| 1     | [Create an EC2 Instance](modules/task-01/) | [x]         |
| 2     | Add Tags to Resources                      | [ ]         |
| 3     | Configure Load Balancer and Auto Scaling   | [ ]         |
| 4     | Create a VPC and Subnets                   | [ ]         |

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
