import Navigation from "@/components/navigation"
import Link from "next/link"
// import  '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Navigation />
     <section class="grid">
        <div class="content">
            <div class="content-left">
            <div class="info">
                <h3>Taste the joy in every bite.</h3>
                <p>Elevating ordinary moments with extraordinary flavors.</p>
        </div>
        <Link href='/products' className="btn btn-danger">More Items</Link>
            </div>
            <div class="content-right">
                <img src="img/Veg-Biryani-Recipe..jpg" alt=""/>
            </div>
       </div>         
   </section>
   </>
  )
}
