import express from "express";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running");
});
