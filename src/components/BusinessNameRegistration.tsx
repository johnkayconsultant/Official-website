import React from 'react'
import Header from "../components/Header";
import { BuildingComplex } from 'lucide-react';
import Footer from './Footer';
import REGISTER from "../assets/REGISTER.png";
import {Link} from "react-router-dom";
import { ArrowRight,Check } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { House } from 'lucide-react';


const BusinessNameRegistration = () => {
  return (
   <section id="businessNameRegistration">
    <Header/>
    <div className="py-40 px-5 md:px-10 lg:px-20">
      
<span className='bg-amber-200 p-2 rounded-2xl inline-flex gap-2 font-extrabold'>
    <BuildingComplex className='w-5 h-5' />
    Sole Proprietorship Registration</span>
   <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* //LEFT SIDE */}
    <div className="w-full md:1/2 mt-30">
    <h1 className="text-xl md:text-3xl lg:text-5xl text-green-700 font-extrabold font-sana">Complete Your Business Name Registration with CAC in Days</h1>
    <p className="mt-5">Don't lose your brand name to a competitor. A formal Business Name Registration with CAC grants you the legal right to operate, open a corporate bank account, and build lasting trust with your customers across Nigeria.</p>

    <div className="mt-15">
      <Link to="/WhatsAppButton">
    <span className="bg-amber-400 p-2 rounded-xl font-extrabold shadow-amber-600 hover:bg-blue-600">
      <button type="submit">
          <div className='inline-flex gap-2'>
            <div>START MY APPLICATION
          </div>
            <div><ArrowRight /></div>
          </div>
      </button>
    </span>
    </Link>
    </div>
          <div className='inline-flex gap-2 mt-5'>
            <div>
              <Check />
          </div>
            <div>No hidden charges. 100% Accredited Processing.</div>
          </div>

    </div>

          {/* //RIGHT SIDE */}
    <div className="w-full md:1/2">
      <img src={REGISTER} alt="busineslogo" className='rounded-xl'/>
    </div>
   </div>
   </div>

          {/* ANOTHER SEGMENT */}
           
        <div className="bg-[#f8fafc] py-20">
          <div className="px-5 md:px-10 lg:px-20">
            <div className="grid md:grid-cols-2 gap-10">
              {/* LEFT SIDE */}
              <div >
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-amber-100 p-3 rounded-xl">
                  <House className="w-7 h-7"/>
                    <h4 className="font-extrabold mt-3">Unregistered Risks</h4>
                    <p className="mt-3">Using a personal account for business payments looks unprofessional and exposes you to tax scrutiny.</p>
                  </div>
                  <div className="bg-amber-100 p-2 rounded-xl">
                      <ShieldCheck className='w-7 h-7'/>
                    <h4 className="font-extrabold mt-3">Name Theft</h4>
                    <p>Anyone can register your brand name today. The CAC operates strictly on a "first to file" basis.</p>
                  </div>
                </div>
              </div>


              {/* RIGHT SIDE */}
              <div>
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-green-600">WHY CHOOSE A BUSINESS NAME</h1>
              <p className="mt-3">When it comes to formalizing a startup in Nigeria, a Business Name Registration with CAC is often the most cost-effective and straightforward choice.</p>

          <p className="mt-3"> Unlike a Limited Liability Company, a Business Name (also referred to as an Enterprise or Sole Proprietorship) does not require you to appoint directors or declare share capital. It is perfectly designed for solo founders, freelancers, consultants, and retail shop owners.</p>

      <p className="mt-3">Once registered, you can immediately proceed to apply for your TIN (Tax Identification Number) and open a corporate bank account. This dramatically improves your professional image when dealing with clients and suppliers.</p>
              </div>
            </div>

          </div>

        </div>
       
       

    

 <Footer/>
   </section>
  
  )
}

export default BusinessNameRegistration