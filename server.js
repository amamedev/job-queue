import app from "./app.js";
import { PORT } from "./src/config/env.js";

const server = app;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
