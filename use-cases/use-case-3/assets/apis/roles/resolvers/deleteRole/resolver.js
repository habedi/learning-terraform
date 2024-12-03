/**
 * Sends a request to the attached data source for deleteRole
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} the request
 */
export function request(ctx) {
    // Extract the ID argument from the mutation input
    const {id} = ctx.args;

    // Construct the SQL query
    const sqlQuery = `
        delete
        from core_model.roles
        where id = :id::integer
        returning id, name, description
    `;

    // Log the constructed query
    console.log(`Executing query: ${sqlQuery} with id=${id}`);

    // Return the SQL query with parameters
    return {
        version: "2018-05-29",
        statements: [sqlQuery],
        variableMap: {
            ":id": id,
        },
    };
}

/**
 * Returns the resolver result for deleteRole
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} the result
 */
export function response(ctx) {
    // Log the raw database response
    console.log(`Raw response from data source: ${JSON.stringify(ctx.result)}`);

    // Parse the SQL statement results
    const sqlStatementResults = JSON.parse(ctx.result).sqlStatementResults;

    if (!sqlStatementResults || sqlStatementResults.length === 0) {
        console.log("No SQL statement results found.");
        return null; // No rows deleted
    }

    // Extract records from the first statement result
    const records = sqlStatementResults[0].records;

    if (!records || records.length === 0) {
        console.log("No records found in the database response.");
        return null; // No rows deleted
    }

    // Map the first record to the GraphQL schema
    const deletedRole = {
        id: records[0][0]?.longValue, // Assuming the first column is `id`
        name: records[0][1]?.stringValue, // Assuming the second column is `name`
        description: records[0][2]?.stringValue, // Assuming the third column is `description`
    };

    // Log the processed role
    console.log(`Deleted role: ${JSON.stringify(deletedRole)}`);

    return deletedRole;
}
