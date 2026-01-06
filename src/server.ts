import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typedefs";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import { ServerConfig } from "./config/server.config";

async function startServer() {
  await mongoose.connect(ServerConfig.MONGODB_URL);
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 GraphQL Server ready at ${url}`);
}

startServer().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
