import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

type DBconfig = {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_HOST: string;
};

function loadEnv() {
  dotenv.config();
}

loadEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT),
};

export const dbConfig: DBconfig = {
  DB_USER: String(process.env.DB_USER),
  DB_PASSWORD: String(process.env.DB_PASSWORD),
  DB_NAME: String(process.env.DB_NAME),
  DB_HOST: String(process.env.DB_HOST),
};
