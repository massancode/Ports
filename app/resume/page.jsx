"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaGithub,FaMobile,FaUnity} from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs,SiAdobe} from "react-icons/si"


const about={
      title:"Sobre:",
      description:"Tenho foco em front-end e mobile desde 2018, especializado em React e React Native, além de experiência sólida em Node.js e TypeScript. ",
      info:[
        {
          fieldName:"Nome",
          fieldValue:"Fernando Massan"
        },
        {
          fieldName:"Telefone/WhatsApp",
          fieldValue:"+55 86 99424-7978"
        },
        {
          fieldName:"Experiencia",
          fieldValue:"5+ Anos"
        },
        {
          fieldName:"Nacionalidade",
          fieldValue:"Brasileiro"
        },
        {
          fieldName:"Email",
          fieldValue:"Fernandolucasccr@gmail.com"
        },
        {
          fieldName:"Freelancer",
          fieldValue:"Aceitando"
        },
        {
          fieldName:"Idiomas",
          fieldValue:"Português - inglês"
        },
      ]
}

const experience={
  icon:'/assets/resume/badge.svg',
  title:"Minhas Experiencias",
  description: "Tenho foco em front-end e mobile desde 2018, especializado em React e React Native, além de experiência sólida em Node.js e TypeScript.",
  items:[
    {
      company:"Grupo Educacional CEV LTDA",
      position:"Coordenação de Práticas em React",
      duration:"2021 - Present",
      segment:"WEB/Mobile"
    },
    {
      company:"2palitoStudio",
      position:"Dev e Líder de Estúdio",
      duration:"2022 - Present",
      segment:"C#/Unity"
    },
    {
      company:"Seven-Gráfica",
      position:"Finalização de layouts para produção ",
      duration:"2020 -2021",
      segment:"Designer and Finalist"
    },
    {
      company:"Pixels Escola",
      position:"Professor WEb",
      duration:"2017 - 2019",
      segment:"HTML/CSS/JavaScript"
    },
  ]
}
const education={
  icon:'/assets/resume/cap.svg',
  title:"Minhas Formações",
  description: "Cuidando e aprimorando cada vez mais minhas habilidades.",
  items:[
    {
     instituition:"Estácio, Teresina",
     formação:"Bacharel - Engenharia de SoftWare",
     duration:"2021 - 2025"
    },
    {
     instituition:"Instituto Faculeste LTDA",
     formação:"Pós-Graduado - Artificial Intelligence ",
     duration:"2024 - 2025"
    },
    {
     instituition:"Instituto Faculeste LTDA",
     formação:"Pós-Graduado - Development for Mobile",
     duration:"2024 - 2025"
    },
    {
     instituition:"Instituto Faculeste LTDA",
     formação:"Pós-Graduado - Digital Game Development ",
     duration:"2024 - 2025"
    },
    {
     instituition:"Instituto Faculeste LTDA",
     formação:"Pós-Graduado - Teaching Information Systems ",
     duration:"2024 - 2025"
    },
    {
     instituition:"Rocketseat",
     formação:"Full-Stack - Launch Base",
     duration:"2020 - 2021"
    },
    {
      instituition:"Rocketseat",
      formação:"React Native",
      duration:"2024 - 2025"
     },
    {
     instituition:"Gracom School of Visual Effects",
     formação:"Adobe Certified Professional",
     duration:"2015"
     },
    
    
  ]
}
const skils={
  title:"Minhas Habilidades",
  description: "especializado em React e React Native, além de experiência sólida em Node.js e TypeScript. Possuo habilidades em C# e Unity para a criação de games",
  skillList:[
    {
     icon:<FaHtml5/>,
     name:"html5"
    },   
    {
     icon:<FaCss3/>,
     name:"css3"
    },   
    {
      icon:<SiNextdotjs/>,
      name:"next.js"
     }, 
     {
      icon:<SiTailwindcss/>,
      name:"tailwindcss"
     }, 
    {
     icon:<FaJs/>,
     name:"js"
    },  
    {
      icon:<FaReact/>,
      name:"react"
     },  
    {
     icon:<FaMobile/>,
     name:"mobile"
    },   
    {
     icon:<FaGithub/>,
     name:"github"
    },   
    {
     icon:<FaFigma/>,
     name:"figma"
    },   
    {
     icon:<FaNodeJs/>,
     name:"nodeJs"
    }, 
    {
     icon:<FaUnity/>,
     name:"Unity"
    },  
    {
     icon:<SiAdobe/>,
     name:"Adobe"
    },
      
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (

    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" >
        
        <div className="container mx-auto">

         <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">

          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
               <TabsTrigger value="experience">Experiencias</TabsTrigger>
               <TabsTrigger value="education">Formações</TabsTrigger>
               <TabsTrigger value="skills">Habilidades</TabsTrigger>
               <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>

         <div className="min-h-[70vh] w-full">

           <TabsContent value="experience" className="w-full">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">

                <h3 className="text-4xl font-bold">{experience.title}</h3>

                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 ">
                    {experience.description}
                  </p>

                <ScrollArea className="h-[450px]">

                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex  flex-col justify-center items-center lg:items-start gap-1 ">

                          <span className="text-accent">{item.duration}</span>

                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>

                          <div className="flex items-center gap-3">

                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/80">{item.company}</p>

                          </div>

                          <div className="flex items-center gap-3">

                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/80">{item.segment}</p>

                          </div>

                        </li>

                      )
                    })}
                    
                   </ul>

                </ScrollArea>
                
               </div>
           </TabsContent>

           <TabsContent value="education" className="w-full">
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">

                <h3 className="text-4xl font-bold">{education.title}</h3>

                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 ">
                    {education.description}
                  </p>

                <ScrollArea className="h-[450px]">

                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex  flex-col justify-center items-center lg:items-start gap-1 ">

                          <span className="text-xl text-accent">{item.instituition}</span>

                          <h3 className="text-x max-w-[460px] min-h-[60px] text-center lg:text-left">{item.formação}</h3>

                          <div className="flex items-center gap-3">

                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/80">{item.duration}</p>

                          </div>
                          
                        </li>

                      )
                    })}
                    
                   </ul>

                </ScrollArea>
                
               </div> 
              
           </TabsContent>

           <TabsContent value="skills" className="w-full h-full">
                 
                 <div className="flex flex-col gap-[30px]">
                   <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold  ">{skils.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skils.description}</p>
                   </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 gap-4  xl:gap-[30px] ">
                      {skils.skillList.map((skill,index)=>{
                        return (
                          <li key={index}>
                           <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                                <div className="text-6xl  group-hover:text-accent transition-all duration-300 ">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                           </TooltipProvider>
                          </li>
                        )
                      })}     
                    </ul>
                 </div>

           </TabsContent>

           <TabsContent value="about" className="w-full text-center xl:text-left  ">
                 <div className="flex flex-col gap-[30px] ">
                   <h3 className="text-4xl font-bold">{about.title}</h3>

                   <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                   {about.description}
                   </p>

                   <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item,index)=>{
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60 text-xl">{item.fieldName}</span>
                              
                              <span className="text-xs">{item.fieldValue}</span>
                          </li>
                        )
                      })}
                   </ul>
                 </div>
           </TabsContent>

         </div>

         </Tabs>

        </div>

    </motion.div>

  )
}

export default Resume;