
// import React from "react";
// import { MessageCircle } from "lucide-react";

// const WhatsAppButton = () => {
//   const phoneNumber = "2349058500368";

//   const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello%20JOHNKAY%20CONSULTANT,%20I%20would%20like%20to%20make%20an%20inquiry.`;

//   return (
//     <a
//       href={whatsappLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-green-600"
//       aria-label="Chat with us on WhatsApp"
//     >
      
//       <MessageCircle size={30} />
//     </a>
//   );
// };

// export default WhatsAppButton;



import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  // Replace this with your real WhatsApp number
  // Nigerian number: remove the first 0 and add 234
  const phoneNumber = "2349058500368";

  const message = encodeURIComponent(
    "Hello JOHNKAY CONSULTANT, I would like to make an inquiry."
  );   //What is encodeURIComponent()?=>this is one of the most important things to understand. You might think: "Why can't we just put the message directly into the URL?" Because URLs have special characters. For example, spaces aren't normally represented as ordinary spaces inside a URL.JavaScript can convert your message into a URL-friendly format using:



  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-green-500
        px-4
        py-3
        text-white
        shadow-lg
        transition
        duration-300
        hover:scale-105
        hover:bg-green-600
      "
    >
      <FaWhatsapp size={30}/>

      <span className="hidden md:inline font-medium">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;

