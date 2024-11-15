import Navigation from "@/components/admin-nav";
import axios from "axios";
import Link from "next/link";
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
                                <th>Email</th>
                                <th>Address</th>
                                <th>Total</th> 
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length && orders.map((order) => {
                                return <tr key={order?._id}>
                                    <td>{order?.email}</td>
                                    <td>{order?.address}</td>
                                    <td>{order.total}</td>
                                    <td><Link href={"viewSingleorder?id=" + order?._id}>View</Link></td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}