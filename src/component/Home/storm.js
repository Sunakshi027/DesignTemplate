import storm1 from "../../assest/storm1.jpg";
import storm2 from "../../assest/storm2.jpg";
import Image from "next/image";

export default function Storm() {
  const thumbs = [
    {
      id: 1,
      image: storm1,
      link: "",
    },
    {
      id: 2,
      image: storm2,
      link: "",
    },
  ];

  return (
    <section className="relative min-h-auto overflow-hidden bg-[#100B08] lg:pt-[100px] lg:pb-[120px] pt-[60px] pb-[60px] ">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto text-center" data-aos="fade-up">
          <h2 className="mb-[30px] md:text-[64px] text-[40px] font-[Impact] leading-none text-[#EFE6D1]">
            Q: Into the Storm
          </h2>

          <p className="mx-auto max-w-[898px] text-white">
            A Primetime Emmy-nominated HBO Original docuseries following a
            three-year, globe-spanning investigation into QAnon, the anonymous
            figure behind ‘Q,’ and the online machinery that turned conspiracy,
            digital belief, and information warfare into real-world political
            power.
          </p>
        </div>

        {/* Thumbnails */}
        <div className="md:mt-[65px] mt-[30px] grid grid-cols-1 gap-8 md:grid-cols-2" data-aos="fade-up">
          {thumbs.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="overflow-hidden rounded-[30px] border border-[10px] border-[#EFE6D10A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            
          ))}
          
        </div>
        <div className="mt-[70px] flex justify-center">
              <button className="text-[18px] text-[#EFE6D1] rounded-[10px] border 
              border-[#EFE6D1] py-[23px] px-[38px] transition-all duration-300 hover:bg-[#b98c24] hover:border-[#e4b548]">Selected Scenes</button>
          </div>
      </div>
    </section>
  );
}


















































































