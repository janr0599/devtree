import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

connectDB();

const app = express();

// Configurar CORS
app.use(cors(corsConfig));

// Leer datos del formulario
app.use(express.json());

app.use("/", router);

export default app;
