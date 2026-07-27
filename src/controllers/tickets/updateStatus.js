export function updateStatus({request, response, database}) {
    const { id } = request.params;

    const { solution } = request.body;

    database.update("tickets", id, {
        solution: solution,
        status: "closed"
    })

    return response.end();
}