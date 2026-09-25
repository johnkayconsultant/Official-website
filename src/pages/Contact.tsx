import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneCall,MapPinned } from 'lucide-react';
import { MessageSquare,Mail,SendHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsaAppButton';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <Header/>
      <section id="Contact">
        <div className='px-5 md:px-10 lg:px-20 py-40'>
          <div className='grid grid-col md:grid-cols-2'>
                  
                  {/* GET IN TOUCH */}
            <div>
              <h1 className='font-extrabold text-xl md:text-3xl lg:text-5xl text-green-900'>GET IN TOUCH</h1>
              <p className="mt-3">Have questions about business registration?
             </p>
             <p>Our accredited experts are ready to help you <br/>navigate the CAC process with ease.</p>

              {/* CONTACT DETAILS */}
              <div className='py-5'>

                {/* PHONE */}
                <div className='flex flex-col md: flex-row gap-5 mb-10'>
                   <PhoneCall className='w-8 h-8' />
                    <div >
                      <p>call us</p>
                      <h4 className="text-green-900 font-bold">+2349058500368</h4>
                    </div>
                </div>

                {/* WHATSAPP */}
              <div className='flex flex-col md: flex-row gap-5 mb-10'>
                <MessageSquare className='w-8 h-8'/>
                    <div >
                      <p>WHATSAPP</p>
                      <h4 className="text-green-900 font-bold" >
                        <Link to="/Contact">
                        Click To Chat Now
                        </Link>
                      </h4>
                    </div>
              </div>

                 {/* EMAIL */}
              <div className='flex flex-col md: flex-row gap-5 mb-10'>
                <Mail className='w-8 h-8'  />
                    <div >
                      <p>EMAIL SUPPORT</p>
                      <h4 className="text-green-900 font-bold">support@johnkayconsultant.com.ng</h4>
                    </div>
              
              </div>

                  {/* OUR OFFICE */}
              <div className='flex flex-col md: flex-row gap-5 mb-10'>
                <MapPinned className='w-8 h-8' />
                    <div >
                      <p>OUR OFFICE</p>
                      <h4 className="text-green-900 font-bold">R5HV+C7R Divisional Police Headquarters, Lagos-Abeokuta Expy, Ifo 112105, Ogun State</h4>
                    </div>
                </div>
              </div>
            </div>



            {/* FORM TO FILL */}
            <div>
              <div className="bg-[#f7fafc] h-200 rounded-xl px-4 md:px-8 lg:px-10">
                    <h4 className='py-12 font-bold text-xl text-green-900'>Send us a message</h4>
                    <div className='bg-white h-150 rounded-xl p-4'>
                      <h4 className='font-bold text-green-900'>GET STARTED NOW</h4>
                      <p className='mt-2'>Fill the form below and start your registration instantly.</p>

                      <form className="mt-10">
                             {/* FULLNAME */}
                       <div className="mb-5">
                         <label className="block mb-2 text-sm">
                          FULLNAME:
                        </label>
                        <input 
                        type="text" 
                        placeholder='JOHN FEMI FRANK'
                         required
                         className="w-full p-3 border-green-500 rounded-xl border "/>
                       </div>

                          {/* WHATSAPP NUMBER  */}
                       <div className="mb-5">
                         <label className="block mb-2">
                          WHATSAPP:
                        </label>
                        <input 
                        type="tel" 
                        placeholder='+2342435465768' 
                        required
                        className="w-full p-3 border-green-500 rounded-xl border "/>
                       </div>

                          {/* BUSINESS TYPE */}
                       <div className="mb-5">
                        <label className="mb-2 block"> 
                          BUSINESS TYPE:
                        </label>
                        <select className="w-full p-3 border-green-500 rounded-xl border">
                          <option value="">Select a service...</option>
                         <option  value="business">Business Registration [ENTERPRISE/VENTURES]</option>
                          <option  value="company">Company Registration [LIMITED]</option>
                          <option  value="Ngo">Ngo Registration [INCORPORATED TRUSTEES]</option>
                          <option  value="scuml">SCUML Registration</option>
                          <option  value="digital">Digital Profiling Registration</option>
                          <option value="web">WEB DEVELOPER</option>
                        </select>
                       </div>
                            {/* FOR SUBMIT */}
                      <div className='mb-5'>
                         <Button type="submit" className="w-full p-3 border-green-500 rounded-xl border h-12" >
                          <SendHorizontal className="w-15 h-15 gap-3" />
                              <p className="font-bold">Send & Chat on Whatsapp</p>
                       </Button>
                      </div>
                      <p className='text-center'>Fast • Safe • Reliable</p>
                      </form>


                    </div>

              </div>
            
            </div>
          </div>

        </div>

      </section>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default Contact