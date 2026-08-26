"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import money1 from "../../assest/moneyimgq.png";
import feat from "../../assest/sec1.png";
import Image from "next/image";

export default function Feature() {
  const cardsRef = useRef([]);

  const feature = [
    {
      id: 1,
      text: "Feels like a digital Agatha Christie tale",
      auther: "- The Guardian",
      position: "left-[25%] top-[25%]",
      width: "w-[279px]",
    },
    {
      id: 2,
      text: "A quest that takes [us] around the world",
      auther: "- Deadline",
      position: "right-[26%] top-[35%]",
      width: "w-[279px]",
    },
    {
      id: 3,
      text: "Climax in pivotal confrontation",
      auther: "- New York Magazine",
      position: "left-[9%] top-[45%]",
      width: "w-[279px]",
    },
    {
      id: 4,
      text: "Investigative documentary...a closely guarded secret",
      auther: "- The New Yorker",
      position: "right-[9%] top-[50%]",
      width: "w-[279px]",
    },
    {
      id: 5,
      text: "Digs into the rise of crypto currencies and the effort to uncover the true identity of Satoshi Nakamoto",
      auther: "- Variety",
      position: "left-[15%] top-[57%]",
      width: "w-[477px]",
    },
    {
      id: 6,
      text: "Intriguing… dramatic",
      auther: "- The Washington Post",
      position: "right-[27%] top-[65%]",
      width: "w-[279px]",
    },
    {
      id: 7,
      text: "Ambitious… compelling… persuasive",
      auther: "- The New York Times",
      position: "left-[25%] top-[80%]",
      width: "w-[279px]",
    },
  ];

 useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        /*
          Each card gets its own animation.
          Different values make the cards feel independent.
        */

        gsap.to(card, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-70, 70),
        

          duration: gsap.utils.random(2, 3.5),

          repeat: -1,
          yoyo: true,

          delay: index * 0.15,

          ease: "sine.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

 

  return (
    <div>
      <section
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(16, 11, 8, 0.93) 0%,
              rgba(16, 11, 8, 0.93) 100%
            ),
            url(${feat.src})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="
          relative
        
          overflow-hidden
          py-[60px]
          md:pt-[80px]
          md:pb-[100px]
          lg:pt-[110px]
          lg:pb-[150px]
        "
      >
        <div className="container relative mx-auto">

          {/* Main Image */}
          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[596px]
              px-5
              sm:px-0
            "
            
          >
            <Image
              src={money1}
              alt="Money Electric"
              className="h-auto w-full"
              priority
            />
          </div>

          {/* ================= DESKTOP CARDS ================= */}

          <div className="hidden lg:block">
            {feature.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`
                  absolute
                  ${item.position}
                  ${item.width}
                  z-20
                  rounded-[12px]
                  border
                  border-[#FFFFFF59]
                  bg-[#0000008C]
                  px-[20px]
                  py-[17px]
                  backdrop-blur-sm
                  transition-colors
                  duration-300
                  hover:bg-[#b98c24]
                  hover:border-[#e4b548]
                  hover:text-black
                `}
              >
                <p className="text-[17px] leading-[18px] text-white">
                  "{item.text}"
                </p>

                <p className="mt-[8px] text-[12px] text-[#EFE6D1]">
                  {item.auther}
                </p>
              </div>
            ))}
          </div>

          {/* ================= TABLET ================= */}

          <div className="mt-10 grid grid-cols-1 gap-4 lg:hidden">
            {feature.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-[12px]
                  border
                  border-[#FFFFFF59]
                  bg-[#0000008C]
                  px-5
                  py-4
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-[#b98c24]
                  hover:border-[#e4b548]
                "
              >
                <p className="text-[15px] leading-[18px] text-white">
                  "{item.text}"
                </p>

                <p className="mt-2 text-[11px] text-[#EFE6D1]">
                  {item.auther}
                </p>
              </div>
            ))}
          </div>

          


        </div>
      </section>
    </div>
  );
}