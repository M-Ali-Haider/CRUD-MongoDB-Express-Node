import express from "express";
import mongoose from "mongoose";
import ProductsRouter from "./routes/product.route.js";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", ProductsRouter);

app.get("/", (req, res) => {
  res.send("Bruhmius CRUD Operation Test API");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connection Successful!");
    app.listen(3000, () => {
      console.log(`Server is running on Port ${port}`);
    });
  })
  .catch(() => {
    console.log("Error Database Connection!");
  });
