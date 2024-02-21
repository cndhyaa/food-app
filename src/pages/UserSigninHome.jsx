import Navigation from "@/components/navigation"
import Link from "next/link"
//  import  '../styles/globals.css'


export default function Home() {
  return (
    <>
    
    <link rel="stylesheet" href="styles\AdminHome.css" />
                <section className="Menu" />
                <div className="nav" />
                <div className="logo"><h1>Khaney<b>Kura</b></h1></div>
                <ul>
                    <li><a href="#">Add Food </a></li>
                    <li><a href="#">View Food</a></li>
                    <li><a href="#">View Orders</a></li>
                    <li><a href="#">LogOut</a></li>
                </ul>
    <Navigation />
     <section className="grid">
        <div className="content">
            <div className="content-left">
            <div className="info">
                <h3>Taste the joy in every bite.</h3>
                <p>Elevating ordinary moments with extraordinary flavors.</p>
        </div>
        <Link href='/products' className="btn btn-danger">More Items</Link>
            </div>
            <div className="content-right">
                <img src="img/Veg-Biryani-Recipe..jpg" alt=""/>
            </div>
       </div>         
   </section>
   </>
  )
}
