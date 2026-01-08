import { Router } from "express";
import { createProduct, getAllProducts } from "../controller/productController.js";

const productRouter = Router();

productRouter.get('/', (req, res) => {
    res.send("Product route is working");
});

productRouter.get('/products', getAllProducts);

// productRouter.get('/product/:id',  );

productRouter.post('/product', createProduct);

// productRouter.put('/product/:id');

// productRouter.delete('/product/:id');

export default productRouter;