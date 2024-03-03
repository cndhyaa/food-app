import Navigation from "@/components/admin-nav"
import styles from "../../styles/admin.module.css"
export default function AdminHome() {

    return (
        <>
            {/* <link rel="stylesheet" href="styles\admin.css" /> */}
            {/* <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <li><a href="#">Add Food </a></li>
                    <li><a href="#">View Food</a></li>
                    <li><a href="#">View Orders</a></li>
                    <li><a href="#">LogOut</a></li>
                </ul>
                */}
            <Navigation />
            <section className="grid">
                <div className="content">
                    <div className="content-left">
                        <div className="info">
                            <p>From orders to ingredients:</p>
                            <p>"In the heart of kitchen, where ingredients of innovation meet the recipe of efficiency".
                            </p>
                        </div>

                        <div className="content-right">
                            <img src="img/pizza.jpg" alt="" />

                            <section />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}