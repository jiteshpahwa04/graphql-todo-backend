import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typedefs";
import resolvers from "./resolvers";

async function startServer() {
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
