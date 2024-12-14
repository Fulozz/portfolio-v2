"use client"
import React, { useState } from 'react'
import ThemeToggle from './theme/ThemeToggle'
import { Menu, X } from 'lucide-react';
import DownloadButton from './DownloadButton';
import Image from 'next/image';
import Link from 'next/link';
import logo from "./assets/logo.png"

export default function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
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
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Seu logo ou título aqui */}
              <Image src={logo} alt="Logo" width={60} height={60} />	
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              {
              navItems.map((item, index) => {
                return (
                    <Link key={index} href={item.href} className='mx-4 font-normal text-black dark:text-white hover:text-slate-300' download={item.download}>{item.name}</Link>
                  )
                })
              }
                {/* Outros links aqui */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggle}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} flex flex-col space-y-4`}>
        <div className=" px-2 pt-2 pb-4 sm:px-3 justify-center text-center">
          
          {
            navItems.map((item, index)=> {
              return(
                <Link href="/" key={index} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[1.5rem] font-medium">
                  {item.name}
              </Link>
              )
            })
          }
          {/* Outros links aqui */}
        </div>
      </div>
    </nav>
  )
}
