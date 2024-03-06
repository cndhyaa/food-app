import Navigation from "@/components/admin-nav";
import axios from "axios";
import { useState, useEffect } from "react";

export default function products() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/foods`)
            .then(res => {
                const data = res.data.data;
                console.log(data);
                setFoods(data);

            })
    }, [])

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="row">
                    {!foods.length && "no data"}
                    {foods.length && foods.map((food, index) => {
                        return <div className="col-md" key={index}>
                            <img src={'http://localhost:8000/static/' + food.image} alt="" width="200" height="200" />
                            <br />
                            <h4>{food.name}</h4>
                            <h6>Price Rs. {food.price}</h6>
                            <button type="button" className="btn btn-success rounded-pill">Delete</button>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}