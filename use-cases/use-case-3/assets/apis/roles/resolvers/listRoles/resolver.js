/**
 * Sends a request to the attached data source for listRoles
 * @param {import('@aws-appsync/utils').Context} ctx the context
 * @returns {*} the request
 */
export function request(ctx) {
    // SQL query to fetch all roles
    const sqlQuery = "select id, name, description from core_model.roles";

    // Log the constructed query
    console.log(`Executing query: ${sqlQuery}`);

    // Return the query to be executed
    return {
        version: "2018-05-29",
        statements: [sqlQuery],
    };
}

/**
 * Returns the resolver result for listRoles
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
        return [];
    }

    // Extract records from the first statement result
    const records = sqlStatementResults[0].records;

    if (!records || records.length === 0) {
        console.log("No records found in the database response.");
        return [];
    }

    // Map records to the GraphQL schema
    const roles = records.map(row => {
        return {
            id: row[0]?.longValue, // Assuming the first column is `id`
            name: row[1]?.stringValue, // Assuming the second column is `name`
            description: row[2]?.stringValue, // Assuming the third column is `description`
        };
    });

    // Log the processed roles
    console.log(`Processed roles: ${JSON.stringify(roles)}`);

    return roles;
}
