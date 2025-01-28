"use client"

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper,SwiperSlide} from "swiper/react"
import   "swiper/css"

import { BsArrowUpRight,BsGithub } from "react-icons/bs";

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import { handler } from "tailwindcss-animate";

import  WorkSliderBtns from "@/components/WorkSliderBtns"



const projects = [
  {
    num:"01",
    category:"Mobile",
    title:"Project 1",
    description:"A aplicação Nearby É uma cuponeria onde você consegue verificar, pela sua localização, quais os estabelecimentos oferecem descontos escaneando o cupom com QR code.",
    stack:[{name:"React-Native"},{name:"Type-Script"},{name:"Async Storage"},{name:"Styled Components"},{name:"Expo"},
    ],
    image: "/assets/work/Nearby.png",
    live:"",
    github:"https://github.com/massancode/Nearby",
  },
  {
    num:"02",
    category:"FullStack",
    title:"Project 2",
    description:"A aplicação Academy Controll É um controle de academia com envio e tratamento de formulário no back-end usando Node.js. É uma excelente aplicação que fiz para poder estudar mais o desenvolvimento Full Stack.",
    stack:[{name:"HTML5"},{name:"CSS3"},{name:"JavaScript"},{name:"Nunjucks"},{name:"Node.js"},{name:"Express.js"},
    ],
    image: "/assets/work/fitness.png",
    live:"",
    github:"https://github.com/massancode/controle_de_academia_com_JS",
  },
  {
    num:"03",
    category:"FrontEnd",
    title:"Project 3",
    description:"O Ports é o meu site de portfólio, onde você encontra meus principais serviços. Na construção dele, utilizei diversas referências de design e ideias que encontrei enquanto navegava pela web. 🌐✨",
    stack:[{name:"Next JS"},{name:"CSS3"},{name:"Tailwind CSS"},{name:" Framer Motion"}
    ],
    image: "/assets/work/ports.png",
    live:"",
    github:"https://github.com/massancode/ports",
  },
  {
    num:"04",
    category:"Mobile",
    title:"Project 3",
    description:"A aplicação Todo foi desenvolvida para ajudar você a gerenciar suas tarefas diárias de maneira simples e eficiente. Adicione, visualize e remova tarefas com facilidade, mantendo-se organizado e produtivo.",
    stack:[{name:"React-Native"},{name:"Type-Script"},{name:"Async Storage"},{name:"Styled Components"},{name:"Expo"}
    ],
    image: "/assets/work/toDo.png",
    live:"",
    github:"https://github.com/massancode/toDo-React-Native",
  },
 
]

const Work = () => {
  const [project,setproject] = useState (projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setproject(projects[currentIndex])
  }

  return (

    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 " >
    
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
               {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return (
                    <li key={index} className="text-x text-accent  ">
                        {item.name}     
                        {index !== project.stack.length -1 && ","}     
                    </li>
                    
                  )
                })}
                
              </ul>

              <div className="border border-white/20 "></div>

              <div className="flex items-center gap-4">

               { /* <Link href={project.live}>
                 <TooltipProvider delayDuration={100}>
                   <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" >
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                   </Tooltip>
                 </TooltipProvider>
                </Link> */}

                <Link href={project.github}>
                 <TooltipProvider delayDuration={100}>
                   <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" >
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub repository</p>
                    </TooltipContent>
                   </Tooltip>
                 </TooltipProvider>
                </Link>
                
              </div>

            </div>
          </div>

          <div className="w-full xl:w-[50%]">

            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange} >

              {projects.map((project,index)=>{
                return (
                 <SwiperSlide key={index}>
                  
                   <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                    
                    <div></div>

                    <div className="relative w-full h-full" >
                      <Image src={project.image} fill className="object-cover" alt="imagem do projeto" />
                    </div>
                                    
                   </div>

                 </SwiperSlide>
                )
              })}
                            
             <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
             />

            </Swiper>

          </div>

        </div>
       </div>

    </motion.section>

  )
}

export default Work;