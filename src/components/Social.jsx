

import "../styles/social.css";
import { RiShareForwardFill } from "react-icons/ri";
import { FaHandSparkles, FaGithubAlt } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Social() {
  return (
    <div>
      <div className="line"></div>
      
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
    </div>
  )
}

export default Social