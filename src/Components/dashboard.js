import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {

    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        product();
    }, [])

    const product = async () => {
        const response = await fetch('https://fakestoreapi.com/products')

        const jsonData = await response.json();
        setList(jsonData);
    }

    const routeToProductDetail = (id) => {
        navigate({ pathname: `/dashboard/${id}` }, { replace: true })
    }

    return (
        <div className="container-product">
            <h1>Welcome to Dashboard</h1>
            <div className="product-list">
                {list.map((values) => {
                    return (
                        <div className="product-items" onClick={() => routeToProductDetail(values.id)}>
                            <h5 key={values}>{values.title}</h5>
                            <img key={values} src={values.image} alt="" />
                            <p key={values}>{values.description}</p>
                            <p className="price" key={values}>{values.price}$</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;