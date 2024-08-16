import { useState, useEffect } from 'react';  
import PropTypes from 'prop-types';  

const Navbar = ({ handleSmoothScroll, refs }) => {  
  const [showHeader, setShowHeader] = useState(true);  

  const handleScroll = () => {  
    if (window.scrollY > 100) {  
      setShowHeader(false);  
    } else {  
      setShowHeader(true);  
    }  
  };  

  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []);  

  const navItems = [  
    { label: "OVERVIEW", ref: refs.overviewRef },  
    { label: "AUTHENTICATION", ref: refs.authenticationRef },  
    { label: "ENDPOINTS", ref: refs.endpointsRef },  
    { label: "TUTORIAL", ref: refs.tutorialRef },  
    { label: "CODE EXAMPLES", ref: refs.codeExamplesRef },  
    { label: "PRICING", ref: refs.pricingRef }  
  ];  

  return (  
    <>  
      {showHeader && (  
        <div className="bg-indigo-500 text-white py-4 text-center">  
          <h1 className="text-4xl pt-9 pb-9 font-bold">Book Generator API</h1>  
        </div>  
      )}  
      <nav className="sticky top-0 left-0 right-0 z-50 py-4 lg:pt-6 lg:pb-6 bg-gray-800 shadow-lg">  
        <div className="flex flex-col lg:flex-row lg:justify-center items-center">  
          <ul className="flex flex-col lg:flex-row lg:space-x-12">  
            {navItems.map((item, index) => (  
              <li key={index} className="py-2 lg:py-0">  
                <button   
                  onClick={() => handleSmoothScroll(item.ref)}   
                  className="text-slate-300 text-base hover:text-sky-500 focus:outline-none"  
                >  
                  {item.label}  
                </button>  
              </li>  
            ))}  
          </ul>  
        </div>   
      </nav>  
    </>  
  );  
};  

// PropTypes definition  
Navbar.propTypes = {  
  handleSmoothScroll: PropTypes.func.isRequired, 
  refs: PropTypes.object.isRequired             
};  

export default Navbar;