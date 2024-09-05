import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/vite.svg';
// import Image from '@/assets/images/cover.png';
// import '../styles/Navbar.css';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let pageTitle = '';
    switch (currentPage) {
      case '/':
        pageTitle = 'Home';
        break;
    //   case '/About':
    //     pageTitle = 'About';
    //     break;
      case '/Services':
        pageTitle = 'Services';
        break;
      case '/Contact':
        pageTitle = 'Contact';
        break;
      default:
        pageTitle = "Jimbo's Towing"
        break;
    }
    document.title = `${pageTitle} | Jimbo's Towing`
  }, [currentPage]);

  const navbarImageClass = () => {
    if (isActive) {
      return 'navbar-background-image';
    }
    return currentPage === '/' ? 'navbar-background-image-large' : 'navbar-background-image';
  };

  const navbarClass = () => {
    if (isActive) {
      return "p-3 flex items-center justify-between flex-wrap navbar-transparent shadow-md";
    } else {
      return "p-3 flex items-center justify-between flex-wrap bg-white  shadow-md";
    }
  };

  const getLinkClass = (path) => {
    return currentPage === path ? 'block mt-4 md:inline-block md:mt-0 text-red-800 hover:text-red-300 mr-4 font-bold' : 'font-semibold block mt-4 md:inline-block md:mt-0 text-black hover:text-red-400 mr-4';
  };

  return (
    <div className='navbar-image-container'>
      <nav className={navbarClass()}>
        <div className="flex items-center flex-shrink-0 text-black">
          <img src={logo} alt="logo" className='lg:h-24 lg:w-52 w-28 h-12 mr-6'></img>
          <span className='md:block hidden font-bold lg:text-3xl md:text-2xl sm:text-xl text-base tracking-tight text-shadow lora' id="nav-name">Jimbo's Towing, LLC.</span>
        </div>
        <div className="block md:hidden mr-2">
          <button onClick={toggleMenu} className="flex flex-col justify-around items-center w-10 h-10 rounded mt-2 mb-2 bg-customWhite hover:bg-customGray p-2">
            <div className="w-3 h-0.5 bg-gray-500"></div>
            <div className="w-6 h-0.5 bg-gray-500"></div>
            <div className="w-3 h-0.5 bg-gray-500"></div>
          </button>
        </div>

        <div className={`w-full ${isActive ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`} id="navMenu">
          <div className="lg:text-lg md:text-base sm:text-sm md:flex-grow ml-1 lora400">
            <Link to="/" onClick={toggleMenu} className={getLinkClass('/')}>Home</Link>
            <Link to="/Services" onClick={toggleMenu} className={getLinkClass('/Inventory')}>Services</Link>
            <Link to="/Contact" onClick={toggleMenu} className={getLinkClass('/Contact')}>Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* <img src={Image} alt="banner-plane" className={`${navbarImageClass()} hidden-on-mobile`} /> */}
    </div>
  );
}

export default NavTabs;
