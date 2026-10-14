import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
// Import your custom components
import ProductGrid from './components/ProductGrid'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([]) //New Cart State

// 2. The function to update the cart
const addToCart = (product) => {
    // 1. Check if the product already exists in the cart array
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // 2. If it exists, map through the cart and add 1 to the quantity of that specific item
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // 3. If it is new, add the product to the array and attach a 'quantity: 1' property to it
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    console.log("Cart updated with:", product.name);
  }
  // Function to remove an item completely
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  }

  // Function to increase or decrease quantity
  const updateQuantity = (productId, action) => {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        if (action === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }));
  }

  useEffect(() => {
    // Attempt to fetch data from our Django backend
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        console.log("Data fetched successfully:", response.data)
        setProducts(response.data)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
      })
  }, [])
const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalQuantity} />

    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center uppercase tracking-tight">
        Digital Cards Store
      </h1>
    <Routes>
      <Route path="/" element={<ProductGrid addToCart={addToCart} products={products} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
    </Routes>
    
    </div>
    </>
  )
}

export default App