import Link from "next/link"

export default function Navigation() {
    return (
        <section class="Menu">
            <div class="nav">
                <div class="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/product">Product</Link></li>
                </ul>
                <div>
                    <input class="btn btn-text pr-3" type="submit" value="Sign In" name="Signin" />
                    <input class="btn btn-danger" type="submit" value="Sign Up" name="Signup" />

                </div>
            </div>
        </section>
    )
}

