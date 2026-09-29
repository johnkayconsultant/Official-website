import React from 'react';
import { House,ArrowRight,ShieldCheck,ChartNoAxesCombined,Landmark  } from 'lucide-react';
import Header from '@/components/Header';
import WhatsaAppButton from "@/components/WhatsaAppButton";
import {Link} from "react-router-dom";
import Footer from "@/components/Footer";

const CompanyNameRegistration = () => {
  return (
   
    <section id="CompanyNameRegistration">
       <Header/>
      <div className="px-5 md:px-10 lg:px-20 py-35">
            <span className="inline-flex gap-2 bg-amber-300 rounded-2xl p-1">
            <House/>
            <div className="mt-1 font-bold">Premium Corporate Registration</div>
          </span>

        <div className="lg:w-1/2 mt-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">REGISTER A LIMITED LIABILITY COMPANY (LLC)</h1>
          <p className="mt-8">The gold standard for scaling businesses in Nigeria. Protect your personal assets, secure massive government contracts, and attract global investors with a Private Limited Liability Company.</p>

          <div className="mt-10">
            <Link to="/WhatsaAppButton">
          <span className="bg-amber-400 rounded-xl p-5 font-extrabold  hover:bg-green-500" >
            <button type="submit">
           <div className=" inline-flex gap-2">
            <div>REGISTER MY LLC Now</div> 
            <div><ArrowRight /></div>
           </div>
            </button>
          </span>
          </Link>
          </div>
          </div>
</div>

                            {/* level 2 */}
                      <div className="py-20 bg-amber-50">
                        <div className="px-5 md:px-10 lg:px-20">

                          {/* for half of the width */}
                              <div className="lg:w-1/2">
                                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-800">WHY AN LLC IS BETTER THAN BUSINESS A NAME </h1>
                              <p className="mt-5">If you plan to scale, hire employees, or raise capital, an LLC is mandatory. Unlike a Business Name, an LLC is a separate legal entity from you (the founder).</p>
                         <p className="mt-3">Limited Liability Your personal assets (house, car, personal bank accounts) are completely protected if the business incurs debt or faces legal issues.</p>
                              </div>

                              <div className="grid grid-col md:grid-cols-3 gap-10 mt-10">
                                <div className='rounded-xl bg-white p-4'>
                                  <ShieldCheck />
                                  <h4 className="font-bold mt-3">LIMITED LIABILITY</h4>
                                  <p className="mt-3">Your personal assets (house, car, personal bank accounts) are completely protected if the business incurs debt or faces legal issues.</p>
                                  </div>


                                  <div className='rounded-xl bg-white p-4'>  
                                    <ChartNoAxesCombined />
                                    <h4 className="font-bold mt-3">ATTRACT INVESTORS</h4>
                                    <p className="mt-3">Angel investors and VCs will only invest in an LLC because it has shares that can be legally transferred and allocated.</p>
                                    </div>


                                <div className='rounded-xl bg-white p-4'>
                                     <Landmark />
                                     <h4 className="font-bold mt-3">LARGE CONTRACTS</h4>
                                     <p className="mt-3">Government agencies and multinational corporations often have strict policies requiring vendors to be Limited Companies.</p>


                                </div>

                              </div>
                        </div>
                
                      </div> 
        
        

     
      <Footer/>
    </section>
  )
}

export default CompanyNameRegistration