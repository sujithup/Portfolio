import React from "react";
import { FaGit, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { socialMedia } from "../constants";

const Contact = () => {
  return (
    <section className="text-white" id="contact">
      <h2 className="text-4xl font-bold px-4 text-white mb-4">Contact Me</h2>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        {socialMedia.map((social) => {
          const Icon = social.icon;
          return (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              className="flex items-center bg-[#2A1D3B] p-3 rounded-xl justify-center gap-2 text-xl text-white font-semibold group"
            >
              <Icon className="w-10 h-10 mx-auto" />
              <p className="group-hover:text-white">{social.title}</p>
              <FiArrowUpRight className="translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
