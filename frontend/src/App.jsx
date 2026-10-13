import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
// Import your custom components
import ProductGrid from './components/ProductGrid'
import Navbar from './components/Navbar'

function App() {
  const [products, setProducts] = useState([])

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

  return (
    <>
    <Navbar/>

    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center uppercase tracking-tight">
        Digital Cards Store
      </h1>
    <Routes>
      <Route path="/" element={<ProductGrid products={products} />} />
    </Routes>
    </div>
    </>
  )
}

export default App