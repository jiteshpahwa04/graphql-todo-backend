import dotenv from "dotenv";
dotenv.config();

export const ServerConfig = {
  PORT: process.env.PORT || 4000,
  MONGODB_URL: process.env.MONGODB_URL || "",
};
