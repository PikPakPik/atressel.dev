import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';
import '../../i18n'
import { useTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

type MenuItemProps = {
  name: string;
  link: string;
  active?: boolean | false;
  onClick?: (link: string) => void;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Items: MenuItemProps[] = [
    {
      name: t('home.menu.home'),
      link: "home",
      active: true,
    },
    {
      name: t('home.menu.about'),
      link: "about",
    },
    {
      name: t('home.menu.projects'),
      link: "projects",
    },
    {
      name: t('home.menu.contact'),
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
        activeClass="dark:text-white text-slate-950 font-bold"
        onClick={() => onClick && onClick(link)}
        className="font-medium text-sm text-gray-500 dark:hover:text-white hover:text-slate-950 transition duration-300 ease-in-out hover:cursor-pointer"
      >
        <span className='text-[#C778DD]'>#</span>
        {name}
      </ScrollLink>
    );
  }

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
        return navigate('/home');
      }
      navigate('/' + link);
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="absolute lg:flex flex-col items-center ml-4 gap-3 hidden">
        <Slide direction="down">
          <div className="w-[1px] h-[10rem] bg-gray-500"></div>
        </Slide>
        <Slide direction="left" delay={100}>
          <a href="https://github.com/PikPakPik"><Icon icon="uiw:github" style={{ fontSize: '30px' }} className='dark:text-white text-[#282C33] hover:text-[#C778DD] transition duration-300 ease-in-out' /></a>
          <a href="https://linkedin.com/in/alexandre-t"><Icon icon="uiw:linkedin" style={{ fontSize: '30px' }} className='dark:text-white text-[#282C33] hover:text-[#C778DD] transition duration-300 ease-in-out' /></a>
        </Slide>  
      </div>
      <div className="fixed top-0 w-full bg-transparent z-50 shadow-md backdrop-blur-md">
        <div className="container mx-auto lg:px-20">
          <nav className="flex items-center justify-between p-6">
            <h1 className="text-xl dark:text-white text-[#282C33] font-bold">Alexandre</h1>

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