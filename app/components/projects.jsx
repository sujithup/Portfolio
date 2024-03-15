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
      <h2 className="text-4xl font-bold px-4 text-white mb-4">Projects</h2>
      {/* Project Names */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {projectNames.map((project) => (
          <Link key={project.id} href={project.onClick}>
            <button className="hover:text-white sm:hidden block  hover:border-white text-[#ADB7BE] rounded-full border-slate-600 border-2 px-6 py-3 text-sm mb-2">
              {project.title.split(" ")[0]}
            </button>
            <button className="hover:text-white hidden sm:block   hover:border-white text-[#ADB7BE] rounded-full border-slate-600 border-2 px-6 py-3 text-xl mb-2">
              {project.title}
            </button>
          </Link>
        ))}
      </div>

      <div
        id="web"
        className=" bg-slate-800 rounded-xl grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 md:p-10 p-4"
      >
        {webProjects.map((project, index) => {
          return (
            <section key={index}>
              <h2 className="text-xl mb-2">{project.heading}</h2>
              <div
                style={{
                  background: `url(${project.cover})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-40 md:h-72 rounded-t-xl relative"
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  {project.code && (
                    <Link
                      href={project.code}
                      target="_blank"
                      className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                      <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#331C52] rounded-b-xl pb-10">
                {/* Title */}
                <div className="text-white pt-3 bg-[#181818]py-6 px-4">
                  <h5 className="text-xl font-semibold mb-2 text-center">
                    {project.title}
                  </h5>
                  {/* Description */}
                  <p className="text-[#ADB7BE] sm:block hidden text-justify">
                    {showFullDescription
                      ? project.description.slice(0, 230)
                      : project.description}
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#E1EBED", cursor: "pointer" }}
                    >
                      {showFullDescription ? "...read more" : " show less"}
                    </span>
                  </p>
                  <p className="text-[#ADB7BE] sm:hidden text-sm block">
                    {showFullDescription
                      ? project.description.slice(0, 150)
                      : project.description}
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#E1EBED", cursor: "pointer" }}
                    >
                      {showFullDescription ? "...read more" : " show less"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col justify-center mt-5 items-center">
                  <div className=" sm:flex sm:justify-between sm:items-center">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-block border-2 border-white py-1 px-1 rounded-full hover:opacity-55 mt-5 sm:mt-0"
                    >
                      <span className="block hover:opacity-50 rounded-full px-5 py-2">
                        View Demo
                      </span>
                    </Link>
                    {project.code && (
                      <Link
                        href={project.code}
                        target="_blank"
                        className="px-1 ml-5 py-1 rounded-full hover:opacity-55 text-white"
                      >
                        View Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Mobile Apps */}
      <div className=" bg-slate-800 rounded-xl grid grid-cols-1  mt-10 gap-8 md:gap-12 lg:grid-cols-2 md:p-10 p-4">
        {mobileApps.map((project, index) => {
          return (
            <section key={index}>
              <h2 id="app" className="text-xl mb-2">
                {project.heading}
              </h2>
              <div
                style={{
                  background: `url(${project.cover})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-40 md:h-72 rounded-t-xl relative group"
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  {project.code && (
                    <Link
                      href={project.code}
                      target="_blank"
                      className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                      <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                      <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="bg-[#331C52] rounded-b-xl pb-10">
                <div className="text-white  rounded-b-xl pt-3 bg-[#181818]py-6 px-4">
                  <h5 className="text-xl font-semibold mb-2 text-center">
                    {project.title}
                  </h5>
                  {/* Description */}
                  <p className="text-[#ADB7BE] sm:block hidden text-justify">
                    {showFullDescription
                      ? project.description.slice(0, 230)
                      : project.description}
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#E1EBED", cursor: "pointer" }}
                    >
                      {showFullDescription ? "...read more" : " show less"}
                    </span>
                  </p>
                  <p className="text-[#ADB7BE] sm:hidden text-sm block">
                    {showFullDescription
                      ? project.description.slice(0, 150)
                      : project.description}
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#E1EBED", cursor: "pointer" }}
                    >
                      {showFullDescription ? "...read more" : " show less"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col justify-center mt-5 items-center">
                  <div className=" sm:flex sm:justify-between sm:items-center">
                    <Link
                      href={project.code}
                      target="_blank"
                      className="inline-block border-2 border-white py-1 px-1 rounded-full hover:opacity-55 mt-5 sm:mt-0"
                    >
                      <span className="block hover:opacity-50 rounded-full px-5 py-2">
                        View Code
                      </span>
                    </Link>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="px-1 ml-5 py-1 rounded-full hover:opacity-50 text-white"
                      >
                        View Design
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div
        id="figma"
        className=" bg-slate-800 rounded-xl grid grid-cols-1 mt-10 gap-8 md:gap-12 lg:grid-cols-2 md:p-10 p-4"
      >
        {figmaDesign.map((project, index) => {
          return (
            <section key={index}>
              <h2 className="text-xl mb-2">{project.heading}</h2>
              <div
                style={{
                  background: `url(${project.cover})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-40 md:h-72 rounded-t-xl relative group bg-contain lg:bg-cover"
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                  </Link>
                </div>
              </div>
              <div className="bg-[#331C52] rounded-b-xl pb-10">
                <div className="text-white  rounded-b-xl pt-3 bg-[#181818]py-6 px-4">
                  <h5 className="text-xl font-semibold mb-2 text-center">
                    {project.title}
                  </h5>
                  {/* Description */}
                  <p className="text-[#ADB7BE] sm:block hidden text-justify">
                    {showFullDescription
                      ? project.description.slice(0, 230)
                      : project.description}
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#E1EBED", cursor: "pointer" }}
                    >
                      {showFullDescription ? "...read more" : " show less"}
                    </span>
                  </p>
                  <p className="text-[#ADB7BE] sm:hidden text-sm block">
                    {showFullDescription
                      ? project.description.slice(0, 150)
                      : project.description}
                    <span
                      onClick={toggleDescription}
                      style={{ color: "#E1EBED", cursor: "pointer" }}
                    >
                      {showFullDescription ? "...read more" : " show less"}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col justify-center mt-5 items-center">
                  <div className=" sm:flex sm:justify-between sm:items-center">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-block border-2 border-white py-1 px-1 rounded-full hover:opacity-55 mt-5 sm:mt-0"
                    >
                      <span className="block hover:opacity-50 rounded-full px-5 py-2">
                        View Design
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
