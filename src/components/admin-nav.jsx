import Link from "next/link"
import { signOutUser } from "../utilities/login"
export default function Navigation() {
    return (
        <section className="Menu">
            <div className="nav">
                <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <li><Link href="/admin/addfood">Add Food</Link></li>
                    <li><Link href="/admin/viewfood">View Food</Link></li>
                    <li><Link href="/admin/vieworder">View Order</Link></li>
                    <li><Link href="#" onClick={signOutUser} className="btn btn-danger">Log Out</Link></li>
                </ul>
            
            </div>
        </section>
    )
}
