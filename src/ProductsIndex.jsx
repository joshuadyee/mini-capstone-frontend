export function ProductsIndex(props) {
  return (
    <div id="product-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Inventory: {product.inventory}</p>
            <p>Supplier ID: {product.supplier_id}</p>
        </div>
      ))}
    </div>
  )
} 