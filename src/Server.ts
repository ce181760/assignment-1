// src/server.ts
import express from "express";
import fibRoute from "./fibRoute";

const app = express();
const PORT = 3000;

// Register Fibonacci route
app.get("/fib/:num", fibRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
