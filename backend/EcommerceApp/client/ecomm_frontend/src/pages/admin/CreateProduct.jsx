import { useState } from 'react';
import { createProduct, updateProduct, deleteProduct, getAllProducts } from '../../api/apis';
import { useOutletContext } from 'react-router-dom';

export default function CreateProduct() {
  const { setActiveTab } = useOutletContext() || {};
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState('');

  // Load products on mount
  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data || []);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const productData = {
      name,
      price: parseFloat(price),
      description,
      category,
      stock: parseInt(stock),
      image
    };

    try {
      const token = localStorage.getItem('token');
      
      if (editingId) {
        const result = await updateProduct(editingId, productData, token);
        if (result) {
          alert('Product updated successfully');
          resetForm();
          await loadProducts();
        }
      } else {
        const result = await createProduct(productData, token);
        if (result) {
          alert('Product created successfully');
          resetForm();
          await loadProducts();
        }
      }
    } catch (err) {
      alert('Error saving product');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setPrice(0);
    setDescription('');
    setCategory('');
    setStock(0);
    setImage('');
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setCategory(product.category);
    setStock(product.stock);
    setImage(product.image);
    setEditingId(product._id);
    setShowForm(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const token = localStorage.getItem('token');
      const result = await deleteProduct(productId, token);
      if (result) {
        alert('Product deleted successfully');
        await loadProducts();
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Products</h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Add New Product
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white rounded-lg p-6 shadow mb-8">
          <h3 className="text-xl font-bold mb-4">
            {editingId ? 'Edit Product' : 'Create Product'}
          </h3>

          <form onSubmit={handleCreateProduct} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Product Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Product name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="e.g., Electronics"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Price (₹)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Stock</label>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Product description"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Image URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400"
              >
                {isLoading ? 'Saving...' : editingId ? 'Update Product' : 'Create Product'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-300 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <button
            onClick={loadProducts}
            className="mb-4 text-blue-600 font-semibold hover:underline"
          >
            Refresh Products
          </button>

          {products.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Name</th>
                    <th className="px-4 py-2 text-left font-semibold">Category</th>
                    <th className="px-4 py-2 text-left font-semibold">Price</th>
                    <th className="px-4 py-2 text-left font-semibold">Stock</th>
                    <th className="px-4 py-2 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{product.name}</td>
                      <td className="px-4 py-3">{product.category}</td>
                      <td className="px-4 py-3">₹{product.price}</td>
                      <td className="px-4 py-3">{product.stock}</td>
                      <td className="px-4 py-3 flex gap-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-red-600 font-semibold hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No products found. Click "Refresh" to load.</p>
          )}
        </div>
      </div>
    </div>
  );
}
//         <div>
//             <label htmlFor="productName">Product Name:</label>
//             <input id="productName" type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//             <label htmlFor="productPrice">Product Price:</label>
//             <input id="productPrice" type="number" placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />
//         </div>
//         <div> 
//             <label htmlFor="productDescription">Product Description:</label>
//             <textarea id="productDescription" placeholder='Product Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//         </div>
//         <div>
//             <label htmlFor="productCategory">Product Category:</label>
//             <input id="productCategory" type="text" placeholder='Product Category' value={category} onChange={(e) => setCategory(e.target.value)} />
//         </div>
//         <div>
//             <label htmlFor="productStock">Product Stock:</label>
//             <input id="productStock" type="number" placeholder='Product Stock' value={stock} onChange={(e) => setStock(e.target.value)} />
//         </div>
//         <div>
//             <label htmlFor="productImage">Product Image URL:</label>
//             <input id="productImage" type="text" placeholder='Product Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
//         </div>
//         <div>
//             <button className="p-2 bg-blue-500 text-white rounded" type="submit" onClick={handleCreateProduct}>Create Product</button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default CreateProduct
