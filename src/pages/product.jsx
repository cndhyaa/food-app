import Navigation from "../components/navigation"

import axios from "axios";
import { useState, useEffect } from "react";

export default function product() {
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
    <div className="row">
      <Navigation />
      <div className="col-6">
      <img src={'http://localhost:8000/static/' + foods.image} alt="" width="600" height="500" />
      </div>
      <div className="col-3">
        <h2>{foods.name}</h2>
        <p>{foods.description} </p>

        <h3>Ingredients:</h3>
        <p>{foods.ingredients}</p>

        <br />
        <h6>Price Rs.{foods.price}</h6>
        <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
        <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
        <br /><br />

      </div>
      {/* <div className="container">
        <h4>Similar Products</h4>
        <div className="row">
          <div className="col-md">
            <img src="img/R.jpeg" alt="" width="200" height="200" />

            <br />
            <h4>Chicken Tandori</h4>
            <h6>Price Rs.350</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>

          </div>
          <div className="col-md">
            <img src="img/OIP.jpeg" alt="" width="200" height="200" />

            <br />
            <h4>French Fry</h4>
            <h6>Price Rs.220</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <div className="col-md">
            <img src="img/wp2055348.jpg" alt="" width="200" height="200" />

            <br />
            <h4>Chicken Fry</h4>
            <h6>Price Rs.250</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>
        </div>
      </div>
    */}
     </div>

  )
}