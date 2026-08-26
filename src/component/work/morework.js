"use client";

import { useState } from "react";
import Image from "next/image";

import img1 from "../../assest/IMG1.png";
import img2 from "../../assest/IMG2.png";
import img3 from "../../assest/IMG3.png";
import img4 from "../../assest/IMG4.png";
import img5 from "../../assest/IMG5.png";
import img6 from "../../assest/IMG6.png";
import img7 from "../../assest/IMG7.png";
import img8 from "../../assest/IMG8.png";
import img9 from "../../assest/IMG9.png";
import img10 from "../../assest/IMG10.png";
import img11 from "../../assest/IMG11.png";
import img12 from "../../assest/IMG12.png";



export default function MoreWork() {
  const [visibleCount, setVisibleCount] = useState(12);

  const thumbs = [
    {
      id: 1,
      image: img1,
      text: "Development and Pitch Work",
      des: "A holding space for pitch decks, sizzles, development shoots, proof-of-concept scenes, and research-led materials.",
    },
    {
      id: 2,
      image: img2,
      text: "Giro Studio",
      des: "Educational, promotional, interview, conference, and web-video work for academic and institutional clients.",
    },
    {
      id: 3,
      image: img3,
      text: "Channel 10 / MCTV",
      des: "Local programming, multi-camera coverage, field segments, and community event video from pre-production through delivery.",
    },
    {
      id: 4,
      image: img4,
      text: "Freelance Set Work",
      des: "Selected television, streaming, and cable production support across scripted, unscripted, studio, and location work.",
    },
    {
      id: 5,
      image: img5,
      text: "Alina",
      des: "Feature-film assistant editor and director-facing support, including dailies organization and Avid workflow maintenance.",
    },
    {
      id: 6,
      image: img6,
      text: "Short Films and Experiments",
      des: "A future place for smaller videos, clipped scenes, camera studies, and personal editorial work.",
    },
    {
      id: 7,
      image: img7,
      text: "The Archive",
      des: "A carefully constructed archival scene that connected past events with present-day consequences through layered visual storytelling.",
    },
    {
      id: 8,
      image: img8,
      text: "Pressure Point",
      des: "A turning-point scene where conflicting accounts collided, creating one of the documentary’s most suspenseful moments.",
    },
    {
      id: 9,
      image: img9,
      text: "The Long Walk",
      des: "A slow-burning sequence that used movement, landscape, and sound design to build anticipation and emotional weight.",
    },
    {
      id: 10,
      image: img10,
      text: "Unseen Connections",
      des: "A visual investigation that revealed relationships between people, places, and events that were previously invisible.",
    },
    {
      id: 11,
      image: img11,
      text: "After the Broadcast",
      des: "An aftermath sequence exploring the human consequences of a story once it entered the public conversation.",
    },
    {
      id: 12,
      image: img12,
      text: "The Reconstruction",
      des: "A stylized reconstruction that combined cinematic imagery with factual storytelling to clarify a complex event.",
    },
   {
      id: 13,
      image: img12,
      text: "The Reconstruction",
      des: "A stylized reconstruction that combined cinematic imagery with factual storytelling to clarify a complex event.",
    },
      {
      id: 14,
      image: img9,
      text: "The Long Walk",
      des: "A slow-burning sequence that used movement, landscape, and sound design to build anticipation and emotional weight.",
    },
    {
      id: 15,
      image: img10,
      text: "Unseen Connections",
      des: "A visual investigation that revealed relationships between people, places, and events that were previously invisible.",
    },
    {
      id: 16,
      image: img11,
      text: "After the Broadcast",
      des: "An aftermath sequence exploring the human consequences of a story once it entered the public conversation.",
    },
 
  ];

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#100B08] pt-[210px] pb-[120px]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mx-auto text-center" data-aos="fade-up">
          <h1 className="mb-[70px] lg:text-[96px] md:text-[50px] text-[40px] font-[Impact] leading-none text-[#EFE6D1]">
            More Work
          </h1>
        </div>

        {/* Thumbnails */}
        <div className="mt-[65px] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          {thumbs.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="group block"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[12px]">
                <Image
                  src={item.image}
                  alt={item.text}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h4 className="mt-[25px] mb-[12px] text-[28px] text-[#EFE6D1]">
                {item.text}
              </h4>

              <p className="text-[16px] text-[#EFE6D1]">
                {item.des}
              </p>
            </div>
          ))}
        </div>

        {/* See More */}
        {visibleCount < thumbs.length && (
          <div className="mt-[70px] flex justify-center">
            <button
              onClick={handleSeeMore}
              className="rounded-[6px] bg-[#b98c24] px-[40px] py-[10px] text-[20px] text-white transition-all duration-300 hover:bg-[#d0a331]"
            >
              See More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}