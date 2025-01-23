import Link  from "next/link"
import { Button } from "./ui/button";
import MobiNav from "./MobiNav";
import Nav from "./nav"

const Header = () => {

  return( 

    <header className="py-8 xl:py-12 text-white ">  

      <div className="container mx-auto flex justify-between items-center" > 

        <Link href={"/"}>
             <h1 className="text-4xl font-semibold">
                Massan<span className= "text-accent" >.</span>
             </h1>
        </Link>
         
         <div className="hidden xl:flex items-center gap-8">
           <Nav/>  
          < Link target="_blank" href={'https://www.linkedin.com/in/fernando-lucas-de-castro-309352233/'} >
              <Button> Contrate-me </Button>
           </Link>
         </div>
       
        <div className="xl:hidden">
          <MobiNav/>
        </div>

      </div>
    </header>
  )}

export default Header;