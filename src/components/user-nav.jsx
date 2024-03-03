import Link from "next/link"
import { signOutUser } from "../utilities/login"

export default function Navigation() {
    return (
        <section className="Menu">
            <div className="nav">
                <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/product">Product</Link></li>
                </ul>
                <div>
                    <a style={{ textDecoration: 'none' }} > <input className="btn" type="submit" value="Cart" name="cart" /></a>

                    <input onClick={signOutUser} className="btn btn-danger" type="submit" value="logout" name="logout" />

                </div>
            </div>
        </section>
    )
}
