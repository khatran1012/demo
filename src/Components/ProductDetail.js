import React, {useEffect, useState} from "react";
import {
    useParams
} from "react-router-dom";

function ProductDetail() {
    let { id } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        product();
    }, [])

    const product = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        const jsonData = await response.json();
        setList(jsonData);
    }

    return (
        <div className="container-product-detail">
            <div className="product-detail">
                <h1>{list.title}</h1>
                <img src={list.image} alt="" />
                <p className="description">{list.description}</p>
                <p className="price">{list.price}$</p>
            </div>
        </div>
    )
}

export default ProductDetail;