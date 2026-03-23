import "./src/listeners/listener.js";
import express from "express";
import router from "./src/routes/routes.js";

const app = express();

app.use("/jobs-queue", router);

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

export default app;
