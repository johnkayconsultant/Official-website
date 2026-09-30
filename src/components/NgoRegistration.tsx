import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Handshake,ArrowRight  } from 'lucide-react';
import {Link} from "react-router-dom";
import WhatsaAppButton from "../components/WhatsaAppButton";
import { HandCoins } from 'lucide-react';
 import { ShieldPlus,Globe } from 'lucide-react';

const NgoRegistration = () => {
  return (
    <section id="NgoRegistration">
      <Header/>

                    {/* HERO SECTION */}
      <div className="px-5 md:px-10 lg:px-20 py-38">
        <div className="lg:w-1/2">
        <div className="inline-flex gap-3 bg-amber-300 rounded-xl p-1">
          <div> 
              <Handshake />
          </div>
          <div className="font-extrabold">
            Incorporated Trustees Experts
          </div>
          </div>

              <div className="mt-10">
                <h1 className="text-2xl md:text-7xl lg:text-7xl font-bold">Register Your NGO or Church with CAC</h1>
                <p className="mt-10">Establish your Foundation, NGO, Church, Mosque, or Association legally in Nigeria as Incorporated Trustees. We handle the complex newspaper publications and Trustee verifications so you can focus on your mission.</p>
                </div>

                          {/* buttonLink */}
                <div className="mt-10">
                  <Link to="/WhatsaAppButton">
                  <span className="bg-amber-400 rounded-xl p-5 font-extrabold  hover:bg-green-500" >
                   <button type="submit">
                    <div className="inline-flex gap2">
                      <div>REGISTER YOUR NGO</div>
                        <div><ArrowRight /></div>
                                </div>
                        </button>
                    
                        </span>
                        </Link>
                      </div>
                
                </div> 
          </div>

                    {/* LEVEL 2 */}
            <div className="py-20 bg-amber-50">
              <div className="px-5 md:px-10 lg:px-20">
                {/* FOR HALF OF THE WIDTH ONE SIDE IS LOADED WITH INFORMATION */}
                <div className="lg:w-1/2">
                <h1 className="font-extrabold text-xl md:text-2xl lg:text-4xl text-green-500">WHY REGISTER AS INCORPORATED TRUSTEES</h1>
                <p className="mt-4">In Nigeria, non-profit organizations cannot be registered as standard Limited Liability Companies. They must be registered under Part F of CAMA as Incorporated Trustees. This provides legal backing for your charitable or religious activities.</p>
                </div>

                      {/* col */}
                      <div className="mt-10 grid grid-col md:grid-cols-3 gap-10">
                            {/* box 1 */}
                        <div className="bg-white rounded-3xl p-4">
                          <HandCoins className="mt-3" />
                          <h4 className="font-bold mt-3">RECIEVE GRANT</h4>
                          <p className='mt-3'>International donors and government agencies only fund legally recognized NGOs with an official CAC certificate and corporate bank account.</p>
                        </div>
                         {/* box 2 */}
                        <div className="bg-white rounded-3xl p-4">
                          <ShieldPlus className="mt-3"/>
                          <h4 className="font-bold mt-3">LEGAL PROTECTION</h4>
                          <p className='mt-3'>The Trustees gain limited liability protection, meaning their personal assets are protected while executing the organization's goals.</p>
                        </div>

                         {/* box 3 */}
                        <div className="bg-white rounded-3xl p-4">
                           <Globe className="mt-3"/>
                           <h4 className="font-bold mt-3">PUBLIC TRUST</h4>
                           <p className='mt-3'>Having a CAC certificate immediately builds immense trust with the public, volunteers, and potential financial partners.</p>
                        </div>
                      </div>

                      <div className="mt-20 max-w-7xl text-center px-5 md:px-10 lg:px-20">
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-green-700">FREQUENTLY ASKED QUESTIONS</h1>
                        <div className="grid grid-rows-3 gap-5 text-xl">
                                {/* box 1 */}
                            <div className="mt-3 rounded-3xl p-5 bg-white ">
                              <h2 className="mt-3 text-green-400 font-extrabold">How many Trustees do I need?</h2>
                              <p className="mt-3">To register an NGO or Church, you need a minimum of two (2) Trustees who are trustworthy adults without any criminal record.</p>
                              </div>
                              
                              {/* box 2*/}
                            <div className="mt-3 rounded-3xl p-5 bg-white">
                              <h2 className="mt-3 text-green-400 font-extrabold">How long does NGO registration take?</h2>
                              <p className="mt-3">Due to the mandatory 28-day newspaper publication period required by law, the entire process from name approval to final certificate usually takes between 1.5 to 2 months.</p>
                            </div>
                              {/* box 3 */}
                            <div className="mt-3 rounded-3xl p-5 bg-white">
                              <h2 className="mt-3 text-green-500 font-extrabold">Do NGOs pay tax in Nigeria?</h2>
                              <p className="mt-3">NGOs are generally exempt from Company Income Tax (CIT) on their charitable activities. However, they are still required to register for a TIN and file annual returns.</p>
                              </div>
                        </div>
                      </div>
                      </div>
            </div>
      <WhatsaAppButton/>       
    <Footer/>
  </section>
  )
}

export default NgoRegistration