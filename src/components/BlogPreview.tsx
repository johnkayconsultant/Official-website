import React from 'react'
import { Lightbulb, UserRoundGroup, ImageMinus,Phone } from 'lucide-react';
import {Link} from "react-router-dom";
import { Button } from "./ui/button";

const BlogPreview = () => {
  return (
    <section className='py-15 px-5 md:px-10 lg:px-20'>
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
      <h3 className="text-green-700 text-xl md:text-2xl lg:text-3xl font-extrabold bold">Requirements for CAC Registration in Nigeria</h3>
      <p className="mt-6">Before we begin the registration process, please ensure you have the following documents ready. Scan or snap clear copies of these and have them ready for WhatsApp submission.</p>

          {/* DIV IN DIV */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-5">
            {/* BUSINESS */}
            <div className="mt-3">
              <Lightbulb className="w-12 h-12 bg-green-600 p-2 rounded-xl"/>
              <h4 className="font-bold mt-2">Business Name</h4>
              <p className="mt-4">Provide at least 2 unique business name options for availability search.</p>
            </div>

            {/* VALID NIN*/}
            <div className="mt-3">
               <UserRoundGroup className='w-12 h-12  bg-green-600 p-2 rounded-xl' />
               <h4 className="font-bold mt-2">Valid ID Card</h4>
               <p className="mt-4" >NIN, Voter's Card, International Passport or Driver's License.</p>
            </div>

            {/* PASSPORT  */}
            <div className="mt-3">
              <ImageMinus className='w-12 h-12  bg-green-600 p-2 rounded-xl' />
              <h4 className="font-bold mt-2">Passport Photo</h4>
              <p className="mt-4">A clear digital copy of your passport photograph.</p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-3">
               <Phone className='w-12 h-12  bg-green-600 p-2 rounded-xl'/>
               <h4 className="font-bold mt-2">Contact Details</h4>
               <p className="mt-4">Local business address, email, and functioning phone number.</p>
            </div>
          </div>

                  {/* bottom */}
          <div className="mt-7 rounded-xl bg-stone-100 w-full p-3 border-l-4">
            <h5> <span className="font-bold">Note:</span> For Limited Liability Companies, we will also need details of Directors and Shareholders (IDs and Addresses).</h5>
            </div>
        </div>

           {/* RIGHT SIDE */}
        <div className=" py-30 w-full md:w-1/2 px-3 md:px-8 lg:px-12">
           <div className="bg-green-600 p-10 rounded-2xl border-amber-200">
           <h4 className="font-bold text-white text-xl" >Need help with these?</h4>
          <p className="mt-5">Don't worry if you don't have everything ready yet. Chat with our agent and we can guide you on how to get your NIN or alternative ID for registration.</p>
          <Link to="/Contact" className="bg-white mt-3">
          <Button  type="button"className="text-green-200 rounded-xl p-5 ">
            CONTACT US NOW
          </Button>
          </Link>
       </div>
        </div>
       

      </div>
      
     
     </section>
  )
}

export default BlogPreview