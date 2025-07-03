import React,{useState} from "react";

//functional component - Product which has three props
// name,price,addToCart function
const Product=({name,price,addToCart})=>{
    //state to manage the quantity of the product
    const [quantity,setQuantity]=useState(0);

    //function for incrementing the quantity and addding the product to the cart
    const handleIncrement=()=>{
        setQuantity(quantity+1);
        addToCart({name,price});
    };

    //function for decrementing the quantity and updating the cart if required
    const handleDecrement=()=>{
        if(quantity>0){
            setQuantity(quantity-1);
            addToCart({name,price,remove:true});
        }
    };

    //constructing the image name based on the product name
    const imageName=name.toLowerCase().replace(/\s/g, '') + '.png';

    return(
        <div className="product-box">
            {/* image tag displaying the product image with a fixed size */}
            <img src={`${process.env.PUBLIC_URL}/${imageName}`} alt={name} className='product-image'
            style={{width:'200px', height:'200px'}}/>

            {/* product Details section */}
            <div>
                <h3>{name}</h3>
                {/* display the price */}
                {/* {price && <p>${}price.toFixed(2)</p>} */}
                <p>${price.toFixed(2)}</p>
                {/* Increment and Decrement buttons */}
                <button onClick={handleDecrement}>-</button>
                <span style={{margin:'0 5px'}}> {quantity} </span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

export default Product;