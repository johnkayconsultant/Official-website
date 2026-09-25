import React from 'react';
import ai_image from "../assets/ai_image.jpg";
import { Button } from './ui/button';
import { ArrowRight,Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="py-40">
      <div className=" flex flex-col md:flex-row px-5 md:px-10 lg:px-20">
       {/* LEFT SIDE*/}
        <div className="w-full md:1/2 py-10 md:py-15 lg:py-20">
          <span className="bg-gray-100 rounded-2xl p-2">
            Accredited Agent portal</span>
          <h1 className="mt-8 text-2xl md:text-5xl lg:text-6xl font-bold font-poppins">Seamless <span className="text-[#008751]">CAC {" "} Registration in </span>Nigeria</h1>

          <p className="mt-8 pr-4">Nigeria's premium compliance and company incorporation platform. 
            <br/>We handle your CAC registration in Nigeria, annual returns, 
          <br/>and tax clearance seamlessly.</p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {/* LEFT SIDE */}
            <div>
          <Button type='button' className="p-5 bg-green-500 font-bold">
            Get Started Now 
                <ArrowRight className="w-12 h-12" />
          </Button>
            </div>
            
            {/* RIGHT SIDE */}
            <div className="mt-3 inline-flex gap-2 font-bold">
              <div>
                <Check />
                </div>
            
              <div>
                <p>24/7 Processing</p>
                </div>
               
            </div>
          </div>
        </div>


         {/* RIGHT SIDE */}
        {/* lg:100% & md:50% */}
        <div className="w-full md:1/2">
          <img src={ai_image} alt="cac logo"
          className="w-full h-auto rounded-xl"/>
        </div>

      </div>
      </section>
  )
}

export default HeroSection