import { Router } from "express";
import { 
    createProduct, 
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addReview
} from "../controller/productController.js";

const productRouter = Router();

productRouter.get('/', (req, res) => {
    res.send("Product route is working");
});

productRouter.get('/products', getAllProducts);

productRouter.get('/:productId', getProductById);

productRouter.post('/create', createProduct);

productRouter.put('/:productId', updateProduct);

productRouter.delete('/:productId', deleteProduct);

productRouter.post('/:productId/review', addReview);

export default productRouter;