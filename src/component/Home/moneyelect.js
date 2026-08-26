import moneybg from "../../assest/moneybg1.png";
import money1 from "../../assest/moneyimgq.png";
import tumbnail from "../../assest/utub.png";
import Image from "next/image";

export default function Moneyelect() {
  const thumb = [
    {
      id: 1,
      thumb: tumbnail,
    },
  ];

  return (
    <section
   
      className="relative min-h-auto overflow-hidden bg-[#100B08] lg:pt-[100px] lg:pb-[150px] pt-[60px] pb-[60px]"
    >
      <div className="container mx-auto">

        {/* Heading */}

        <div className=""data-aos="fade-up"> 
        <div className="  mx-auto text-center">
          <h2 className="mb-[30px] md:text-[64px] text-[40px] font-[Impact] leading-none text-[#EFE6D1]">
            Money Electric: The Bitcoin Mystery
          </h2>

          <p className="mx-auto max-w-[898px] text-white">
            An HBO Original documentary tracing Bitcoin from its mysterious
            creation to its collision with global finance, political power,
            and nation-state ambition, as the search for Satoshi Nakamoto
            becomes a larger story about who controls the future of money.
          </p>
        </div>

        {/* Thumbnail */}
        {thumb.map((item) => (
          <div
            key={item.id}
            className=" lg:mt-[75px] mt-[40px] rounded-[30px]    "
          >
           <a href=""className="group block">
              <Image
              src={item.thumb}
              alt="Money Electric thumbnail"
              className="h-auto w-full "
            />
           </a>

           <div className="lg:mt-[70px] mt-[50px] flex justify-center">
              <button className="text-[18px] text-[#EFE6D1] rounded-[10px] border 
              border-[#EFE6D1] py-[23px] px-[38px] transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]">Selected Scenes</button>
          </div>
          </div>
        ))}
</div>
      </div>
    </section>
  );
}















