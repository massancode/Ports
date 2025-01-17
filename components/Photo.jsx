"use client"

 import {animate, motion} from "framer-motion"
 import Image from "next/image"
 import ImagePerfil from "@/assets/photo.png"


const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay: 1.4,duration:0.4,ease:"easeInOut"}}} > 

            <motion.div className="w-[298px] h-[298px] xl:h-[498px]  xl:w-[498px]  mix-blend-lighten" >
                <Image src={ImagePerfil}  priority quality={100} fill alt="image" className="object-contain" />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Photo