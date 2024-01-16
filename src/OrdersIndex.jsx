import { useEffect, useState } from "react"
import axios from "axios"

export function OrdersIndex() {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    console.log("get those orders")
    axios.get("http://localhost:3000/orders.json").then(response => {
      console.log(response.data)
      setOrders(response.data)
    })
  }

  useEffect(getOrders, [])
  
  return (
    <div>
      <h1>Hello from Orders index</h1>
      {orders.map(order => (
        <div key={order.id}>
          <p>Subtotal:</p>
          <p>Tax:</p>
          <p>Total:</p>
        </div>
      ))}
    </div>
  )
}