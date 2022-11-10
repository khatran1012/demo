import React, {useEffect, useState} from "react";
import {
    useParams
} from "react-router-dom";

function ProductDetail() {
    let { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        productItems();
    }, [])

    const productItems = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        const jsonData = await response.json();
        setItem(jsonData);
    }

    return (
        <div className="container-product-detail">
            <div className="product-detail">
                <h1>{item.title}</h1>
                <img src={item.image} alt="" />
                <p className="description">{item.description}</p>
                <p className="price">{item.price}$</p>
            </div>
        </div>
    )
}

export default ProductDetail;