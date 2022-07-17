

import { IoHome, IoPerson, IoBagHandle } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import "../styles/nav.css";


function Nav() {
  return (
    <div>
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
    </div>
  )
}

export default Nav