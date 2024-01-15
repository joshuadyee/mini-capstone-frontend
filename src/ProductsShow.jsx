import axios from "axios";

export function ProductsShow(props) {

  const addToCart = event => {
    console.log("adding to cart...")
    const params = new FormData(event.target)
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
    })
  }

  return (
    <div>
      <h1>Product Information</h1>
        <p>ID: {props.product.id}</p>
        <p>Name: {props.product.name}</p>
        <p>Description: {props.product.description}</p>
        <p>Price: ${props.product.price}</p>
        <p>Inventory: {props.product.inventory}</p>
      <form onSubmit={addToCart}>
        <div>
          ID: <input name="id" type="text" />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}