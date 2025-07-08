import fastify from "fastify"

const server = fastify({logger: false})

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Modena, Italy"}
]

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
]

server.get("/teams", async (request, reply) => {
  reply.type("application/json").code(200)
  
  return { teams }
})

server.get("/drivers", async (request, reply) => {
  reply.type("application/json").code(200)
  
  return { drivers }
})

server.listen({ port: 3333 }, () => {
  console.log("Server is runnig")
})
