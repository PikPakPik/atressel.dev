import { useState } from 'react';

type MenuItemProps = {
  name: string;
  link: string;
  active: boolean; // Remove the optional flag since we want to control the active state.
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
    active: false, // Set active to false for other menu items.
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
  const [activeItem, setActiveItem] = useState(Items.find((item) => item.active) || null);

  const handleItemClick = (link: string) => {
    const selectedItem = Items.find((item) => item.link === link);
    if (selectedItem) {
      setActiveItem(selectedItem);
    }
    setIsOpen(false);
  };

  return (
    <div className='container mx-auto lg:px-20'>
      <nav className="flex items-center justify-between p-6">
        <h1 className="text-xl text-white font-bold">Alexandre</h1>

        <div className="hidden sm:flex items-center space-x-8">
          {Items.map((item) => (
            <MenuItem
              key={item.link} 
              name={item.name}
              link={item.link}
              active={item === activeItem}
              onClick={handleItemClick} 
            />
          ))}
        </div>

        <button
          className="sm:hidden text-[#C778DD]"
          onClick={() => setIsOpen(!isOpen)}
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
              active={item === activeItem} 
              onClick={handleItemClick}
            />
          ))}
        </div>
      )}
    </div>

  );
};

export default Header;
