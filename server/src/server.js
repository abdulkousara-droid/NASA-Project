const http = require("http");

const app = require("./app");
const { seedDefaultLaunch } = require("./models/launches.model");

const { mongoConnect } = require("./services/mongo");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await seedDefaultLaunch();

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
  });
}

startServer();
