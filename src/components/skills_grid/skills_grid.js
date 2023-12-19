import React, { useState } from "react";
import html from "../../assets/images/HTML.png";
import css from "../../assets/images/CSS.png";
import js from "../../assets/images/JS.png";
import tailwind from "../../assets/images/tailwind.png";
import react from "../../assets/images/React.png";
import node from "../../assets/images/Node.png";
import java from "../../assets/images/Java.png";
import python from "../../assets/images/Python.png";
import native from '../../assets/images/react_native.png';
import photoshop from '../../assets/images/photoshop.png'
const skillsList = [
  { id: 1, name: "HTML", image: html },
  { id: 2, name: "CSS", image: css },
  { id: 3, name: "JavaScript", image: js },
  { id: 4, name: "Tailwind CSS", image: tailwind },
  { id: 5, name: "React", image: react },
  { id: 6, name: "Node", image: node },
  { id: 7, name: "Java", image: java },
  { id: 8, name: "Python", image: python },
  { id: 9, name: "React Native", image: native },
  { id: 10, name: "Photoshop", image: photoshop },
];

const Skillsgrid = () => {
  const [displayedSkills, setDisplayedSkills] = useState(8);

  const loadMoreSkills = () => {
    setDisplayedSkills(displayedSkills + 4);
  };

  const showLessSkills = () => {
    setDisplayedSkills(8);
  };

  const showMoreOrLessSkillsButton =
    displayedSkills > skillsList.length ? (
      <button
        onClick={showLessSkills}
        className="flex items-center justify-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500"
      >
        Show Less
      </button>
    ) : (
      <button
        onClick={loadMoreSkills}
        className="flex items-center justify-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500"
      >
        Show More...
      </button>
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center text-align-center mb-14 mt-6" id="skills">
        <h2 className="text-[35px] text-smallTextColor font-[700]">Skills</h2>
        <p className="text-[20px] text-center">
          Here are those which I used to make beautiful things
        </p>
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 h-3/7 w-3/6 mx-auto mt-14">
            {skillsList.slice(0, displayedSkills).map((skill) => (
              <div key={skill.id} className="row-span-1 col-span-1">
                <span>
                  <img src={skill.image} alt="" />
                  <h2 className="flex justify-center align-items-center">{skill.name}</h2>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center align-items-center mt-6">
          {showMoreOrLessSkillsButton}
        </div>
      </div>
    </>
  );
};

export default Skillsgrid;
