import { useRef, useState } from "react";  
import { FaSun, FaMoon } from 'react-icons/fa'; 
import Authentication from "./components/Authentication";  
import CodeExamples from "./components/CodeExamples";  
import Endpoints from "./components/Endpoints";  
import Navbar from "./components/Navbar";  
import Overview from "./components/Overview";  
import Pricing from "./components/Pricing";  
import Tutorial from "./components/Tutorial";  

const App = () => {  
  const overviewRef = useRef(null);  
  const authenticationRef = useRef(null);  
  const endpointsRef = useRef(null);  
  const tutorialRef = useRef(null);  
  const codeExamplesRef = useRef(null);  
  const pricingRef = useRef(null);  

  const [isDarkTheme, setIsDarkTheme] = useState(true); // State for theme  

  const handleSmoothScroll = (ref) => {  
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });  
  };  

  const toggleTheme = () => {  
    setIsDarkTheme(prevTheme => !prevTheme); // Toggle theme state  
  };  

  return (  
    <div className={`bg-slate-900 pb-8 ${isDarkTheme ? 'dark' : 'light'}`}>  
      <Navbar handleSmoothScroll={handleSmoothScroll} refs={{  
        overviewRef,  
        authenticationRef,  
        endpointsRef,  
        tutorialRef,  
        codeExamplesRef,  
        pricingRef  
      }} />  
      <div className="max-w-7xl mx-auto pt-20 px-6">  
        <div ref={overviewRef}><Overview /></div>  
        <div ref={authenticationRef}><Authentication /></div>  
        <div ref={endpointsRef}><Endpoints /></div>  
        <div ref={tutorialRef}><Tutorial /></div>  
        <div ref={codeExamplesRef}><CodeExamples /></div>  
        <div ref={pricingRef}><Pricing /></div>  
      </div>  
      <button   
        onClick={toggleTheme}   
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded"  
      >  
        {isDarkTheme ? <FaSun /> : <FaMoon />}  
      </button>  
    </div>  
  );  
};  

export default App;