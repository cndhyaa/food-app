
import Link from "next/link"
import { signOutUser } from "../utilities/login"

export default function Navigation() {
    return (
        <section className="Menu">
            <div className="nav">
                <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <li><Link href="UserSigninHome">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                    <br/>
                    <h3><li><ion-icon name="cart-outline"> </ion-icon>My<b className="text-danger"> Cart</b></li></h3>
                </ul>
                <div>
                    <input onClick={signOutUser} className="btn btn-danger" type="submit" value="logout" name="logout" />

                </div>
            </div>
        </section>
    )
}
