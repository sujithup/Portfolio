import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="sm:block hidden" src="/about-image.png" alt="about image" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <Image className="sm:hidden block mb-4" src="/about-image.png" alt="about image" width={400} height={400} />
          <p className=" lg:text-xl">
            Hello world! I am Sujith, a versatile creator with skills ranging
            from designing and building websites to developing apps. Over the
            past 2.6 years, I have dedicated myself to crafting websites from the
            ground up. Additionally, I specialize in Flutter app development,
            integrating Firebase for robust backend support. My passion lies in
            crafting straightforward, sophisticated, and adaptable web and
            mobile applications to cater the diverse online communities.
          </p>
          <div className="pt-10">
            <h3 className="text-2xl font-bold text-gray-300">Education</h3>
            <ul className=" pt-5">
            <li>College: Jyothy Institute of Technology, Bangalore</li>
            <li>Branch: Information Science (B.E)</li>
            <li>Batch:  2017-2021</li>
          </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
