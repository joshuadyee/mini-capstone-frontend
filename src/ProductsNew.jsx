export function ProductsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onProductCreate(params, () => event.target.reset())
  }
  
  return (
    <div>
      <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
          <div>Name: <input type="text" name="name" /></div>
          <div>Description: <input type="text" name="description" /></div>
          <div>Price: <input type="text" name="price" /></div>
          <div>Inventory: <input type="text" name="inventory" /></div> <br />
          <button type="submit">Create Product</button>
        </form>
    </div>
  )
}