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
                      <div className="mt-10 grid grid-col md:grid-cols-3">
                            {/* box 1 */}
                        <div>
                          <HandCoins />
                          <h4>RECIEVE GRANT</h4>
                          <p>International donors and government agencies only fund legally recognized NGOs with an official CAC certificate and corporate bank account.</p>
                        </div>
                         {/* box 2 */}
                        <div>
                          <ShieldPlus />
                          <h4>LEGAL PROTECTION</h4>
                          <p>The Trustees gain limited liability protection, meaning their personal assets are protected while executing the organization's goals.</p>
                        </div>

                         {/* box 3 */}
                        <div>
                           <Globe />
                           <h4>PUBLIC TRUST</h4>
                           <p>Having a CAC certificate immediately builds immense trust with the public, volunteers, and potential financial partners.</p>
                        </div>
                      </div>


                </div>
            </div>
             
    <Footer/>
    </section>
  )
}

export default NgoRegistration