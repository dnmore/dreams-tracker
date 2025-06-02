import express from "express";
import dotenv from "dotenv";
import dreamRoutes from "./routes/dream.routes.js";
import { connectDb } from "./config/db.js";
import path, { dirname} from 'path';
import { fileURLToPath } from "url";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


app.use(express.json());
app.use('/api/dreams', dreamRoutes);


if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
  connectDb();
  // console.log("Server is running at http://localhost:" + PORT);
});
