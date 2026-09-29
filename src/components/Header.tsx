import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import website_logo from "../assets/website_logo.png";
import { Button } from '@base-ui/react/button';
import {Menu, X, ChevronDown} from "lucide-react";

const Header = () => {
    // Controls the main mobile menu
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const location = useLocation();
    // Controls the Services dropdown on mobile
    const [isServicesOpen, setIsServicesOpen] = useState(false);

        // Main navigation links
    const navLink = [
        {label:"Home", href:"/"},
        // {label:"Services", href:"/Services"},
        {label:"About", href:"/About"},
        {label:"Contact", href:"/Contact"}
    ];

    // Services dropdown links
    const services=[
            { label: "All Services Render", href: "/Services" }, 
                { label: "Business Registration", href: "/BusinessNameRegistration" }, 
                { label: "Company Registration", href: "/CompanyNameRegistration" }, 
                { label: "NGO Registration", href: "/ngo-registration" }
    ];

    // Close mobile menu 
    const closeMobileMenu = () => { setIsMenuOpen(false);
         setIsServicesOpen(false);};


         // Scroll to the top whenever the active navigation route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Close mobile menu after navigation
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";

    return location.pathname.startsWith(href);
  };
    
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

               {/* SERVICES DROPDOWN */}
<div className="relative group flex items-center">

    {/* SERVICES PAGE LINK */}
    <Link
        to="/Services"
        className="hover:text-amber-500 font-extrabold"
    >
        Services
    </Link>

    {/* DROPDOWN ARROW */}
    <button
        type="button"
        className="ml-1 hover:text-amber-500"
    >
        <ChevronDown size={18} />
    </button>


    {/* DROPDOWN */}
    <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-64 py-2">

        {services.map((service) => (
            <Link
                key={service.label}
                to={service.href}
                className="block px-4 py-3 font-semibold hover:bg-gray-100 hover:text-amber-500"
            >
                {service.label}
            </Link>
        ))}

    </div>

</div>
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
                
                <div>

                <button
                    type="button"
                    className="w-full flex items-center justify-between px-5 font-bold hover:text-amber-500"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                    <span>Services</span>

                    <ChevronDown
                        size={20}
                        className={`transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>


                {/* MOBILE SERVICES DROPDOWN */}
                {isServicesOpen && (

                    <div className="mt-2 ml-5 flex flex-col gap-2 border-l-2 border-green-500">

                        {services.map((service) => (

                            <Link
                                key={service.label}
                                to={service.href}
                                className="px-4 py-2 font-semibold hover:text-amber-500"
                                onClick={closeMobileMenu}
                            >
                                {service.label}
                            </Link>

                        ))}

                    </div>

                )}

            </div>




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