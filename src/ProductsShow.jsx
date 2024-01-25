import axios from "axios";

export function ProductsShow(props) {

  const addToCart = event => {
    console.log("adding to cart...")
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
    })
    window.location.href = "/"
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
          <input name="product_id" type="hidden" defaultValue={props.product.id} />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" /> 
        </div> <br />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}