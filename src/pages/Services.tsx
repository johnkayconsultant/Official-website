import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { BriefcaseBusiness,Briefcase } from 'lucide-react';
import adsvideo from "../assets/adsvideo.mp4";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
   <section id="Services">
    <Header/>
    <div className='px-5 md:px-10 lg:px-20 py-35 '>
      <div className='flex items-center justify-center gap-2 rounded font-bold  '>
        <div>
          <BriefcaseBusiness />
        </div>
          <div>
            <p>Corporate Compliance Experts</p>
          </div>
      </div>

              {/* BODY OF THE SITE */}
        <div className="text-center py-15">
           <h2 className='text-xl md:text-4xl lg:text-6xl text-shadow-black font-extrabold'> OUR <span className='text-amber-400'>SERVICES</span></h2>

           <p className='mt-8'>From initial business registration to post-incorporation compliance, we provide end-to-end,<br/>legal solutions to protect and grow your Nigerian business.</p>
        </div>
                      {/* VIDEO */}
            <div className="py-20 rounded-xl">
               <video controls>
              <source src="src/assets/adsvideo.mp4" type="video/mp4"/>
              </video>
            </div>


         
                  {/* job advert list */}
        <div className="border-t mt-10">
              {/* business in grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            {/* business name */}
            <Link to="/businessNameRegistration">
          <div className="mt-10  bg-blue-200 border-b-4 p-8 rounded-4xl hover:bg-blue-300
    hover:shadow-xl hover:-translate-y-1 hover:scale-100">
      
                    <BriefcaseBusiness className='w-10 h-10'/>
                    <h4 className="text-xl mt-4 font-extrabold">Business Name Registration</h4>
                    <p className='mt-4'>The fastest and most affordable way to formalize your business. Protect your brand name and open a corporate bank account as a Sole Proprietor or Partnership with a CAC Business Name certificate.</p>
                    <div className="mt-2 flex md:flex-row gap-3">
                      <div className='font-bold text-white'>
                          View Service detail
                      </div>
                      <div className="mt-1">
                        
                          <ArrowRight className='w-25 h-5' />
                    
                      </div>
                    </div>
                  </div>
                  </Link>

          {/* Register a Limited Company (LLC) */}
          <Link to="/CompanyNameRegistration">
          <div className="mt-10 bg-amber-200 border-b-4 p-8 rounded-4xl hover:bg-blue-300 hover:shadow-xl hover:-translate-y-1 hover:scale-100">
            <Briefcase className='w-10 h-10'/>
            <h4 className="text-xl mt-4 font-extrabold">Register a Limited Company (LLC)</h4>
            <p className='mt-4'>Protect your personal assets, secure massive government contracts, and attract global investors with a Private Limited Liability Company.</p>
            <div className='mt-4 flex md:flex-row gap-3'>
                <div className='font-bold text-white'>
                          View Service detail
                      </div>
                      <div className="mt-1">
                        
                          <ArrowRight className='w-25 h-5' />
                    
                      </div>
            </div>
          </div>
          </Link>

          {/* Incorporated Trustees Experts */}
          <Link to="/NgoRegistration">
              <div className="mt-10  bg-green-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10' />
            <h4 className="text-xl mt-4 font-extrabold">Incorporated Trustees</h4>
            <p className='mt-4'>Establish your Foundation, NGO, Church, Mosque, or Association legally in Nigeria as Incorporated Trustees. We handle the complex newspaper publications and Trustee verifications so you can focus on your mission.</p>
            <div className='mt-4 flex md:flex-row gap-3'>
                <div className='font-bold text-white'>
                          View Service detail
                      </div>
                      <div className="mt-1">
                          <ArrowRight className='w-25 h-5' />
                      </div>
            </div>
          </div>
          </Link>
          {/* Accredited CAC Annual Returns Filing */}
          <div className="mt-10  bg-amber-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10'/>
            <h4 className="text-xl mt-4 font-extrabold">Accredited CAC Annual Returns Filing</h4>
            <p className='mt-4'>Stay compliant and keep your business in active standing. We provide a swift, reliable, and accredited channel to file your <span className="font-bold">CAC Annual Returns</span> for Limited Liability Companies, Business Names, and NGOs. Clear outstanding defaults and get approved within 72 hours.</p>
            </div>

            {/* Fast SCUML Registration in Nigeria */}
          <div className="mt-10  bg-green-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10'/>
            <h4 className="text-xl mt-4 font-extrabold">Fast SCUML Registration in Nigeria</h4>
            <p className='mt-4'>Banks rejecting your corporate account opening? If your business is a Designated Non-Financial Institution (DNFI), you are mandated by law to obtain a SCUML certificate from the EFCC. Let our experts handle the bureaucratic paperwork.</p>
          </div>

          {/* Reactivate Your Inactive Company Status */}
          <div className="mt-10  bg-amber-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10'/>
            <h4 className="text-xl mt-4 font-extrabold">Reactivate Your Inactive Company Status</h4>
            <p className='mt-4'>The CAC is actively tagging companies that fail to file annual returns as "INACTIVE." Banks are freezing active corporate bank accounts associated with these companies. Let our accredited experts calculate, file, and restore your active status within 72 hours.</p>
            </div>

            {/* Protect Your Brand with Trademark Registration */}
          <div className="mt-10  bg-green-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10'/>
            <h3 className="text-xl mt-4 font-extrabold">Protect Your Brand with Trademark Registration</h3>
            <p className='mt-4'>Don't let competitors steal your business name, logo, or slogan. We provide end-to-end trademark registration services with the Nigerian Commercial Law Department to legally protect your intellectual property.</p>
            </div>

                  {/* DIGITAL PROFILING */}
          <div className="mt-10  bg-amber-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10'/>
            <h3 className="text-xl mt-4 font-extrabold">Digital Profiling</h3>
           
        <p className="mt-4">We help businesses and professionals create a professional digital profile that makes them easy to find, trust, and connect with online. From business information and contact details to social media and Google Business Profile setup, we help you establish a credible online presence.</p>
        </div>
        

          {/* Website Designer in Nigeria */}
          <div className="mt-10  bg-green-200 border-b-4 p-8 rounded-4xl">
            <Briefcase className='w-10 h-10'/>
          <h2 className="text-xl mt-4 font-extrabold">Website Designer in Nigeria</h2>
          <p className="mt-4">Our expert web design services transform your vision into a dynamic digital storefront, attracting customers, building trust, and driving sales. From stunning aesthetics to seamless functionality and robust security.Partner with us to establish a powerful online foundation for success.</p>
          </div>
          
        
        </div>
        </div>
    </div>
    <Footer/>
   </section>
  )
}

export default Services