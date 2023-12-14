import React, { useState } from "react";
import pf1 from "../../assets/images/portfolio-01.jpg";
import pf2 from "../../assets/images/portfolio-02.jpg";
import pf3 from "../../assets/images/portfolio-03.jpg";
import pf4 from "../../assets/images/portfolio-04.jpg";
import pf5 from "../../assets/images/portfolio-05.jpg";
import pf6 from "../../assets/images/portfolio-06.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: pf1,
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimizing websites to improve their visibility on search engines. Conducting keyword research, on-page and off-page optimization, and monitoring search engine algorithms.",
    },
    {
      id: 2,
      image: pf2,
      title: "Analytics and Data Analysis",
      description:
        "Utilizing analytics tools to track and measure the performance of digital marketing efforts. Providing insights and recommendations based on data analysis.",
    },
    {
      id: 3,
      image: pf3,
      title: "Marketing Automation",
      description:
        "Implementing and managing marketing automation tools to streamline repetitive tasks. Creating automated workflows for lead nurturing and customer engagement.",
    },
    {
      id: 4,
      image: pf4,
      title: "Project Four",
      description: "Description for Project Four.",
    },
    {
      id: 5,
      image: pf5,
      title: "Project Five",
      description: "Description for Project Five.",
    },
    {
      id: 6,
      image: pf6,
      title: "Project Six",
      description: "Description for Project Six.",
    },
  ];

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
              Our Projects
            </h3>
            <h2 className="title text-[20px]">
              Here you will find why I am the best!
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, displayedProjects).map((project) => (
              <div
                key={project.id}
                className="featureItem text-center p-7 border-solid border-2 border-color-secondary rounded-xl cursor-pointer"
              >
                <div className="featurelogo w-32 lg:w-52 mx-auto">
                  <img src={project.image} alt="" />
                </div>
                <h2 className="text-2xl font-bold my-5">{project.title}</h2>
                <p>{project.description}</p>
              </div>
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
