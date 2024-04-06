import Link from "next/link"
export default function Navigation() {
    return (
        <section className="Menu">
            <div className="nav">
                <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <h3><li><ion-icon name="cart-outline"> </ion-icon>My<b className="text-danger"> Cart</b></li></h3>
                </ul>

            </div>
        </section>
    )
}
