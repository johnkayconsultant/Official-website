import React from 'react';
import about from "../assets/about.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsaAppButton';

const About = () => {
  return (
      
    <div id="About">
      <Header/>
    <div className="px-5 md:px-10 lg:px-20 py-40">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="py-20">
          <h1 className="font-extrabold text-xl md:text-3xl lg:text-5xl text-green-500">OUR MISSION:</h1>
          <h2 className="font-extrabold text-xl md:text-3xl lg:text-5xl text-amber-500">LEGALIZING <br/> DREAMS</h2>
          <p className='mt-10 text-sm md:text-xl'>Johnkay Consult is not just a registration agency; we are the foundation upon which Nigerian entrepreneurs build their legacies. Since our inception, we have focused on one thing: making corporate compliance accessible to everyone.</p>

            {/* for icon */}
          <div className='inline-flex gap-10 mt-15'>
            <div>
              <h5 className='font-extrabold text-xl md:text-3xl'>700+</h5>
              <p className="font-bold">Businesses Registered</p>
            </div>
            <div>
              <h5 className='font-extrabold text-xl md:text-3xl'>100%</h5>
              <p className="font-bold">Success Rate</p>
            </div>
          </div>
        </div>
        <div>
          <img src={about} alt="about" className='w-full h-auto rounded-2xl'/>
        </div>
      </div>

      {/* BOXES */}
      <div className="grid grid-col lg:grid-cols-3 gap-5 mt-15 ">
        {/* box 1 */}
          <div className='bg-[#f7fafc] rounded-xl p-5'>
            <h3 className='mt-5 font-extrabold text-green-600 text-xl'>ACCREDITATION</h3>
            <p className="mt-3">We are fully accredited by the Corporate Affairs Commission (CAC). Our status allows us direct access to the portal for fast, priority filing of Business Names, Limited Companies, and NGOs.</p>
          </div>
         {/* box 1 */}
            <div  className='bg-[#f7fafc] rounded-xl p-5'>
              <h3 className='mt-5 font-extrabold text-green-600 text-xl'>INTEGRITY</h3>
              <p className='mt-3'>In an industry full of shortcuts, we stand for 100% legality. We ensure all your documents are authentic and your business is registered following the strict guidelines of the CAMA 2020 act.</p>
            </div>
           {/* box 1 */}
           <div  className='bg-[#f7fafc] rounded-xl p-5'>
            <h3 className='mt-5 font-extrabold text-green-600 text-xl'>SPEED</h3>
            <p className='mt-3'>We understand that time is money for entrepreneurs. Our streamlined WhatsApp-based workflow ensures that we can deliver certificates in as little as 24 to 72 hours.</p>
           </div>
      </div>
    </div>

                     {/* READY ME */}
              <div className='bg-[#0a361e] text-center rounded-4xl mb-10 w-full h-80'>
                <h2 className='text-white py-10 text-2xl md:text-4xl lg:text-5xl font-bold'>Ready to build your legal foundation?</h2>
                <p className='text-white'>Join thousands of successful business owners who trusted Johnkay Consult with their CAC registration.</p>
                    <div  className="mt-10">
                      <Link to="/Contact">
                    <Button type="button" className="text-white font-bold text-xl md:text-2xl lg:text-3xl p-4 bg-blue-600">
                      Start Your Registration
                    </Button>
                    
                    </Link>
                    </div>
              </div>

    <Footer/>
    <WhatsAppButton/>
   </div>
   
   
  )
}

export default About;