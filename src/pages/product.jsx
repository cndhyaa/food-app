import Navigation from "../components/user-nav"

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

        {!foods.length && "no data"}
        {foods.length && foods.map((food, index) => {
          return <div className="col-md" key={index}>
            <img src={'http://localhost:8000/static/' + food.image} alt="" width="900" height="700" />
            <br />

            <h2>{food.name}</h2>
            <h5>Price Rs.{food.price}</h5>

                  <div class="row">
                    <div class="col">
                      <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
                      {/* <input type="text" class="form-control" placeholder="First name" aria-label="First name"> */}
                    </div>
                    <div class="col">
                      <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
                      <br /><br />
                      {/* <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"> */}
                    </div>
                  </div>
              <h3>Description:</h3>
              <p>{food.description} </p>

              <h3>Ingredients:</h3>
              <p>{food.ingredients}</p>
          
            <br />
          </div>
        })}
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
    </div>

  )
}