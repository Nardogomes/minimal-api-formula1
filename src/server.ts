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

interface DriversParams {
  id: string
}

interface TeamsParams {
  id: string
}

server.get("/teams", async (request, reply) => {
  reply.type("application/json").code(200)
  
  return teams
})

server.get("/drivers", async (request, reply) => {
  reply.type("application/json").code(200)
  
  return drivers
})

server.get<{Params: DriversParams}>("/driver/:id", async (request, reply) => {
  const id = parseInt(request.params.id)

  const driver = drivers.find(d => d.id === id)

  if(!driver) {
    reply.type("application/json").code(404)
    return { message: "Driver not found"}
  } else {
    reply.type("application/json").code(200)
    return driver
  }
})

server.get<{Params: TeamsParams}>("/team/:id", async (request, reply) => {
  const id = parseInt(request.params.id)

  const team = teams.find(t => t.id === id)

  if(!team) {
    reply.type("application/json").code(404)
    return { message: "Team not found"}
  } else {
    reply.type("application/json").code(200)
    return team
  }
})

server.listen({ port: 3333 }, () => {
  console.log("Server is runnig")
})
