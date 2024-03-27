import Navigation from "@/components/navigation"
import Link from "next/link"
//  import  '../styles/globals.css'


export default function Home() {
  return (
    <>            
    <Navigation />
     <section className="grid">
        <div className="content">
            <div className="content-left">
            <div className="info">
                <h2>Welcome!!!</h2>
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
