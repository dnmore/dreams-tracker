import express from "express";
import dotenv from "dotenv";
import dreamRoutes from "./routes/dream.routes.js";
import { connectDb } from "./config/db.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/dreams', dreamRoutes);


app.listen(PORT, () => {
  connectDb();
  console.log("Server is running at http://localhost:" + PORT);
});
