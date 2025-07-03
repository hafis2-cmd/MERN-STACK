import React from "react";
import './CartPage.css';


//3 props:- cart(list of items),totalAmount,resetCart function
const CartPage=({cart,totalAmount,resetCart})=>{
    return(
        <div>
            <h2>Product Details</h2>
            {/* unordered list to display each item in the cart */}
            <ul>
                {cart.map((item,index)=>(
                    <li key={index}>
                        {/* displaying product name,price,quantity and Total amount for each item */}
                        {item.name} - ${item.price.toFixed(2)} (Quantity: {item.quantity})
                        <span> | Total : ${(item.price*item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            {/* displaying the total amount of the cart  */}
            <p id="ta">Total Amount :- ${totalAmount.toFixed(2)}</p>
            {/* button for resetting the cart */}
            <button onClick={resetCart}>Reset Cart</button>
        </div>
    );
};

export default CartPage;