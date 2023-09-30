import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Icon } from '@iconify/react';

type MenuItemProps = {
  name: string;
  link: string;
  active?: boolean | false;
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
  },
  {
    name: "projets",
    link: "projects",
  },
  {
    name: "contact",
    link: "contact",
  },
];

const MenuItem = ({ name, link, active, onClick }: MenuItemProps) => {
  return (
    <ScrollLink
      to={link}
      spy={true}
      smooth={true}
      offset={-200}
      duration={500}
      activeClass="text-white font-bold"
      onClick={() => onClick && onClick(link)}
      className="font-medium text-sm text-gray-500 hover:text-white transition duration-300 ease-in-out hover:cursor-pointer"
    >
      <span className='text-[#C778DD]'>#</span>
      {name}
    </ScrollLink>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (link: string) => {
    const element = document.getElementById(link);
    if (element) {
      if (element)
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    } else {
      if (link === 'contact') {
        return window.location.href = '/home'
      }
      window.location.href = `/${link}`;
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="absolute lg:flex flex-col items-center ml-4 gap-3 hidden">
        <div className="w-[1px] h-[10rem] bg-gray-500"></div>
        <a href=""><Icon icon="uiw:github" style={{ fontSize: '30px' }} className='text-white hover:text-[#C778DD] transition duration-300 ease-in-out' /></a>
        <a href=""><Icon icon="uiw:linkedin" style={{ fontSize: '30px' }} className='text-white hover:text-[#C778DD] transition duration-300 ease-in-out' /></a>
      </div>
      <div className="fixed top-0 w-full bg-transparent z-50 shadow-md backdrop-blur-md">
        <div className="container mx-auto lg:px-20">
          <nav className="flex items-center justify-between p-6">
            <h1 className="text-xl text-white font-bold">Alexandre</h1>

            <div className="hidden sm:flex items-center space-x-8">
              {Items.map((item) => (
                <MenuItem
                  key={item.link}
                  name={item.name}
                  link={item.link}
                  active={item.active}
                  onClick={scrollTo}
                />
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
                <MenuItem
                  key={item.link}
                  name={item.name}
                  link={item.link}
                  active={item.active}
                  onClick={scrollTo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;