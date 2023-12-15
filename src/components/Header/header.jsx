import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as Line} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      setVisible(!isScrolledDown || currentScrollPos < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    // Handle body overflow when the menu is open
    document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';

    // Cleanup function to reset body overflow when the component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-gray-200 transition-all ${
        visible ? 'opacity-100 duration-600' : 'opacity-0 -translate-y-full duration-600'
      }`}
    >
      <nav className="container flex justify-between items-center">
        <div className="navleft py-5 font-bold text-3xl hover:text-color-secondary ease-in duration-200">
          <div className="flex md:items-center md:gap-[10px]">
            <span className='w-[35px] h-[35px] text-white text-[18px] font-[500] rounded-full flex items-center justify-center'><img src={logo} alt='' className='max-w-none w-[61px] h-[61px]'/></span>
            <div className='loading-[20px]'>
              <h2 className='text-[22px] text-smallTextColor font-[700] items-center'>Nadendla Eswar</h2>
            </div>
          </div>
        </div>
        <div className="navright">
          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}

                className="hover:text-color-secondary ease-in duration-200 text-[22ßpx] cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Line
                to="/designs"
               
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                Designs
              </Line>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <button className=' md:flex items-center hidden md:block  md:gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor md:py-2 md:px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in-out duration-500'>
                <span><i className="ri-send-plane-line"></i></span>
                <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
               
              >
                Let's Talk
              </Link>
              </button>
            </li>
          </ul>
        </div>

        <div id="hamburger" className="lg:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {!isMenuOpen ? <FaBars /> : <ImCross />}
        </div>
        <div
          id="menu"
          className={`${
            isMenuOpen ? 'block ' : 'hidden'
          } bg-color-primary-dark h-screen lg:hidden fixed inset-0 `}
        >
          <ul className=" h-4/6 grid place-items-center bg-gray-100 py-20">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={30}
                duration={200}
                onClick={toggleMenu}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                Home
              </Link>
             
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={30}
                duration={200}
                onClick={toggleMenu}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                About
              </Link>
             
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={30}
                duration={200}
                onClick={toggleMenu}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer" 
              >
                Projects
              </Link>
             
            </li>
            <li>
              <Line
                to="/designs"
                onClick={toggleMenu}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
              >
                Designs
              </Line>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={200}
                className="hover:text-color-secondary ease-in duration-200 cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
