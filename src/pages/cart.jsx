import Navigation from "@/components/cart-nav"
import Link from "next/link"
import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig"
import axios from "axios";
import { EsewaPayment } from '@bisham/payment-package';

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [totals, setTotals] = useState(0);
  const [address, setAddress] = useState("");
  const esewaPayment = new EsewaPayment({
    successRedirectUrl: 'http://localhost:3000/cart',
    failureRedirectUrl: 'http://localhost:3000/cart'
  });

  const pay = () => {
      esewaPayment.initiate({
          amount: totals,
          // Add A unique process-id
          processId: crypto.randomUUID(),
          totalAmount: totals
      })
  }

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

    axios.post('http://localhost:8000/api/order', {
      order,
      email,
      total: totals,
      address
    })
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
          <p class="btn">Address</p><input onChange={e => setAddress(e.target.value)} type="text" required="required" id="address" name="address" />
        </div>
        <div>
          <br />
          <button class="btn btn-success" onClick={purchase}> Buy Now </button>
          <button class="btn btn-success" onClick={pay}> Pay</button>
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






