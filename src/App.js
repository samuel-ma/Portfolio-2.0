
import './App.css';
import { IoHome, IoPerson, IoBagHandle } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { RiShareForwardFill } from "react-icons/ri";
import { FaHandSparkles, FaGithubAlt } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";

function App() {
  return (
    <div className="App">

      <div className='connections'>
        <div className='conicons'>
          <FaHandSparkles className='iconicons-1' />
        </div>
        <div className='conicons-1'>
          <BsTwitter className='iconicons-2' />
        </div>
        
        <div className='conicons-3'>
          <FaGithubAlt className='iconicons-3' />
        </div>

        <div className='conicons-2'>
          <RiShareForwardFill className='iconicons' />
        </div>
      </div>

      <div className='navigation'>
        <div className='logo-div'>
            <p className='logo'>S</p>
        </div>

        <div className="icon-div">
            <IoHome className='icons' />
        </div>
        <div className="icon-div">
            <IoPerson className='icons' />
        </div>
        <div className="icon-div">
            <CgFileDocument className='icons' />
        </div>
        <div className="icon-div">
            <IoBagHandle className='icons' />
        </div>
        <div className="icon-div">
            <FaBlog className='icons' />
        </div>
        <div className="icon-div-last">
            <HiOutlinePhoneOutgoing className='icons' />
        </div>
        
      </div>

      <div className='container'>
          <Home />
          <About />
          <Resume />
          <Work />
          <Blog />
          <Contact />
      </div>
      
    </div>
  );
}

export default App;
