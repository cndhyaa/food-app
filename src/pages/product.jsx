import Navigation from "../components/navigation"

export default function product() {
  return (
    <div class="row">
      <Navigation />
      <div class="col-6">
        <img src="img/chickenbiryani.jpeg" class="mx-auto d-block" alt="" width="600" height="500" />
      </div>
      <div class="col-3">
        <h2>Chicken Biryani</h2>
        <p>Chicken Biryani is a highly aromatic, mouth-watering staple dish that needs no introduction.
          Because of its endless nuanced flavors, it is perhaps the most comforting meal
          of Indian cuisine that has been a part of community feasts, family gatherings,
          and almost every Indian household for ages.
          Packed with fragrant rice and juicy, tender chicken pieces,
          its a perfect one-pot dinner recipe that your whole family will love!</p>

        <h3>Ingredients:</h3>
        <p> delicious and spicy one pot chicken biryani made with basmati rice,
          spices, chicken and herbs. This is a beginners recipe and can be made with ease.
          Serve chicken biryani with raita or salan (gravy).
        </p>

        <br />
        <h6>Price Rs.250</h6>
        <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
        <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
        <br /><br />

      </div>
      <div class="container">
        <h4>Similar Products</h4>
        <div class="row">
          <div class="col-md">
            <img src="img/R.jpeg" alt="" width="200" height="200" />

            <br />
            <h4>Chicken Tandori</h4>
            <h6>Price Rs.350</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>

          </div>
          <div class="col-md">
            <img src="img/OIP.jpeg" alt="" width="200" height="200" />

            <br />
            <h4>French Fry</h4>
            <h6>Price Rs.220</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>
          <div class="col-md">
            <img src="img/wp2055348.jpg" alt="" width="200" height="200" />

            <br />
            <h4>Chicken Fry</h4>
            <h6>Price Rs.250</h6>
            <button type="button" class="btn btn-success rounded-pill"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
            <button type="button" class="btn btn-danger rounded-pill">Buy now</button>
          </div>
        </div>
      </div>
    </div>

  )
}