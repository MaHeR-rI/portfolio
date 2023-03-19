import classes from "./SideNav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import Dlogo from "../../assets/logo-dark.png"
import Llogo from "../../assets/logo-light.png";

const SideNav = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Llogo} alt="logo" />
      </div>
      <div className={classes.icon}>
      <FontAwesomeIcon icon={faBars} className="fa-lg"/>
      </div>
      {/* <div className={classes.links}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="">services</a>
        <a href="">projects</a>
        <a href="">contact</a>
      </div> */}
    </div>
  );
};
export default SideNav;
