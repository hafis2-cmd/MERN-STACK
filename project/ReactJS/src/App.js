import React,{useState} from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Product from './Product';
import CartPage from './CartPage';

function App(){
  //state to manage the cart items and total amount
  const [cart,setCart]=useState([]);

  const [totalAmount,setTotalAmount]=useState(0);

  //function to add products to cart
  const addToCart=(product)=>{
    const updatedCart=[...cart];    //using spread opoerator
    const existingProductIndex=updatedCart.findIndex(
      (item)=>item.name===product.name
    );

    if(existingProductIndex !== -1){
      if(product.remove){
        updatedCart.splice(existingProductIndex,1);
      }else{
        updatedCart[existingProductIndex].quantity +=1;
      }
    }else{
      updatedCart.push({...product,quantity:1});
    }

    //Calculating the new total amount based upon the updated cart
    const newTotalAmount=updatedCart.reduce(
      (total,item)=>total + item.price * item.quantity,
      0
    );
    
    //update the cart and total amount state
    setCart(updatedCart);
    setTotalAmount(newTotalAmount);
  };

  //function to reset the cart to an empty state
  const resetCart=()=>{
    setCart([]);
    setTotalAmount(0);
  };

  return(
    <Router>
      <div>
        <h1>React Shopping Cart</h1>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

           {/* Define Routes for different pages */}
        <Routes>
          <Route
             path="/"
             element={
              //render the HomePage component with product listings
              <HomePage
                addToCart={addToCart}
                cart={cart}
                totalAmount={totalAmount}
                />
             }
            />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                totalAmount={totalAmount}
                resetCart={resetCart}
                /> 
            }  
            />
        </Routes>
      </div>
    </Router>
  );
}

//Component for HomePage,displaying the product listings
const HomePage=({addToCart,resetCart})=>{
  return(
    <div style={{display:'flex',justifyContent:'space-around'}}>
      {/* Render product components for each product */}
      <Product name="BUKKL Men Printed Round Neck T-shirt" price={10.99} addToCart={addToCart}/>
      <Product name="REDTAPE casual shoe" price={20.19} addToCart={addToCart}/>
      <Product name="Noise Halo 2 MOD Smartwatch" price={5.99} addToCart={addToCart}/>
    </div>
  );
};

export default App;