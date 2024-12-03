# Set Up a GraphQL API with AWS AppSync and Amazon Aurora Serverless

This use case is a simple demo that shows how to create a [GraphQL API](https://graphql.org/) using [AWS AppSync](https://aws.amazon.com/appsync/) and
an [Amazon Aurora Serverless](https://aws.amazon.com/rds/aurora/serverless/) database as the data source.

### Customizing the Demo

Change the values for the variables in the [variables.tf](variables.tf) file to customize the demo (for example, region, database name, etc.).

### Accessing the API

After the `apply` command is run without errors, you should be able to access the API via
the [AppSync console](https://us-east-1.console.aws.amazon.com/appsync/home?region=us-east-1#/).
The console will show the URL for the GraphQL endpoint, which includes an API named `roles-api`.
You can also access and invoke the API using the AWS CLI, the AWS SDKs, etc.

Example queries, mutations, and subscriptions to interact with the API:

```graphql
mutation MyMutation1 {
    createRole(id: "3", name: "ROLE NAME") {
        id
        name
        description
    }
    updateRole(id: "3", name: "DUMMY_USER", description: "Dummy User") {
        id
        name
        description
    }
}

query Query {
    listRoles {
        id
        name
        description
    }
}

mutation MyMutation2 {
    deleteRole(id: "3") {
        id
    }
}

subscription MySubscription {
    onDeleteRole {
        id
        name
        description
    }
}
```

### API Schema and Resolvers

The schema and resolvers for the API are defined in the [schema](assets/apis/roles/schema.graphql) file and [resolvers](assets/apis/roles/resolvers/)
directory, respectively.
