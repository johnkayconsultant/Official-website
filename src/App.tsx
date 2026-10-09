import {Toaster as Sooner} from "@/components/ui/sonner";
import { Toaster } from "sonner";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import BusinessNameRegistration from "./components/BusinessNameRegistration";
import CompanyNameRegistration from "./components/CompanyNameRegistration";
import NgoRegistration from "./components/NgoRegistration";
import WhatsaAppButton from "./components/WhatsaAppButton";
// import CompanyWhatsapp from "./components/companyWhatsapp";


 

function App() {
  return (
<>
   <Toaster/>
   <Sooner/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/BusinessNameRegistration" element={<BusinessNameRegistration />} />
      <Route path="/CompanyNameRegistration" element={<CompanyNameRegistration />} /> 
      <Route path="/ngo-registration" element={<NgoRegistration />} />
      <Route path="/WhatsaAppButton" element={<WhatsaAppButton/>}/>
      {/* <Route path="/CompanyWhatsapp" element={<CompanyWhatsapp/>}/> */}


      {/* //NOT FOUND PAGE */}
       <Route path="*" element={<Notfound/>}/> 

    </Routes>
    </BrowserRouter>
</>
  )
}
 
export default App;