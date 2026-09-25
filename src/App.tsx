import {BrowserRouter,Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>

      //NOT FOUND PAGE
      <Route path="*" element={<Notfound
      />}/>

    </Routes>
    </BrowserRouter>
  )
}
 
export default App;