import client from "../../assest/client.png";
export default function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url(${client.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight:"auto"
      }}
      className="min-h-screen bg-black lg:pt-[213px] md:pt-[150px] pt-[100px] pb-[0px]"
    >
      <div className="container mx-auto">
        <div
          
        >
          <div data-aos="fade-right">
            <h1 className="text-[#EFE6D1] lg:text-[176px] md:text-[100px] text-[60px]  md:w-[604px] leading-[170px] font-[Impact]">
              Misha R. Kozak
            </h1>

            <div className="lg:mt-[80px] mt-[40px]">
             <a
  href="#projects"
  className="group relative inline-flex items-center pl-[18px] text-[18px] text-white"
>
  {/* Background circle → expands on hover */}
  <span
    className="
      absolute left-0 top-1/2 z-0
      h-[55px] w-[55px]
      
      -translate-y-1/2
      rounded-full
      bg-[#b98c24]
      transition-all duration-500 ease-in-out
      group-hover:w-full
    "
  />

  {/* Text */}
  <span className="relative z-10 mr-[10px]">
    View Featured Projects
  </span>
</a>
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-2  text-center gap-[9px] lg:mt-[120px] md:mt-[100px] mt-[80px] text-[#737373] md:max-w-[70%]  " data-aos="fade-right">
              <div className="border  border-[#FFFFFF0A] bg-[#FFFFFF0A] py-[7px] px-[20px]  rounded-[297px] uppercase transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]
             hover:text-white text-[14px]">
                <a href="#Producer">Producer</a>
              </div>

              <div className="border border-[#FFFFFF0A] bg-[#FFFFFF0A] py-[7px] px-[20px] rounded-[297px] uppercase transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]
               hover:text-white text-[14px]">
                <a href="#Producer">Story-Editorial</a>
              </div>

              <div className="border border-[#FFFFFF0A] bg-[#FFFFFF0A] py-[7px] px-[20px] rounded-[297px] uppercase transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]
                 hover:text-white text-[14px]">
                <a href="#Producer">Field Producer</a>
              </div>

              <div className="border border-[#FFFFFF0A] bg-[#FFFFFF0A] py-[7px] px-[20px] rounded-[297px] uppercase transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]
                 hover:text-white text-[14px]">
                <a href="#Producer">Cinematographer</a>
              </div>

              <div className="border border-[#FFFFFF0A] bg-[#FFFFFF0A] py-[7px] px-[20px] rounded-[297px] uppercase transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]
               hover:text-white text-[14px]">
                <a href="#Producer">Editor</a>
              </div>
            </div>
          </div>
        </div>

         <div className="relative z-20 text-center border-b border-[#EFE6D11A] max-w-[1312px] mx-auto lg:mt-[200px] md:mt-[150px] mt-[100px]" >
       <h2 className="uppercase lg:text-[96px] md:text-[70px] text-[40px] font-[impact] text-[#EFE6D1]" data-aos="fade-up">Featured Projects</h2>
      </div>
      </div>
    </section>
  );
}