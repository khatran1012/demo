import React, {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { loadPosts, setCartItem } from "../actions/postActions";


function Dashboard(props) {

    // const [list, setList] = useState([]);
    const newCartItems = useSelector((state) => state.posts.items)
    const localItems = JSON.parse(localStorage.getItem('cart-items')) || []
    const numItemsInCart = newCartItems.length ? newCartItems : localItems

    const data = useSelector((state) => state.posts.data);
    // const requesting = useSelector(state => state.posts.requesting);
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadPosts());
        // product();
    }, [])


    // console.log(data)
    // const product = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products')
        
    //     const jsonData = await response.json();
    //     setList(jsonData);
    // }

    const routeToProductDetail = (id) => {
        navigate({ pathname: `/dashboard/${id}` })
    }

    const routeToCart = () => {
        navigate({ pathname: '/cart' })
    }

    const addToCart = (itemId) => {
        const newCartItem = localItems.length ? [...localItems, itemId] : [...newCartItems, itemId]
        dispatch(setCartItem(newCartItem));
        localStorage.setItem('cart-items', JSON.stringify(newCartItem))
    }

    return (
        <div className="container-product">
            <h1>Welcome to Dashboard</h1>
            <div onClick={routeToCart} className="cart-box">
                <Badge badgeContent={numItemsInCart.length} color="error">
                    <AddShoppingCart />
                </Badge>
            </div>
            
            <div className="product-list">
                {data.map((values) => {
                    return (
                        <div className="product-items-container">
                            <div className="product-items" onClick={() => routeToProductDetail(values.id)}>
                                <h5 key={values}>{values.title}</h5>
                                <img key={values} src={values.image} alt="" />
                                <p key={values}>{values.description}</p>
                                <p className="price" key={values}>{values.price}$</p>
                            </div>
                            <Button onClick={() => addToCart(values.id)} className="cart">Add to Cart</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;