import React from 'react';
import website_logo from "../assets/website_logo.png";
import { ShieldCheck } from 'lucide-react';
import { FaFacebookF, FaLinkedin} from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  const currentYear= new Date(). getFullYear();

  const footerLink= {
    services: [
      {label:"Business Registration", href:"/Services"},
      {label:"Company Registration", href:"/Services"},
      {label:"Ngo Registration", href:"/Services"},
      {label:"Scuml Registration", href:"/Services"},
      {label:"Digital Profiling", href:"/Services"},
    ],
    company: [
      {label:"About us", href:"/About"},
      {label:"our Services", href:"/Services"},
       {label:"our contact", href:"/Contact"},
    ],
    support: [
      {label:"Contact", href:"/Contact"},
       {label:"Faq", href:"/"},
        {label:"Privacy policy", href:"/"},
         {label:"Terms and condition", href:"/"},
    ]
  }
  return (
        <footer className='py-20 px-5 md:px-10 lg:px-20 bg-[#f2f7f4] text-black'>
          <div className="grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* BOX 1 */}
            <div>
                      {/* LOGO */}
             <div className='inline-flex gap-3'>
               <img src={website_logo} alt="LOGO"className='w-15 h-12'/>
              <h5 className="mt-4 font-extrabold">JOHNKAY CONSULTANT</h5>
              </div>

              <p>Nigeria's premium corporate compliance and business registration platform. We help entrepreneurs formalize their ventures with the Corporate Affairs Commission seamlessly.</p>

              <p className="inline-flex gap-3 mt-5">
                <ShieldCheck />
                Accredited CAC Agent
              </p>
            </div>

              {/* BOX 2 */} 
            <div>
              <h4 className="font-bold mb-6">SERVICES</h4>
              <ul className="space-y-4">
                {footerLink.services.map((link)=>(
                  <li key={link.label}>
                   <a href={link.href}>
                    {link.label}
                   </a>
                  </li>
                ))}
              </ul>
            </div>

              {/* BOX 3 */} 
            <div>
              <h5 className="font-bold mb-6">COMPANY</h5>
              <ul className="space-y-3">
                {footerLink.company.map((link)=>(
                  <li key={link.label}>
                    <a href={link.href}>
                      {link.label}
                    </a>

                  </li>
                ))}
              </ul>
              </div> 

              {/* BOX 4 */}
            <div>
              <h5 className="font-bold mb-6">SUPPORT</h5>
              <ul className="space-y-3">
                {footerLink.support.map((link)=>(
                  <li key={link.label}>
                    <a href={link.href} className="">
                      {link.label}
                    </a>

                  </li>
                ))}
              </ul>
              </div> 

          </div>


                {/* BOTTOM BAR */}

          <div className="border-t mt-12">
            <div className="flex items-center flex-col sm:flex-row justify-between gap-4">
               <p>© {currentYear} JOHNKAY CONSULTANT. All rights reserved.</p>
              <div className='flex items-center gap-10'>
                <a href="#">
                  <FaFacebookF className="w-7 h-7" />
                </a>

                <a href="https://wa.me/2349058500368?text=I need more information about the Registration">
                  <RiWhatsappLine className="w-7 h-7" />
                </a>

                <a href="#">
                 <FaLinkedin className="w-7 h-7" />
                </a>

              </div>
            </div>

          </div>


        </footer>
  )
}

export default Footer