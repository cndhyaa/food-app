import Navigation from "@/components/admin-nav";
import axios from "axios";
import { useState, useEffect } from "react";

export default function products() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/orders`)
            .then(res => {
                const data = res.data.data;
                console.log(data);
                setOrders(data);

            })
    }, [])

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="row">
                    {!orders.length && "no data"}


                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Food</th>
                                <th>Quantity</th>
                                <th>Price</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length && orders.map((order) => {
                                return <tr key={order?._id}>
                                    <td>{order?.food}</td>
                                    <td>{order?.address}</td>
                                    <td>{order.total}</td>
                                    <td>{'view'}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}