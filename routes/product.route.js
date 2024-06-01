import express from "express";
import {
  DeleteProductById,
  GetAllProducts,
  GetProductById,
  PosttProduct,
  UpdateProduct,
} from "../controllers/product.controller.js";
const ProductsRouter = express.Router();

ProductsRouter.post("/", PosttProduct);
ProductsRouter.get("/", GetAllProducts);
ProductsRouter.get("/:id", GetProductById);
ProductsRouter.delete("/:id", DeleteProductById);
ProductsRouter.put("/:id", UpdateProduct);

export default ProductsRouter;
