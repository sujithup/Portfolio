import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="text-white" id="skills">
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {skills.map((skill, index) => {
          const Icon = skill.icons;
          return (
            <div
              key={index}
              className="rounded-md mb-10 mr-10 overflow-hidden ring-2 ring-neutral-200  hover:ring-pink-400 relative z-20"
            >
              <div className="py-10 relative space-y-5">
                <Icon  className="w-10 h-10 mx-auto"/>
                <h2 className="text-2xl font-bold text-center text-gray-300">
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
