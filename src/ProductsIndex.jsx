import { useState } from "react"

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <div id="product-index">
      <h1>All Products</h1>
      <p>
        Search: <input type="text" value={searchFilter} onChange={event => setSearchFilter(event.target.value)}/>
      </p>
      {props.products.filter(product => product.name.toLowerCase()
      .includes(searchFilter.toLowerCase()))
      .map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Inventory: {product.inventory}</p>
          <p>Supplier ID: {product.supplier_id}</p>
          {/* {JSON.stringify(product.images)} */}
          <img width="300px" src={product.images[0] && product.images[0].url} />
          <button onClick={() => props.onShowProduct(product)}>More info</button> <hr />
        </div>
      ))}
    </div>
  )
} 