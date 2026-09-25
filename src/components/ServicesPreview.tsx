import React from 'react';
import { BuildingComplex } from 'lucide-react';
import { BuildingComplexPlus } from 'lucide-react';
import { House } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';

const ServicesPreview = () => {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-5 bg-[#f2f7f4]"> 
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-xl md:text-2xl lg:text-4xl text-green-700 font-bold mt-10">Core Registration Services</h2>

        <p className="font-bold mt-4">We simplify the complex Nigerian corporate compliance process so you can focus on building your business.</p>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
             
                           {/* BOX 1 */}
          <div className="mt-8 bg-[#ffffff] rounded-xl">
               <BuildingComplex className="w-15 h-15 hover: green py-2"/>
               <h3 className="font-bold text-xl text-green-500">Business Name</h3>
               <p className="mt-2">Ideal for small business and enterprises, freelancer and small artsians in Nigeria</p>
          </div>

                    {/* BOX 2 */}
          <div className="mt-8 bg-[#ffffff] rounded-xl ">
            <BuildingComplexPlus className="w-15 h-15 py-2"/>
            <h3 className="font-bold text-xl text-green-500">Company Name</h3>
            <p className="mt-2">Start up your company<br/> registration in a seconds. With <span>johnkay constultant</span> registration is simple</p>
          </div>

                    {/* BOX 3 */}
          <div className="mt-8 bg-[#ffffff] rounded-xl">
             <House className="w-15 h-15 py-2"/>
             <h3 className="font-bold text-xl text-green-500">NGO/Church</h3>
             <p className="mt-2">Specialize in registration of church, mosque,association, organization e.t.c</p>
          </div>

                         {/* BOX-4 */}
          <div className=" block mt-8 bg-[#ffffff] rounded-xl">
             <ShieldCheck className="w-15 h-15 py-2 " />
             <h3 className="font-bold text-xl text-green-500">CAC Support</h3>
             <p className="mt-2">Annual Report, status Report, and other portal filing services.</p>
          </div>

        </div>

      </div>
      </section>
  )
}

export default ServicesPreview