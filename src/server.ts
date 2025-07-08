import fastify from "fastify"

const server = fastify({logger: false})

server.get("/teams", async (request, reply) => {
  reply.type("application/json").code(200)
  return [{ id: 1, name: "maclaren" }]
})

server.listen({ port: 3333 }, () => {
  console.log("Server is runnig")
})
