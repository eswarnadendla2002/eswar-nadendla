import React from "react";
import html from "../../assets/images/HTML.png";
import css from "../../assets/images/CSS.png";
import js from "../../assets/images/JS.png";
import tailwind from "../../assets/images/tailwind.png";
import react from "../../assets/images/React.png";
import node from "../../assets/images/Node.png";
import java from "../../assets/images/Java.png";
import python from "../../assets/images/Python.png";
const Skillsgrid = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-align-center mb-14 mt-6" id='skills'>
        <h2 className="text-[35px] text-smallTextColor font-[700]">Skills</h2>
        <p className="text-[20px]">
          Here are those which I used to make beautiful things
        </p>
        <div className="">
          <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 h-3/7 w-3/6 mx-auto mt-14">
            <div class=" row-span-1 col-span-1">
              <span>
                <img src={html} alt="" />
                <h2 className="flex justify-center align-items-center">HTML</h2>
              </span>
            </div>
            <div class="">
              <img src={css} alt="" />
              <h2 className="flex justify-center align-items-center">CSS</h2>
            </div>
            <div class="">
              <img src={js} alt="" />
              <h2 className="flex justify-center align-items-center">
                JavaScript
              </h2>
            </div>
            <div class="">
              <img src={tailwind} alt="" />
              <h2 className=" flex justify-center align-items-center">
                Tailwind CSS
              </h2>
            </div>
            <div class=" ">
              <img src={react} alt="" />
              <h2 className=" flex justify-center align-items-center">React</h2>
            </div>
            <div class="  ">
              <img src={node} alt="" />
              <h2 className=" flex justify-center align-items-center">Node</h2>
            </div>
            <div class=" ">
              <img src={java} alt="" />
              <h2 className=" flex justify-center align-items-center">Java</h2>
            </div>
            <div class="">
              <img src={python} alt="" />
              <h2 className=" flex justify-center align-items-center">
                Python
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillsgrid;
