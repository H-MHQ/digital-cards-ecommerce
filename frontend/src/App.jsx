import { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div>
      <h1>Digital Cards Store</h1>
      <p>Check your browser console for the data.</p>
    </div>
  )
}

export default App