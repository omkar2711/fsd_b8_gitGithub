import React , {useEffect, useState} from 'react'
import { getAllProducts } from '../api/apis.js';

const ProductPage = () => {



    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts(localStorage.getItem('token'));
            setProducts(data);
        };

        fetchProducts();
    }, []);


  return (
    <div>
      <h1>
        Product Page
      </h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductPage
