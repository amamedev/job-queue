import express from "express";
import router from "./src/routes/routes.js";
import "./src/listeners/jobListener.js";

const app = express();

app.use("/jobs-queue", router);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Ruta no encontrada",
  });
});

export default app;
