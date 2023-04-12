import { type } from "os";
import Cart from "../cart";
import { products } from "../products-data";
type CartManagerModel ={
    cart:Cart
}

const CartManager =({cart}:CartManagerModel)=>{

    
    return(
        <div style={{backgroundColor:"lightgreen"}}>
            <h3>My Cart</h3>
            <hr></hr>

            {
            cart.cartItems.map( (cartItem)=>(
                <div>
                    {cartItem.product.name} {cartItem.quantity}
                </div>

            ))
}
        </div>
    );
}
export{CartManager};