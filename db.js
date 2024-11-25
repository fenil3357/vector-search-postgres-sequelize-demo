import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()

export const DB = new Sequelize(process.env.DB_CONNECTION_URL, {
  dialect: 'postgres'
});