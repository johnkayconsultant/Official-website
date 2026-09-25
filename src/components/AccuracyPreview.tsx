import { Zap, CircleCheck, ThumbsUp, ShieldCheck, Scale } from 'lucide-react';

const AccuracyPreview=()=>{
    return(
<section id="AccuracyPreview" className="py-20 bg-[#0a361e]">
    <div className="px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row lg:flex-cols-2 gap-5 text-white">
            {/* LEFT SIDE */}
            <div>
            <h2 className='font-bold text-3xl md:text-5xl lg:text-7xl'>Trusted CAC Registration Support in Nigeria</h2>
            <p className="mt-7">We simplify the complex Corporate Affairs Commission processes so you can focus on building your brand.</p>

            <div className="flex flex-col md:flex-row gap-8 mt-5">
                <div className='inline-flex gap-3'>
                    {/* box1 */}
                      <div>
                            <CircleCheck className='w-12 h-12  bg-green-500 rounded-xl' />
                      </div>
                     {/* box 2 */}  
                      <div className="mt-3">
                <p className="font-bold">100% Secure</p>
                      </div>
                    </div>


                <div className='inline-flex gap-3'>
                            {/* box 1 */}
                    <div>
                        <Zap className='w-12 h-12 bg-green-500 rounded-xl'/>
                    </div>
                    {/* box 2 */}
                    <div className="mt-3">
                        <p className="font-bold">Speed Delivery</p>
                    </div>
                    </div>
                </div>
            </div>


            {/* RIGHT SIDE */}
            <div className='grid  md:grid-cols-2 gap-4'>
                    {/* BOX 1 */}
                <div className="bg-[#16402a] p-4 rounded-xl">
                    <Zap className="w-10 h-10 "/>
                    <h5 className="mt-4 font-extrabold">SPEED ASSURANCE</h5>
                    <p className="mt-3">Instant name reservation and fast-track processing with delivery in 24-72 hours.</p>
                </div>

                        {/* BOX 2 */}
                <div className="bg-[#16402a] p-4 rounded-xl">
                      <ShieldCheck className="w-10 h-10" />
                    <h5 className="mt-4 font-extrabold">ACCREDITED EXPERTS</h5>
                    <p className="mt-3">Your registration is handled by certified professionals. No errors, no rejections.</p>

                </div >
                        
                        {/* BOX 3 */}
                <div className="bg-[#16402a] p-4 rounded-xl">
                                  <Scale className="w-10 h-10" />
                            <h5 className="mt-4 font-extrabold">SECURE & LEGAL</h5>
                            <p className="mt-3">100% compliant with the Companies and Allied Matters Act (CAMA) 2020.</p>
                    </div>

                        {/* BOX 4 */}
                <div className="bg-[#16402a] p-4 rounded-xl">
                     <ThumbsUp className='w-10 h-10 rounded-xl'/>
                        <h5 className="mt-4 font-extrabold">WHATSAPP SUPPORT</h5>
                        <p className="mt-3">Dedicated personal agent assigned to your registration on WhatsApp.</p>
                    </div>


            </div>

        </div>


    </div>

</section>
   
   
    )
}
export default AccuracyPreview;