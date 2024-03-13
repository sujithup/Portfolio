"use client";
import React from "react";
import {
  figmaDesign,
  mobileApps,
  projectNames,
  projects,
  webProjects,
} from "../constants";
import Link from "next/link";
import { FaEye, FaCode } from "react-icons/fa";

const Projects = () => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="text-white" id="projects">
      <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {projectNames.map((project) => {
          return (
            <Link key={project.id} href={project.onClick}>
              <button className="hover:text-white hover:border-white text-[#ADB7BE] rounded-full border-slate-600 border-2 px-6 py-3 text-xl">
                {project.title}
              </button>
            </Link>
          );
        })}
      </div>
      <div
        id="web"
        className=" bg-slate-800 rounded-xl grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 p-10"
      >
        {webProjects.map((project, index) => {
          return (
            <section key={index}>
              <h2 className="text-xl mb-2">{project.heading}</h2>
              <div
                className="h-52 md:h-96 rounded-t-xl relative group"
                style={{
                  background: `url(${project.cover})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  {project.code && (
                    <Link
                      href={project.code}
                      target='_blank'
                      className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                      <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    target='_blank'
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                  </Link>
                </div>
              </div>
              <div className="text-white  rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h5>
                <p className="text-[#ADB7BE] lg:text-justify">
                  {showFullDescription
                    ? project.description.slice(0, 230)
                    : project.description}
                  <span
                    onClick={toggleDescription}
                    style={{ color: "purple", cursor: "pointer" }}
                  >
                    {showFullDescription ? "...read more" : " show less"}
                  </span>
                </p>
              </div>
            </section>
          );
        })}
      </div>
      <div className=" bg-slate-800 rounded-xl grid grid-cols-1 mt-10 gap-8 md:gap-12 sm:grid-cols-2 p-10">
        {mobileApps.map((project, index) => {
          return (
            <section key={index}>
              <h2 id="app" className="text-xl mb-2">
                {project.heading}
              </h2>
              <div
                className="h-52 md:h-96 rounded-t-xl relative group"
                style={{
                  background: `url(${project.cover})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  {project.code && (
                    <Link
                      href={project.code}
                      target='_blank'
                      className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                      <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target='_blank'
                      className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                      <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="text-white  rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h5>
                <p className="text-[#ADB7BE] lg:text-justify">
                  {showFullDescription
                    ? project.description.slice(0, 230)
                    : project.description}
                  <span
                    onClick={toggleDescription}
                    style={{ color: "purple", cursor: "pointer" }}
                  >
                    {showFullDescription ? "...read more" : " show less"}
                  </span>
                </p>
              </div>
            </section>
          );
        })}
      </div>
      <div
        id="figma"
        className=" bg-slate-800 rounded-xl grid grid-cols-1 mt-10 gap-8 md:gap-12 sm:grid-cols-2 p-10"
      >
        {figmaDesign.map((project, index) => {
          return (
            <section key={index}>
              <h2 className="text-xl mb-2">{project.heading}</h2>
              <div
                className="h-52 md:h-96 rounded-t-xl relative group"
                style={{
                  background: `url(${project.cover})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  <Link
                    href={project.link}
                    target='_blank'
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                  </Link>
                </div>
              </div>
              <div className="text-white  rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h5>
                <p className="text-[#ADB7BE] lg:text-justify">
                  {showFullDescription
                    ? project.description.slice(0, 230)
                    : project.description}
                  <span
                    onClick={toggleDescription}
                    style={{ color: "purple", cursor: "pointer" }}
                  >
                    {showFullDescription ? "...read more" : " show less"}
                  </span>
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
