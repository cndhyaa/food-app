import Navigation from "@/components/cart-nav"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [totals, setTotals] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("food");
    if (data !== null) {
      setFoods(JSON.parse(data))
    }

    const total = Number(localStorage.getItem("total")) || 0;
    setTotals(total)
  }, [])

  if(foods.length) {
    console.log('food found');
    return (
      <>
        <Navigation />
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
  
          <tbody>
             {foods.map((food) => {
              return <tr key={food?.id}>
                <td><img src={'http://localhost:8000/static/' + food?.image} alt="" width="40" height="40" /></td>
                <td>{food?.name}</td>
                <td>Rs. {food?.price}</td>
                <td>{food?.quantity}</td>
                <td>{food.price*food.quantity}</td>
              </tr>
            })}
          </tbody>
        </table>
        TOTAL: {totals}
      </>
    )
  } else {
    console.log('food not found');
    return (
      <>
       <Navigation />
       <p>cart empty</p>
      </>
    );
  }
}
