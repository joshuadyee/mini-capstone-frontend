import axios from "axios"
import { useEffect, useState } from "react"

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onProductCreate(params, () => event.target.reset())
    console.log("creating product...")
  }
  
  const suppliersIndex = () => {
    console.log("suppliers Index")
    axios.get("http://localhost:3000/suppliers.json").then(response => {
      // console.log(response.data)
      setSuppliers(response.data)
    })
  }

  useEffect(suppliersIndex, [])

  return (
    <div>
      {/* <p>hello from products new</p>
      {suppliers.map(supplier => (
        <p key={supplier.id}>{supplier.name}</p>
      ))} */}
      <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
          <div>Name: <input type="text" name="name" /></div>
          <div>Description: <input type="text" name="description" /></div>
          <div>Price: <input type="text" name="price" /></div>
          <div>Inventory: <input type="text" name="inventory" /></div> 
          {/* <div>Supplier ID: <input type="text" name="supplier_id" /></div> <br /> */}
          <select name="supplier" id="supplier">
            {suppliers.map(supplier => (
              <option key={supplier.id}>{supplier.name}</option>
              ))}
          </select> <br />
          <button type="submit">Create Product</button> <br />
        </form>
    </div>
  )
}