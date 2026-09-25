import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import website_logo from "../assets/website_logo.png";
import { Button } from '@base-ui/react/button';
import {Menu, X} from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false);

    const navLink = [
        {label:"Home", href:"/"},
        {label:"Services", href:"/Services"},
        {label:"About", href:"/About"},
        {label:"Contact", href:"/Contact"}
    ]
  return (
    <header className="fixed top-0 left-0 right-0 w-full py-5 px-5 md:px-10 lg:px-20 bg-accent">
        <div className="flex items-center justify-between h-15"> 

            {/* LOGO */}
            <Link to ="/" className="flex items-center gap-3">
            <img src={website_logo} alt="Johnkay" className='w-15 h-10 rounded-xl'/>
            <div className="flex items-center justify-between">
                <span className="text-[#19472b]sm:hidden text-xl font-poppins font-extrabold">JOHNKAY CONSULTANT</span>
            </div>
            </Link>

            {/* // DESKTOP  NAVIGATION  */}
            <nav className="hidden md:flex items-center gap-8">
                {navLink.map((link)=>(
                  <Link 
                  key={link.label}
                  to={link.href}
                  className='text-decoration: none hover:text-amber-500 font-extrabold'>
                  {link.label}
                  </Link>

                ))}
             </nav>

             {/* CTA BUTTON */}
             <div className="hidden md:block">
                <Link to="/About">
                <Button className="bg-green-500 text-white rounded-xl  font-bold p-3 cursor:pointer ">
                    SEND A MESSAGE
                </Button>
                </Link>
             </div>

             {/* MOBILE TOGGLE */}
             <Button className="md:hidden"
                onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                  { isMenuOpen? <X size={24}/> : <Menu size={24}/>} 
                   </Button>
            </div>


            {/* NOW AT MOBILE NAVIGATION */}

            {isMenuOpen &&(
                <nav className="md:hidden py-4 border-t bg-white">
                    <div className="flex flex-col gap-4">
                    {navLink.map((link)=>(
                        <Link
                        key={link.label}
                        to={link.href}
                        className="text-shadow-black px-5 font-bold"
                        onClick={()=>setIsMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/About">
                    <Button className="bg-green-500 text-white rounded font-bold p-3 cursor:pointer ">
                        SEND A MESSAGE
                    </Button>
                    
                    </Link>
                    </div>

                </nav>
            )}


    </header>
  )
}

export default Header;