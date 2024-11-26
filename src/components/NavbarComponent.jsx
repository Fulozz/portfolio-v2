"use client"
import React, { useState } from 'react'
import ThemeToggle from './theme/ThemeToggle'
import { Menu, X } from 'lucide-react';
import DownloadButton from './DownloadButton';

export default function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const navItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Sobre',
            href: '/sobre',
        },
        {
            name: 'Projetos',
            href: '/projetos'
        },
        {
            name: 'Contato',
            href: '/contato',
        }
    ]
  return (
    <div className="flex items-center justify-between  text-black dark:text-white h-20 py-2 px-8 mx-[60px] my-4 ">
        <div className='flex'>
            <a href="#" className='font-semibold w-20'> <img src='/logo.png' /></a>
        </div>
        <div className=" items-center hidden md:flex lg:flex">
        <DownloadButton />
            {navItems.map((item, index) => {
                return (
                    <a key={index} href={item.href} className='mx-4 font-normal text-slate-300 hover:text-slate-300' download={item.download}>{item.name}</a>
                )
            })}
            <ThemeToggle />
        </div>
        <div className={`fixed top-0 left-0 w-full h-screen md:hidden bg-gray-900/90 z-50 transition duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        
          <div className="flex flex-col items-center justify-center text-center h-full">
            <ul className="space-y-4 items-center">
              {navItems.map((item, index) => (
                <li key={index} className='pb-4'>
                  <a
                    href={item.href}
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium mt-4"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
        <div className="md:hidden lg:hidden z-50 justify-center" onClick={toggleMenu}>
           {isOpen ? (<X className='fixed'/>) :( <Menu className='fixed'/>)}
        </div>
    </div>
  )
}
