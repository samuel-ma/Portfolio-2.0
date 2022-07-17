
import { BsTwitter, BsInstagram, BsBehance, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import "../styles/footer.css";

function Footer() {

  return (
    <div className="footer">
      
      <div className="arrow-icon">
        <MdKeyboardArrowUp />
      </div>

      <div className="arrow-div"></div>

      <div className="footer-icons">
        <div className="f-icons">
          <BsTwitter />
        </div>

        <div className="f-icons">
          <FaFacebookF />
        </div>

        <div className="f-icons">
          <BsInstagram />
        </div>

        <div className="f-icons">
          <BsBehance />
        </div>

        <div className="f-icons">
          <BsGithub />
        </div>

      </div>

      <div className="footer-desc">
        <p>Copyright © 2022. Designed by Samuel Ma</p>
        <p>Built with love in Cairo</p>
        <p>All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer;