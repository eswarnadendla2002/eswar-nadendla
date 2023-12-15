import React from 'react';
import Typewriter from 'typewriter-effect';
import saving from '../../assets/images/savings.png';

const Hero = () => {


  return (
    <div>
      <section className='pt-0' id='home'>
        <div className='container pt-16'>
          <div className='md:flex items-center justify-between sm:flex-col md:flex-row md:order-first'>
            <div className='w-full md:basis-1/2 gap-10'>
              <h5
                data-aos='fade-right'
                data-aos-duration='1500'
                className='text-headingColor font-[600] text-[22px]'
              >
                Hello Welcome
              </h5>
              <div>
                <h1
                  data-aos='fade-up'
                  data-aos-duration='1500'
                  className='text-headingColor font-[800] text-[1.9rem] sm:text-[40px] leading-[35px] mt-8'
                >
                  I'm Nadendla Eswar
                </h1>
                <h1 
                data-aos='fade-up'
                data-aos-duration='1500'
                className="text-headingColor font-[800] text-[1.9rem] sm:text-[40px] leading-[35px] mt-6">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "FrontEnd Developer",
                  "Java Developer",
                  "Graphic Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
              </div>
              <div
                data-aos='fade-up'
                data-aos-duration='1800'
                data-aos-delay='200'
                className='flex items-center gap-6 mt-10'
              >
                <a href='#contact'>
                  <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-3 px-5 rounded-[8px]'>
                    <i class='ri-mail-line'></i>Hire Me
                  </button>
                </a>
                <a
                  href='https://drive.google.com/file/d/1sySkCYgHdd4I97rr1KypULfgWJIrrfMG/view?usp=sharing'
                  className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor  hover:text-primaryColor'
                >
                  See Resume
                </a>
              </div>
              <p
                data-aos='fade-left'
                data-aos-duration='1500'
                className='flex gap-2 text-headingColor font-[500] mt-16 text-[18px] leading-7  sm:pr-10'
              >
                Eswar Nadendla: Seasoned web and app developer with 1+ years' expertise. Proficient in HTML, CSS, JS, React, React Native, Node.js, and MongoDB. A coding enthusiast dedicated to delivering innovative and efficient solutions with a blend of passion and creativity.
              </p>
              <div className='flex mt-10 gap-x-6'>
            <div className='text-[24px] hover:border-b hover:border-1 hover:border-smallTextColor hover:rounded-[1px] cursor-pointer'>
             
              <a href="https://www.instagram.com/eswar_nadendla2002/" target="_blank"> <i class='ri-instagram-line'></i></a>
            </div>
            <div className='text-[24px] hover:border-b hover:border-1 hover:border-smallTextColor hover:rounded-[1px] cursor-pointer'>
              
              <a href="https://www.facebook.com/eswar.nadendla.3/"target="_blank" ><i class='ri-facebook-box-line'></i></a>
            </div>
            <div className='text-[24px] hover:border-b hover:border-1 hover:border-smallTextColor hover:rounded-[1px] cursor-pointer'>
             
              <a href="https://twitter.com/eswar_nadendla" target="_blank"> <i class='ri-twitter-line'></i></a>
            </div>
            <div className='text-[24px] hover:border-b hover:border-1 hover:border-smallTextColor hover:rounded-[1px] cursor-pointer'>
              
              <a href="https://www.linkedin.com/in/eswar-nadendla-92a7b4227" target='_blank'><i class='ri-linkedin-box-line'></i></a>
            </div>
          </div>
            </div>
            <div className='md:basis-1/2 '>
              <div className='mt-10 sm:mt-0 align-items-end '>
                <img src={saving} alt='' />
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Hero;
