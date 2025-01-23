import { Target } from "lucide-react"
import Link from "next/link"

import {FaGithub,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa" 

const socials = [
    {icon: <FaGithub/>,path: "https://github.com/massancode"},
    {icon: <FaLinkedin/>,path:"https://www.linkedin.com/in/fernando-lucas-de-castro-309352233/" },
]

const Social = ({containerStyles,iconStyles}) => {
  return (

    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link target="_blank" key={index} href={item.path} className={iconStyles} >
                {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social