"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import horse from "../assets/images/horse.png";
import cliff from "../assets/images/cliff.webp";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center  max-w-[750px] text-center sm:text-left justify-self-start">
          <h1 className="text-[60px] font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web Development
            </span>
          </h1>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={horse}
              alt="hero image"
              className="absolute transform -translate-x-1/2  md:-translate-y-1/3 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
            <Image
              src={cliff}
              alt="cliff"
              width={480}
              height={480}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;