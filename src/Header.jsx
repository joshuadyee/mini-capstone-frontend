import { LogoutLink } from "./LogoutLink"

export function Header() {
//   let loggedInStatus

//   if (localStorage.jwt) {
//     loggedInStatus = (
//       <>
//         <li><LogoutLink /></li>
//       </>
//     )
//   }
  return (
    <header>
      <a href="/">Home</a> | <a href="/login">Login</a> | <a href="/signup">Signup</a> | <a href="/products/index">All Products</a> | <a href="/products/new">New Product</a> | <a href="/cart">Cart</a>  
    </header>
  )
}

