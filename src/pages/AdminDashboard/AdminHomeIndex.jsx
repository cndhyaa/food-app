import Navigation from "@/components/navigation"
import Link from "next/link"
//  import  '../styles/globals.css'


export default function Home() {
  return (
    <>
    <Navigation />
     <section class="grid">
        <div class="content">
            <div class="content-left">
            <div class="info">
                <h3>"In the heart of kitchen where the ingredients of innovation meet the recipe of efficiency.".</h3>
                <p>"From orders to ingredients".</p>
        </div>
        <Link href='/products' className="btn btn-danger">More Items</Link>
            </div>
            <div class="content-right">
                <img src="" alt=""/>
            </div>
       </div>         
   </section>
   </>
  )
}