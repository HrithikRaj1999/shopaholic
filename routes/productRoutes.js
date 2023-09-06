import express from "express";
import {
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productPhotoController,
    updateProductController,
} from "../controllers/productController.js";

import formidable from "express-formidable";
import { checkIsAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignIn,
    checkIsAdmin,
    formidable(),
    createProductController
);

router.put(
    "/update-product/:pid",
    requireSignIn,
    checkIsAdmin,
    formidable(),
    updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

export default router;