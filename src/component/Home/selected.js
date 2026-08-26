"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import select1 from "../../assest/selct1.png";
import select2 from "../../assest/select2.png";
import plybtn from "../../assest/playbtn.svg";

export default function Selected() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const feature = [
    {
      id: 1,
      thumb: select1,
      title: "Money Electric:The Bitcoin Mystery",
      subtitle:
        "A globe-spanning investigation into one of the most consequential unsolved questions in technology and finance: who created Bitcoin?",
      description:
        "What begins as a search for Bitcoin’s anonymous inventor, Satoshi Nakamoto, expands into a broader investigation of the world Bitcoin has created: early cypherpunks and developers, ideological battles inside the crypto movement, billionaire evangelists, political opportunists, and governments weighing whether decentralized money can become national policy. The film traces Bitcoin’s rise from an obscure digital experiment to a global financial force, including efforts to push it into nation-state adoption and legal-tender status.",
      subdes:"Part mystery and part geopolitical road movie, Money Electric examines not only who Satoshi might be, but why that identity still matters in a world where Bitcoin increasingly challenges the meaning of money, sovereignty, and power."
    
      },
    {
      id: 2,
      thumb: select2,
      title: "The Future of Digital Money",
      subtitle:
        "An exploration of how digital assets are reshaping economies around the world.",
      description:
        "From central bank digital currencies to decentralized finance, this documentary examines the technologies and ideas that could define the next era of global finance.",
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#100B08] lg:py-[120px] py-[60px]">
      <div className="container">
        <div className="md:flex md:flex-row flex flex-col gap-16 items-start" data-aos="fade-up">
          {/* Left Sticky Content */}
          <div className="md:w-1/2 md:sticky relative top-24 self-start">
            <h5 className="text-[#EFE6D1] text-[24px] font-[impact] uppercase mb-[30px]">
              Selected Scenes
            </h5>

            <h3 className="text-[#EFE6D1] lg:text-[76px] md:text-[50px] text-[40px] lg:leading-[70px] leading-[45px] mb-[36px]">
              {feature[activeIndex].title}
            </h3>

            <div className="text-[20px] leading-relaxed">
              <p className="text-[#A5FA2E] mb-6">
                {feature[activeIndex].subtitle}
              </p>

              <p className="text-white mb-[20px]">
                {feature[activeIndex].description}
              </p>

                 <p className="text-[#A5FA2E] mb-6">
                {feature[activeIndex].subdes}
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="md:w-1/2 w-full flex flex-col gap-[30px] md:mt-[0px] mt-[50px]">
            {feature.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className="relative"
              >
                <Link
                  href="/movie-details"
                  className="block relative overflow-hidden rounded-[20px]"
                >
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    className="w-full h-auto rounded-[20px]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={plybtn} alt="play" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}