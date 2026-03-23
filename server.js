import app from "./app.js";
import { PORT } from "./src/config/env.js";

const server = app;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
