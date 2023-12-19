import React from "react";
import heroImg from "../../assets/images/3D-render.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section id="about" >
        <div className="bg-gray-50 py-4 pb-8 ">
        <div className="flex justify-center mb-14 mt-6 ">
          <h2 className="text-[34px] text-smallTextColor font-[700]">About</h2>
        </div>
        <div class="container my-28">
          <div class="flex flex-col xl:flex-row items-center gap-10 xl:gap-28">
            <div>
              <img
                src={heroImg}
                alt=""
                style={{ width: "80%", height: "100%" }}
              />
            </div>
            <div>
              <h3 class="text-xl text-color-secondary font-bold mb-8">
                Who is Eswar Nadendla?
              </h3>
              <h2 class="title mb-10 text-[20px]">
               Passionate Web and App Development
              </h2>
              <p className="w-full">

                {/* Hello, I'm Eswar Nadendla, a passionate web and mobile app developer with over 1 year of experience in the field. I specialize in creating dynamic and responsive websites using a combination of HTML, CSS, and JavaScript. My expertise extends to building scalable and efficient web applications using React.

                In the realm of mobile app development, I am proficient in React Native, allowing me to craft cross-platform apps that deliver a seamless user experience. My dedication to providing top-notch solutions also extends to the backend, where I leverage Node.js and MongoDB to create robust server-side applications.

                My tech toolkit includes not only the front-end and back-end technologies but also extends to languages like Java and Python. This diverse skill set enables me to tackle a wide range of projects, from full-stack web development to mobile app deployment.

                I am committed to staying updated with the latest industry trends and adopting best practices to ensure the success of every project. If you are looking for a developer who can bring your ideas to life with creativity and precision, I am ready to take on the challenge.

                Let's collaborate and turn your vision into reality! Feel free to explore my portfolio to see some of the exciting projects I've had the pleasure of working on. */}
              I'm Eswar Nadendla, a skilled web and app developer with over 1 year of experience. Proficient in HTML, CSS, JS, and React for web development. Expertise extends to React Native for cross-platform app development, backed by Node.js and MongoDB. Knowledgeable in Java and Python. Committed to crafting innovative solutions, I bring a passion for code and creativity to every project, ensuring impactful and efficient results.
              </p>
              <Link to='/explore'>
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] mt-10 max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500">
               <i class="ri-send-plane-line"></i>Explore More..
              </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
