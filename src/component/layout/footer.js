import Link from "next/link";
import Image from "next/image";
import img1 from "../../assest/bar.svg";
import icn1 from "../../assest/soc1.svg";
import icn2 from "../../assest/soc2.svg";
import icn3 from "../../assest/soc3.svg";
import icn4 from "../../assest/soc4.svg";
import icn5 from "../../assest/soc5.svg";
export default function Footer() {
  return (
    <footer className="lg:pt-[130px] md:pt-[80px] pt-[50px] bg-[#100B08]">
      <div className="container">

        <div data-aos="fade-up" >
         <div className="max-w-[536px] mx-auto text-center" >
            <h2 className="text-[#EFE6D1] font-[Impact] lg:text-[156px]  md:text-[70px]  text-[40px] lg:leading-[170px] ">Misha R. Kozak</h2>
            <a href="mailto:kozak528@gmail.com" className="lg:text-[32px] text-[20px]  hover:text-[#b98c24] transition-all duration-300 font-[cal-sans] ">kozak528@gmail.com</a>
      </div>

      <div className="flex flex-col lg:flex lg:flex-row  justify-between mt-[60px] border-b border-[#3d3d3ccc] lg:pb-[130px] md:pb-[80px] pb-[50px]">
           <div className="">
                 <h6 className="text-[18px] text-[#333333] cursor-pointer hover:text-white transition-all duration-300 ">Quick Links</h6>
           
           <div className="flex flex-col lg:flex lg:flex-row  lg:text-[46px] md:text-[30px] text-[25px] lg:mb-[0px] mb-[30px] w-[360px] justify-between mt-[14px] font-[cal-sans]">
              <Link href="/work" className="hover:text-[#b98c24] transition-all duration-300 ">Work</Link>
              <Link href="/contact" className="hover:text-[#b98c24] transition-all duration-300 ">Contact</Link>
           </div>
           
           </div>
           <div className="">
             <h6 className="text-[18px] text-[#333333] cursor-pointer hover:text-white transition-all duration-300 ">Connect With Us</h6>
          
          <div className="flex   w-[294px] justify-between items-center mt-[32px]">
            <div className="">
              <a href=""><Image src={icn1} alt="Social"></Image></a>
            </div>
             <div className="">
              <a href=""><Image src={icn2} alt="Social"></Image></a>
            </div>
             <div className="">
              <a href=""><Image src={icn3} alt="Social"></Image></a>
            </div>
             <div className="">
              <a href=""><Image src={icn4} alt="Social"></Image></a>
            </div>
             <div className="">
              <a href=""><Image src={icn5} alt="Social"></Image></a>
            </div>
          </div>
          
          
          
           </div>
           
      </div>
      <div className="text-center py-[34px] text-[20px]">
            <h5>© 2026  Misha R. Kozak</h5>
          </div>
          </div>
      </div>
    </footer>
  );
}