import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../models/UserModel";
import { LessonPlan } from "../models/LessonPlanModel";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [User, LessonPlan],
});


export default AppDataSource;
