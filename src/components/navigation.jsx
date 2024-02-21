import Link from "next/link"

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
                    <a href = "http://localhost:3000/login"> <input className="btn btn-text pr-3" type="submit" value="Sign In" name="Signin" /></a>
                    <a style = {{textDecoration:'none'}} href = "http://localhost:3000/UserSignup"> <input className="btn btn-danger" type="submit" value="Sign Up" name="Signup" /></a>
</div>

<div>
<select name="cars" id="cars">
  <option value="User">User</option>
  <option value="Admin">Admin</option>
</select>

                </div>
            </div>
        </section>
    )
}
