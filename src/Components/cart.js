import { Button } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux'



function Cart(props) {
    const cartItems = useSelector((state) => state.posts.items)
    const data = useSelector((state) => state.posts.data);
    const countItems = cartItems.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: prev[curr] ? prev[curr] + 1 : 1
      }
    }, {})
    const itemInCart = data.filter(({ id }) => {
      return cartItems.findIndex((cartItemId) => cartItemId === id) !== -1
    })
    
    return (
        <div className="cart-list">
          <h1>Cart List</h1>
            {itemInCart.map(item => (
              <div>
                <h5>{item.title}</h5>
                <img src={item.image} alt="" style={{'width': '100px', }}/>
                <p>{item.price}$</p>
                <div>
                  <Button onClick={(e) => {}} style={{'width': '100px', 'margin-right': '50px' }}>-</Button>
                  {countItems[item.id]}
                  <Button style={{'width': '100px',}}>+</Button>
                </div>
              </div>
            ))}
            
        </div>
    );
}

export default Cart;