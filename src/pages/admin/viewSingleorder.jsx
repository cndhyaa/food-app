import Navigation from "@/components/admin-nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function products() {
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        setId(router.query.id);
    }, [])

    useEffect(() => {
        if (id) {
            getOrderById(id)
        }
    }, [id])

    const getOrderById = (id) => {
        axios.get(`http://localhost:8000/api/order/` + id)
            .then(res => {
                const data = res.data.data;
                console.log(data);
                setOrders(data);
            })

    }

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
                            
                        {orders.length > 0 && orders.map((order) =>
                                order.order.map((item, index) => ( 
                                    <tr key={item.id || index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                            Total: {orders.length > 0 ? orders[0].total : ''}
                </div>
            </div>
        </>
    )
}