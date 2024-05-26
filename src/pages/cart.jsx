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

    if (typeof window !== 'undefined') {
      // Clear the cart upon successful payment
      localStorage.removeItem("food");
      localStorage.removeItem("total");
      setFoods([]);
      setTotals(0);
    }

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
                <td>{food?.quantity}
                  <button className="btn" onClick={() => {
                    const newFoods = []
                    foods.forEach((f) => {
                      if (food.id == f.id) {
                        console.log(f)
                        newFoods.push({
                          // food:"[{"id":"664b52c830fac7af62b71a85","name":"Cheese Cake","price":350,"quantity":1,"image":"1716207965016_cheese cake.jpeg"}]"
                          id: food.id, name: food.name, price: food.price, quantity: food.quantity + 1, image: food.image
                        })
                      } else {
                        newFoods.push(f)

                      }
                      console.log(newFoods)
                      setFoods(newFoods)
                      localStorage.setItem("food", JSON.stringify(newFoods));
                      const sum = newFoods.reduce((acc,cur)=>{
                        return acc+(cur.price*cur.quantity)
                        },0)
                        setTotals(sum)
                        localStorage.setItem("total",sum);
                    })
                  }}>+</button><button className="btn" onClick={() => {
                    const newFoods = []
                    foods.forEach((f) => {
                      if (food.id == f.id) {
                        console.log(f)
                        newFoods.push({
                          // food:"[{"id":"664b52c830fac7af62b71a85","name":"Cheese Cake","price":350,"quantity":1,"image":"1716207965016_cheese cake.jpeg"}]"
                          id: food.id, name: food.name, price: food.price, quantity: food.quantity - 1, image: food.image
                        })
                      } else {
                        newFoods.push(f)

                      }
                      console.log(newFoods)
                      setFoods(newFoods)
                      localStorage.setItem("food", JSON.stringify(newFoods));
                      const sum = newFoods.reduce((acc,cur)=>{
                      return acc+(cur.price*cur.quantity)
                      },0)
                      setTotals(sum)
                      localStorage.setItem("total",sum);
                    })

                  }}>-</button></td>
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
          <button class="btn btn-success m-2" onClick={purchase}> Buy Now </button>
          <button class="btn btn-success m-2" onClick={pay}> Pay</button>
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






