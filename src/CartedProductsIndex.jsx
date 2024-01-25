import axios from 'axios'
import {useState, useEffect} from 'react'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  
  const getCartedProducts = () => {
    console.log('getting products')
    axios.get('http://localhost:3000/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  const createOrder = () => {
    console.log('creating order....')
    axios.post('http://localhost:3000/orders.json').then(response => {
      console.log(response.data);
      window.location.href = `/orders/${response.data.id}`
    })
  }

  // getCartedProducts()
  // 235
  useEffect(getCartedProducts, [])
  
  return (
    <div>
      <h1>Your Cart</h1>
      
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          {/* <p>{JSON.stringify(cartedProduct)}</p> */}
          <p>name: {cartedProduct.product.name}</p>
          <p>price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <hr />
        </div>        
      ))}
      <p><button onClick={createOrder}>Place your order</button></p>
    </div>
  )
}