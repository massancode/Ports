import Social from "@/components/Social";
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi';
import Photo from "@/components/Photo"
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
         <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24" >

           <div className="text-center xl:text-left order-2 xl:order-none">

             <span>Engenheiro de Software</span>
              <h1 className="h1 mb-6" >
                 ola! eu sou 
                <br/> 
                <span className="text-accent"> Fernando Massan</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
              Destaco-me na criação de experiências digitais elegantes e sou altamente competente em diversas linguagens de programação e tecnologias. 
              </p>
              {/* bts sociais media */}
              <div className="flex flex-col xl:flex-row items-center gap-8" >
                
                <Link target='blank' href={"https://1drv.ms/b/s!ApXySJ3yJ5mKjKUn-1-FSYotF2xqyA?e=57MCyP"}>

                <Button   variant="outline" size="lg"  className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
                
                </Link>

                <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 border border-accent rounded-full  flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 " />
                </div>
              </div>
           </div>
           <div className="order-1 xl:oder-none mb-8 xl:mb-0" >
           <Photo/>
           </div>
          </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home