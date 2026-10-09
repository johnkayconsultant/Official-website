import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneCall,MapPinned } from 'lucide-react';
import { MessageSquare,Mail,SendHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsaAppButton';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Contact = () => {
                  // FOR THE FORM
    const [isFormData, setIsFormData] =useState({
      fullName:"",
      whatsapp:"",
      registrationType:"",
      message:"",
    });

      const [errors, setErrors] = useState({
  fullName: "",
  whatsapp: "",
  registrationType: "",
  message: "",
});

       const validateForm = () => {
  const newErrors = {
    fullName: "",
    whatsapp: "",
    registrationType: "",
    message: "",
  };


 // Full name validation
//  Understand the regex
// ^(?:\+234|234|0)[789][0-9]{9}$/
//  ^ — starts checking from the beginning of the input.
// (?:\+234|234|0) — accepts the prefix +234, 234, or 0.
// [789] — requires the next digit to be 7, 8, or 9.
// [0-9]{9} — requires exactly nine more digits.
// $ — ends checking at the end of the input.
// important: This validates the phone-number format, not whether the number is actually registered on WhatsApp.
const fullNameRegex = /^[A-Za-z\s]+$/;

if (!isFormData.fullName.trim()) {
  newErrors.fullName = "Full name is required";
} else if (isFormData.fullName.trim().length < 3) {
  newErrors.fullName = "Full name must be at least 3 characters";
} else if (!fullNameRegex.test(isFormData.fullName.trim())) {
  newErrors.fullName = "Full name can only contain letters";
}

  // WhatsApp validation
 const whatsappRegex = /^(?:\+234|234|0)[789][0-9]{9}$/;

  if (!isFormData.whatsapp.trim()) {
    newErrors.whatsapp = "WhatsApp number is required";
  } else if (!whatsappRegex.test(isFormData.whatsapp.trim())) {
    newErrors.whatsapp = "Enter a valid Nigerian WhatsApp number";
  }

  // Registration type validation
  if (!isFormData.registrationType) {
    newErrors.registrationType = "Please select a registration type";
  }

  // Message validation
  if (!isFormData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (isFormData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters";
  }

  setErrors(newErrors);

  // If there are no errors, return true
  return Object.values(newErrors).every((error) => error === "");
};

//Validate when the user submits
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) 
     {
    toast.error("Please correct the errors in the form.");
    return;
  }

   toast.success("Your message has been submitted successfully!");

  console.log("Form is valid:", isFormData);

  // Send the form to your backend here
};


                // input handler
          const handleChange=( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{

  //               console.log("Name:", e.target.name);
  // console.log("Value:", e.target.value);
                     setIsFormData({
                             ...isFormData,
                        [e.target.name]: e.target.value,
          })
        };
       


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
                <div className='flex flex-col md:flex-row gap-5 mb-10'>
                   <PhoneCall className='w-8 h-8' />
                    <div >
                      <p>call us</p>
                      <h4 className="text-green-900 font-bold">+2349058500368</h4>
                    </div>
                </div>

                {/* WHATSAPP */}
              <div className='flex flex-col md:flex-row gap-5 mb-10'>
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
              <div className='flex flex-col md:flex-row gap-5 mb-10'>
                <Mail className='w-8 h-8'  />
                    <div >
                      <p>EMAIL SUPPORT</p>
                      <h4 className="text-green-900 font-bold">support@johnkayconsultant.com.ng</h4>
                    </div>
              
              </div>

                  {/* OUR OFFICE */}
              <div className='flex flex-col md:flex-row gap-5 mb-10'>
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
                    <div className='bg-white h-170 rounded-xl p-4'>
                      <h4 className='font-bold text-green-900'>GET STARTED NOW</h4>
                      <p className='mt-2'>Fill the form below and start your registration instantly.</p>

                      <form   onSubmit={handleSubmit} className="mt-10">
                             {/* FULLNAME */}
                       <div className="mb-5">
                         <label className="block mb-2 text-sm">
                          FULLNAME:
                        </label>
                        <input 
                        type="text" 
                        name="fullName"
                        value={isFormData.fullName}
                        onChange={handleChange}
                        placeholder='JOHN FEMI FRANK'
                         required
                         className="w-full p-3 border-green-500 rounded-xl border "/>
                              {errors.fullName && (
                     <p className="text-red-500 text-sm mt-1">
                           {errors.fullName}
                                     </p>)}
                       </div>

                          {/* WHATSAPP NUMBER  */}
                       <div className="mb-5">
                         <label className="block mb-2">
                          WHATSAPP:
                        </label>
                        <input 
                        type="tel" 
                        name="whatsapp"
                        value={isFormData.whatsapp}
                        onChange={handleChange}
                        placeholder='+2342435465768' 
                        required
                        className="w-full p-3 border-green-500 rounded-xl border "/>
                        {errors.whatsapp && (
                     <p className="text-red-500 text-sm mt-1">
                           {errors.whatsapp}
                                     </p>)}
                       </div>

                          {/* BUSINESS TYPE */}
                       <div className="mb-5">
                        <label className="mb-2 block"> 
                          REGISTRATION TYPE:
                        </label>
                        <select 
                        name="registrationType"
                        onChange={handleChange}
                        value={isFormData.registrationType}
                        className="w-full p-3 border-green-500 rounded-xl border">
                          <option value="">Select a service...</option>
                         <option  value="business">Business Registration [ENTERPRISE/VENTURES]</option>
                          <option  value="company">Company Registration [LIMITED]</option>
                          <option  value="Ngo">Ngo Registration [INCORPORATED TRUSTEES]</option>
                          <option  value="scuml">SCUML Registration</option>
                          <option  value="digital">Digital Profiling Registration</option>
                          <option value="web">WEB DEVELOPER</option>
                        </select>
                        {errors.registrationType && (
                     <p className="text-red-500 text-sm mt-1">
                           {errors.registrationType}
                                     </p>)}
                       </div>
                                  {/* Text box */}
                               <div className="mb-5">
                                 <label htmlFor="message" className="mb-2 block">
                                  MESSAGE:
                                </label>
                                <textarea id='message'
                                name="message" 
                                onChange={handleChange}
                                  value={isFormData.message}
                                placeholder='Tell us what you want' 
                                className="w-full rounded border-blue-500" 
                                rows={5} cols={10}
                                />
                                {errors.message && (
                              <p className="text-red-500 text-sm">
                                          {errors.message}
                                        </p>
                                      )}

                                
                               </div>

                            {/* FOR SUBMIT */}
                      <div className='mb-5'>
                         <Button type="submit" className="w-full p-3 border-green-500 rounded-xl border h-12" >
                          <SendHorizontal className="w-15 h-15 gap-3" />
                              <p className="font-bold">Send</p>
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

export default Contact;