import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

type MenuItemProps = {
  name: string;
  link: string;
  active: boolean;
  onClick?: (link: string) => void;
};

const Items: MenuItemProps[] = [
  {
    name: "accueil",
    link: "home",
    active: true,
  },
  {
    name: "a_propos",
    link: "about",
    active: false,
  },
  {
    name: "projets",
    link: "projects",
    active: false,
  },
  {
    name: "formations",
    link: "formations",
    active: false,
  },
  {
    name: "contact",
    link: "contact",
    active: false,
  },
];

const MenuItem: React.FC<MenuItemProps> = ({ name, link, active, onClick }) => {
  return (
    <a
      href={"#" + link}
      className={`font-medium text-sm ${active ? 'text-white font-bold' : 'text-gray-500'} hover:text-white transition duration-300 ease-in-out`}
      onClick={() => onClick && onClick(link)}
    >
      <span className='text-[#C778DD]'>#</span>
      {name}
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 w-full bg-transparent z-50 shadow-md backdrop-blur-md">
        <div className="container mx-auto lg:px-20">
          <nav className="flex items-center justify-between p-6">
            <h1 className="text-xl text-white font-bold">Alexandre</h1>

            <div className="hidden sm:flex items-center space-x-8">
              {Items.map((item) => (
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={item.link}
                  activeClass="text-white font-bold"
                  className="font-medium text-sm text-gray-500 hover:text-white transition duration-300 ease-in-out hover:cursor-pointer"
                >
                  <span className='text-[#C778DD]'>#</span>
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            <button
              className="sm:hidden text-[#C778DD]"
              onClick={toggleMenu}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </nav>

          {isOpen && (
            <div className="sm:hidden flex flex-col mt-2 ">
              {Items.map((item) => (
                <ScrollLink
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={item.link}
                  activeClass="text-white font-bold"
                  className="font-medium text-sm text-gray-500 hover:text-white transition duration-300 ease-in-out hover:cursor-pointer"
                >
                  <span className='text-[#C778DD]'>#</span>
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;