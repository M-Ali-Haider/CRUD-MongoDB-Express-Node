import express from "express";
import mongoose from "mongoose";
import ProductsRouter from "./routes/product.route.js";

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", ProductsRouter);

app.get("/", (req, res) => {
  res.send("Bruhmius CRUD Operation Test API");
});

mongoose
  .connect("mongodb+srv://bruhmius:bruhmius@cluster0.ekihjjo.mongodb.net/CRUD")
  .then(() => {
    console.log("Database Connection Successful!");
    app.listen(3000, () => {
      console.log(`Server is running on Port ${port}`);
    });
  })
  .catch(() => {
    console.log("Error Database Connection!");
  });
