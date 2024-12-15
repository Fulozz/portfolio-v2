import React from 'react'
import js from "./assets/js.png"
import node from "./assets/node.png"
import react from "./assets/react.png"
import ts from "./assets/ts.png"
import tailwind from "./assets/tailwind.png"
import MySQL from "./assets/MySQL.png"
import mongodb from "./assets/mongodb.png"
import express from "./assets/express.png"
import next from "./assets/next.png"
import bootstrap from "./assets/bootstrap.png"

import Image from 'next/image'

export default function Tech() {

    const frontend = [
      { image: react,
        name: 'React '
      },
      { image: js,
        name: 'Javascript'
      },
      { image: ts,
        name: 'Typescript'
      },
      { image: tailwind,
        name: 'Tailwind CSS'
      },
      ,
      { image: bootstrap,
        name: 'Bootstrap'
      },
    ]
    const backend = [
      { image: node,
        name: 'NodeJs'
      },
      { image: express,
        name: 'Express'
      },
      { image: next,
        name: 'Next.Js'
      },

    ]
    const db = [
      { image: MySQL,
        name: 'MySQL'
      },
      { image: mongodb,
        name: 'MongoDB'
      },
      
    ]

  return (
    <div className=" pt-40 my-[50px] bg-white h-full text-black">
      <div className="sm:mx-[40px] md:mx-[200px] flex flex-col justify-center items-center md:justify-start md:items-start">
      <h1 className='text-[2.5rem] text-center '>Tecnologias que trabalho</h1>
      <h3 className='pb-2 text-[1.3rem]  pl-2 md:pl-0'>Front-End</h3>
      <div className="pl-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      { frontend.map((frontend, index) => {
        return(
        <div className=" hover:transform hover:translate-y-[-5px] flex flex-col items-center justify-center content-center p-8 rounded-lg shadow-md w-[250px]  hover:shadow-lg hover:border-black transition hover:border-2 border border-gray-400" key={index} > 
          <Image src={frontend.image} alt={frontend.name} className='h-[70px] w-auto'/> 
          <span className=' text-center'>{frontend.name}</span>
        </div>
        )
      })}
      </div>
      <h3 className='pb-2 pt-4 text-[1.3rem] '>Back-End</h3>
      <div className=" pl-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      { backend.map((backend, index) => {
        return(
          <div className='hover:transform hover:translate-y-[-5px]  flex flex-col items-center justify-center content-center p-8 mr-3 rounded-lg shadow-md w-[250px] shadow-black border-2 border-gray-400 hover:border-black transition hover:border-2 ' key={index} > 
          <Image src={backend.image} alt={backend.name} className='h-[70px] w-auto'/>
          <span className=' text-center'>{backend.name}</span> 
        </div>
        )
      })}
      </div>
      <h3 className='pb-2 pt-4 text-[1.3rem]'>Database</h3>
      <div className="pl-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      { db.map((db, index) => {
        return(
          <div className='hover:transform hover:translate-y-[-5px]  flex flex-col items-center justify-center content-center p-8 mr-3 rounded-lg shadow-md w-[250px] shadow-black border-2 border-gray-400 hover:border-black transition hover:border-2 ' key={index} >  
          <Image src={db.image}  className='h-[70px] w-auto' alt={db.name}/>
          <span className=' text-center'>{db.name}</span>
        </div>
        )
      })}
      </div>



      <h2 className='text-[1.7rem] pt-5'>Experência</h2>
      <h4 className='mx-3 text-[1.2rem]'>Trabalho a 1 ano e meio como desenvolvedor Full-Stack em projetos freelances desenvolvendo SASS, APIs internas, e Web-Softwares e landing pages.</h4>
      </div>
    </div>
  )
}
