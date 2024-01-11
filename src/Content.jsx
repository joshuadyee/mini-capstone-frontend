import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew"
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

  const handleProductCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/products.json", params).then(response => {
      setProducts([...products, response.data])
      successCallback()
    })
  }

  // calling the function using react syntax (essentially handleProductsIndex())
  useEffect(handleProductsIndex, [])

  return (
    <div>
      <h1>Welcome to my Shop!</h1>
      <ProductsNew onProductCreate={handleProductCreate}/>
      <ProductsIndex products={products}/>
      {/* <button onClick={handleProductsIndex}>All Products</button> */}
    </div>
  )
}