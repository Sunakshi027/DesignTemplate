"use client";

import Image from "next/image";
import { useState } from "react";

import email from "../../assest/Vector.svg";

export default function Banner() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setSubmitted(true);

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-black px-4 pt-[150px] lg:pb-[150px] md:pb-[80px] pb-[50px] text-[#EFE6D1] md:pt-[180px] lg:pt-[213px]">
      <div className="container mx-auto">

        {/* Contact Heading */}
        <div data-aos="fade-up">  
        <div className="text-center" >
          <h1 className="mx-auto mb-[50px] font-[Impact] lg:text-[64px] md-text-[50px] text-[40px] uppercase leading-none md:text-[80px] lg:text-[96px]">
            Contact
          </h1>
        </div>

        {/* Email Card */}
        <div className="flex justify-center">
          <a
            href="mailto:kozak528@gmail.com"
            className="flex w-full max-w-[460px] flex-col items-center rounded-[15px] border border-[#3d3d3ccc] bg-[#EFE6D10A] p-[35px] transition-all duration-300 hover:bg-[#EFE6D115] hover:text-[#b98c24] hover:shadow-[0_10px_40px_rgba(239,230,209,0.12)]"
          >
            <Image
              src={email}
              alt="Email"
              className="mb-[25px]"
            />

            <div className="text-center">
              <h3 className="mb-[15px] text-[24px]">
                Email
              </h3>

              <p className="text-[18px] ">
                kozak528@gmail.com
              </p>
            </div>
          </a>
        </div>
    </div>
        {/* Get In Touch */}
        <div className="mt-[100px] md:mt-[145px]" data-aos="fade-up">

          <h2 className="mb-[50px] text-center font-[Impact] lg:text-[64px] md:text-[50px] text-[40px]  uppercase leading-none md:text-[80px] lg:text-[96px]">
            Get in touch.
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-[1090px] rounded-[20px] border border-[#3d3d3ccc] bg-[#15100C]  p-[15px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:p-[50px] lg:p-[70px]"
          >

            <div className="mb-[40px] text-center text-[18px] md:mb-[50px] md:text-[22px]">
              <p>
                Have a story to tell? Let’s create something cinematic together.
              </p>
            </div>

            <div className="mb-[20px] flex flex-col md:gap-[20px]  gap-[10px] md:flex-row">

              <div className="flex w-full flex-col text-[18px]">
                <label
                  htmlFor="firstName"
                  className="mb-[10px]"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="rounded-[6px]   bg-[#EFE6D10A] px-[15px] md:py-[20px] py-[10px] text-[#EFE6D1] outline-none placeholder:text-[#EFE6D180] focus:border-[#EFE6D1]"
                />
              </div>

              {/* Last Name */}
              <div className="flex w-full flex-col text-[18px]">
                <label
                  htmlFor="lastName"
                  className="mb-[10px]"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="rounded-[6px] bg-[#EFE6D10A] px-[15px] md:py-[20px] py-[10px] text-[#EFE6D1] outline-none placeholder:text-[#EFE6D180] focus:border-[#EFE6D1]"
                />
              </div>
            </div>

            {/* Phone + Email */}
            <div className="mb-[20px] flex flex-col gap-[20px] md:flex-row">

              {/* Phone */}
              <div className="flex w-full flex-col text-[18px]">
                <label
                  htmlFor="phone"
                  className="mb-[10px]"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-[6px]  bg-[#EFE6D10A] px-[15px] md:py-[20px] py-[10px] text-[#EFE6D1] outline-none placeholder:text-[#EFE6D180] focus:border-[#EFE6D1]"
                />
              </div>

              {/* Email */}
              <div className="flex w-full flex-col text-[18px]">
                <label
                  htmlFor="email"
                  className="mb-[10px]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-[6px]  bg-[#EFE6D10A] px-[15px] md:py-[20px] py-[10px] text-[#EFE6D1] outline-none placeholder:text-[#EFE6D180] focus:border-[#EFE6D1]"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-[20px]">
              <div className="flex flex-col text-[18px]">

                <label
                  htmlFor="subject"
                  className="mb-[10px]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="rounded-[6px]  bg-[#EFE6D10A] px-[15px] md:py-[20px] py-[10px] text-[#EFE6D1] outline-none placeholder:text-[#EFE6D180] focus:border-[#EFE6D1]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-[30px]">
              <div className="flex flex-col text-[18px]">

                <label
                  htmlFor="message"
                  className="mb-[10px]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="resize-none rounded-[6px]  bg-[#EFE6D10A] px-[15px] md:py-[20px] py-[10px] text-[#EFE6D1] outline-none placeholder:text-[#EFE6D180] focus:border-[#EFE6D1]"
                />
              </div>
            </div>
{submitted && (
  <p>hello submit</p>
)}
            {/* Success Message */}
            {submitted && (
              <p className="mb-[20px] text-center text-green-400 text-[20px]">
                Thank you! Your message has been submitted.
              </p>
            )}

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-[10px] border border-[#EFE6D1CC] bg-[#EFE6D1] md:px-[45px] md:py-[18px] md:text-[18px] px-[30px] py-[13px] text-[14px] uppercase text-black transition-all duration-300 hover:bg-[#b98c24] hover:text-[#EFE6D1]"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}