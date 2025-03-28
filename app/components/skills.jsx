import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="text-[#1A3066] px-4 " id="skills">
      <h2 className="text-4xl font-bold text-white mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icons;
          return (
            <div
              key={index}
              className="rounded-md bg-[#2A1D3B] hover:bg-[#331C52]  mr-10 sm:mr-0 mb-10 md:mr-10 relative"
            >
              <div className="sm:py-10 p-3 sm:p-0 relative space-y-3">
                <Icon className="w-10 h-10 mx-auto" />
                <h2 className="sm:text-2xl text-xs  font-bold text-center text-gray-300">
                  {skill.text}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
