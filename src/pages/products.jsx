import Navigation from "@/components/user-nav";
import { addToCart } from "@/utilities/cart";
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
      <div className="container ">
        <div className="row">
          {!foods.length && "no data"}
          {foods.length && foods.map((food, index) => {
            return <div className="col-md mb-3" key={index}>
              <img src={'http://localhost:8000/static/' + food.image} alt="" width="200" height="200" />
              <br />
              <h4>{food.name}</h4>
              <h6>Price Rs. {food.price}</h6>
              <button type="button" onClick={() => addToCart(food)} className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
              {/* <button type="button" className="btn btn-danger rounded-pill">Buy now</button> */}
            </div>
          })}

          {/* 
          <div className="col-md">
            <img src="img/pizza.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Pizza</h4>
            <h6>Price Rs.430</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>


          <div className="col-md">
            <img src="img/nonveg thakali.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Non-veg Thakali</h4>
            <h6>Price Rs.320</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>

          <div className="col-md">
            <img src="img/veg thakali set.jpg" alt="" width="200" height="200" />

            <br />
            <h4>Veg Thakali</h4>
            <h6>Price Rs.300</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md">
            <img src="img/fried-momo-recipe-1-360x540.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Fry Momo</h4>
            <h6>Price Rs.300</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <br />
          <br />

          <div className="col-md">
            <img src="img/chawmin.jpeg" alt="" width="200" height="200" />
            <br />
            <h4>Chawmin</h4>
            <h6>Price Rs.300</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <br />
          <br />

          <div className="col-md">
            <img src="img/sandwich.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Sandwich</h4>
            <h6>Price Rs.330</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <br />
          <br />


          <div className="col-md">
            <img src="img/hazelnut latte.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Latte</h4>
            <h6>Price Rs.400</h6>
            <button type="button" className="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" className="btn btn-danger rounded-pill">Buy now</button>
          </div> */}

          

        </div>
      </div>
    </>
  )
}
