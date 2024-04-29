import Navigation from "@/components/cart-nav"
import Link from "next/link"
import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig"

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [totals, setTotals] = useState(0);
  const [address, setAddress] = useState("")

  useEffect(() => {
    const data = localStorage.getItem("food");
    if (data !== null) {
      setFoods(JSON.parse(data))
    }

    const total = Number(localStorage.getItem("total")) || 0;
    setTotals(total)
  }, [])

  function purchase() {
    let order = JSON.parse(localStorage.getItem("food"));
    let email = auth.currentUser.email;
    console.log(order);
    console.log(email);
    console.log({address})
  }

    if (foods.length) {
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
                  <td>{food.price * food.quantity}</td>
                </tr>
              })}
            </tbody>
          </table>
          <button class="btn btn-danger">Total: {totals}</button>
          <br />
          <br />
          <div>
            <button class="btn btn-success">Address</button><input  onChange={e => setAddress(e.target.value)}   type="text" id="address" name="address" />
      
          </div>
          <div>
            <br />
            <button class="btn btn-success" onClick={purchase}> Buy Now </button>
          </div>
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






