"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import cnt from "../../assest/cntrol.jpg";
import control from "../../assest/controlbg.png";
import Image from "next/image";

export default function Controlquno() {
  const cardsRef = useRef([]);

useEffect(() => {
  cardsRef.current.forEach((card) => {
    if (!card) return;

    gsap.to(card, {
      x: () => gsap.utils.random(-80, 80),
      y: () => gsap.utils.random(-80, 80),
      duration: () => gsap.utils.random(0.4, 1),
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  });
}, []);

  const feature = [
    {
      id: 1,
      text: "Fascinating...Hugely Ambitious",
      auther: "- The Boston Globe",
      position: "left-[18%] top-[20%]",
      width: "w-[280px]",
    },
    {
      id: 2,
      text: "Excellent...Convincing... Shines a spotlight on one of the darkest corners of contemporary American life",
      auther: "- Deadline",
      position: "right-[18%] top-[30%]",
      width: "w-[300px]",
    },
    {
      id: 3,
      text: "Mostly riveting",
      auther: "- TIME",
      position: "left-[8%] top-[45%]",
      width: "w-[240px]",
    },
    {
      id: 4,
      text: "Unfolding like a mystery",
      auther: "- CNN",
      position: "right-[8%] top-[50%]",
      width: "w-[240px]",
    },
    {
      id: 5,
      text: "Absorbing... A globe-trotting thriller",
      auther: "- The Hollywood Reporter",
      position: "left-[12%] top-[68%]",
      width: "w-[350px]",
    },
    {
      id: 6,
      text: "Must-see, you have to watch",
      auther: "- Deadline",
      position: "right-[18%] top-[72%]",
      width: "w-[260px]",
    },
    {
      id: 7,
      text: "Disturbingly Relevant... Both engaging and deeply unsettling",
      auther: "- AV Club",
      position: "left-[22%] top-[84%]",
      width: "w-[300px]",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(16, 11, 8, 0.93) 0%,
            rgba(16, 11, 8, 0.93) 100%
          ),
          url(${control.src})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative overflow-hidden py-[100px] lg:py-[150px]"
    >
      <div className="container relative mx-auto">

        {/* Center Image */}
        <div className="relative z-10 mx-auto w-full max-w-[596px]" > 
          <Image
            src={cnt}
            alt="Control"
            className="h-auto w-full rounded-[20px]"
            priority
          />
        </div>

        {/* Desktop Floating Cards */}
        <div className="hidden lg:block">
          {feature.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                absolute
                ${item.position}
                ${item.width}
                z-20
                rounded-[12px]
                border
                border-[#FFFFFF59]
                bg-[#0000008C]
                px-5
                py-4
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#b98c24]
                hover:border-[#e4b548]
              `}
            >
              <p className="text-[17px] leading-[1.3] text-white">
                "{item.text}"
              </p>

              <p className="mt-2 text-[12px] text-[#EFE6D1]">
                {item.auther}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Cards */}
        <div className="mt-10 grid gap-4 lg:hidden">
          {feature.map((item) => (
            <div
              key={item.id}
              className="
                rounded-[12px]
                border
                border-[#FFFFFF59]
                bg-[#0000008C]
                p-5
                backdrop-blur-md
              "
            >
              <p className="text-sm leading-relaxed text-white">
                "{item.text}"
              </p>

              <p className="mt-2 text-xs text-[#EFE6D1]">
                {item.auther}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}