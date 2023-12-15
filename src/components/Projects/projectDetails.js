import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectData';


const ProjectDetails = () => {
    const { id } = useParams();
    const selectedProject = projects.filter(project => project.id == id); // Access the first element
    const selectedProjects = selectedProject[0];
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreen = (image) => {
      setFullscreenImage(image);
    };
  
    const closeFullscreen = () => {
      setFullscreenImage(null);
    };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    
    return (
      <>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
          <div
            className="lg:w-4/5 mx-auto flex-wrap "
            
          >
              <img 
                alt="ecommerce"
                className=" w-full h-[400px]  rounded border border-gray-200 cursor-pointer" onClick={() =>
                  fullscreenImage ? closeFullscreen() : openFullscreen(selectedProjects.image)
                }
                src={selectedProjects ? selectedProjects.image : ''}
              />
              <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">eswarnadendla's</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{selectedProjects.title}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600 ">Used Technologies:-</span>
                  </span>
                  <span className="flex flex-wrap mt-1 gap-[10px] ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    {selectedProjects.tech.map((tag, index) => (
                      <a key={index} className="ml-2">
                        <h2 className={`rounded-md text-white px-3 py-1.5 ${tag.color}`}>{tag.name}</h2>
                      </a>
                    ))}
                  </span>
                </div>
        <p class="leading-relaxed">{selectedProjects.longDesc}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
         
        </div>
        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <img
              src={fullscreenImage}
              alt="fullscreen"
              className="fullscreen-image"
            />
          </div>
        )}
        <div class="flex">
          
          <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"><a target="_blank" href={selectedProjects.github}>Github Link</a></button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default ProjectDetails;
