import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { useState, useEffect } from "react"

export function Content() {
  // same as const products = []
  const [products, setProducts] = useState([])

  const handleProductsIndex = () => {
    console.log("products index")
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      // logs the data to the console, not to the page
      setProducts(response.data)
      // resets the value of products to the data, logs it to the page
    })
  }

  // calling the function using react syntax (essentially handleProductsIndex())
  useEffect(handleProductsIndex, [])

  return (
    <div>
      <h1>Welcome to my Page!</h1>
      <ProductsIndex products={products}/>
      {/* <button onClick={handleProductsIndex}>All Products</button> */}
    </div>
  )
}