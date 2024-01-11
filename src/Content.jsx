import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"
import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew"
import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

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
      <h1>Welcome to My Shop!</h1>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<LogoutLink />}/>
        <Route path="products/new" element={<ProductsNew onProductCreate={handleProductCreate}/>}/> 
        <Route path="products/index" element={      <ProductsIndex products={products}/>}/>
      </Routes>
      {/* <button onClick={handleProductsIndex}>All Products</button> */}

    </div>
  )
}