import React from 'react'
import js from "./assets/js.png"
import node from "./assets/node.png"
import react from "./assets/react.png"
import ts from "./assets/ts.png"
import tailwind from "./assets/tailwind.png"
import MySQL from "./assets/MySQL.png"
import mongodb from "./assets/mongodb.png"

import Image from 'next/image'
export default function Tech() {
  const techs = [
    { image: react},
    { image: js},
    { image: ts},
    { image: node},
    { image: tailwind},
    { image: MySQL},
    { image: mongodb},
  ]
  return (
    <div className="sm:mx-[40px] md:mx-[200px] pt-40 my-[50px]">
      <h1 className='text-[2.5rem]'>Tecnologias que trablho</h1>
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-1">
      { techs.map((tech, index) => {
        return(
        <div className='items-center mx-4 flex-1 ' key={index} > 
          <Image src={tech.image} alt="javascript" className='h-[100px] w-auto'/> 
        </div>
        )
      })}
      </div>
      <h2 className='text-[1.7rem] pt-5'>Experência</h2>
      <span className='mx-3'>Trabalho a 1 ano e meio como desenvolvedor Full-Stack em projetos freelances desenvolvendo SASS, APIs internas, e Web-Softwares e landing pages.</span>
    </div>
  )
}
