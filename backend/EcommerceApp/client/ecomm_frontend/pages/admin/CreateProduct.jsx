import React, {useState} from 'react'
import { createProduct } from '../../api/apis';

const CreateProduct = () => {

    const [name , setName] = useState('');
    const [price , setPrice] = useState(0);
    const [description , setDescription] = useState('');
    const [category , setCategory] = useState('');
    const [stock , setStock] = useState(0);
    const [image , setImage] = useState('');


    const handleCreateProduct = async (e) => {
        e.preventDefault();
        // Logic to create product
        const productData = {
            name,
            price,
            description,
            category,
            stock,
            image
        };

        const data = await createProduct(productData, localStorage.getItem('token'));
        if(data){
            alert("Product Created Successfully");
        } else {
            alert("Error in creating product");
        }
        console.log("Creating Product:", productData);
        // Here you would typically send productData to your backend API
    }


  return (
    <div>
      <h1>Product Creation page</h1>
      <section>
        <div>
            <label htmlFor="productName">Product Name:</label>
            <input id="productName" type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="productPrice">Product Price:</label>
            <input id="productPrice" type="number" placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div> 
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" placeholder='Product Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
            <label htmlFor="productCategory">Product Category:</label>
            <input id="productCategory" type="text" placeholder='Product Category' value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
            <label htmlFor="productStock">Product Stock:</label>
            <input id="productStock" type="number" placeholder='Product Stock' value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <div>
            <label htmlFor="productImage">Product Image URL:</label>
            <input id="productImage" type="text" placeholder='Product Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
            <button className="p-2 bg-blue-500 text-white rounded" type="submit" onClick={handleCreateProduct}>Create Product</button>
        </div>
      </section>
    </div>
  )
}

export default CreateProduct
