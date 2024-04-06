import Sidebar from "../sudebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          safu mern
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/safumulatu1/" target="blank">
            <img src="/linkedln.png" alt="" />
          </a>
          <a href="https://github.com/safumulatu" target="blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://twitter.com/SafuM2721 " target="blank">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="https://www.facebook.com/safuu.maalanjiraa" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
