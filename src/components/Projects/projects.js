import React, { useState } from "react";

import { projects } from "./projectData";
import { Link } from "react-router-dom";
const Projects = () => {
 

  const [displayedProjects, setDisplayedProjects] = useState(3);

  const loadMoreProjects = () => {
    setDisplayedProjects(displayedProjects + 3);
  };

  return (
    <>
      <section id="projects">
       <div className="bg-gray-50 pt-6 pb-8">
       <div className="container my-40 ">
          <div className="featuresHeading text-center mb-20">
            <h3 className=" text-smallTextColor font-bold text-[35px] mb-8">
              My Projects
            </h3>
            <h2 className="title text-[20px]">
              Here you will find why I am the best!
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, displayedProjects).map((project) => (
  <Link to={`/projects/${project.id}`} key={project.id}>
    <div
      className="featureItem text-center p-7 border-solid border-2 border-color-secondary rounded-xl cursor-pointer shadow-md"
    >
      <div className="featurelogo w-32 lg:w-52 mx-auto  shadow-lg ">
        <img src={project.image} alt="" className="rounded-xs" />
      </div>
      <h2 className="text-2xl font-bold my-5">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  </Link>
))}

          </div>
        </div>
        <div className="flex justify-center items-center align-items-center mt-6">
          <button
            onClick={loadMoreProjects}
            className="flex items-center justify-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500"
          >
            Load More...
          </button>
        </div>
       </div>
      </section>
    </>
  );
};

export default Projects;
