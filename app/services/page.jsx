"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

const services=[
 {
    num:"01",
    title: "Desenvolvedor Web",
    description:"Utilizando tanto as tecnologias mais basicas como HTML e CSS, mas tambem utilizando REACT e suas libs",
    href:"",
 },
 {
    num:"02",
    title: "Desenvolvedor Mobile",
    description:"Utilizando tanto as tecnologias mais basicas como HTML e CSS, mas tambem utilizando REACT e suas libs",
    href:"",
 },
 {
    num:"03",
    title: "Desenvolvedor de Games",
    description:"Utilizando tanto as tecnologias mais basicas como HTML e CSS, mas tambem utilizando REACT e suas libs",
    href:"",
 },

]


const Services = () => {
  return (
    
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div>
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="grid grid-cols-1 md:grid-cols-2  gap-[60px]">
         {services.map((service,index)=>{
          return (
            <div key={index} className="felx-1 flex flex-col justify-center gap-6 group" >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent">{service.num}</div>
                    <Link href={service.href}>
                    <BsArrowDownRight/>
                    </Link>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="border-b border-white/20 w-full " ></div>
            </div>
          )
         })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;