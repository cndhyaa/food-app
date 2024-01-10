import Navigation from "@/components/navigation"

export default function products() {
  return (
    <>
      <Navigation />
      <div class="container">
        <div class="row">
          <div class="col-md">
            <img src="img/cheese cake.jpeg" alt="" width="200" height="200" />
            <br />
            <h4>Cheese Cake</h4>
            <h6>Price Rs.220</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>

          <div class="col-md">
            <img src="img/pizza.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Pizza</h4>
            <h6>Price Rs.430</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>


          <div class="col-md">
            <img src="img/nonveg thakali.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Non-veg Thakali</h4>
            <h6>Price Rs.320</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>

          <div class="col-md">
            <img src="img/veg thakali set.jpg" alt="" width="200" height="200" />

            <br />
            <h4>Veg Thakali</h4>
            <h6>Price Rs.300</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="container">
        <div class="row">
          <div class="col-md">
            <img src="img/fried-momo-recipe-1-360x540.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Fry Momo</h4>
            <h6>Price Rs.300</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <br />
          <br />

          <div class="col-md">
            <img src="img/chawmin.jpeg" alt="" width="200" height="200" />
            <br />
            <h4>Chawmin</h4>
            <h6>Price Rs.300</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <br />
          <br />

          <div class="col-md">
            <img src="img/sandwich.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Sandwich</h4>
            <h6>Price Rs.330</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <br />
          <br />


          <div class="col-md">
            <img src="img/hazelnut latte.jpg" alt="" width="200" height="200" />
            <br />
            <h4>Latte</h4>
            <h6>Price Rs.400</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>

        </div>
      </div>
    </>
  )
}