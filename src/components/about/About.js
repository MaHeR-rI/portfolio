import classes from "./About.module.css";
import profileImg from "../../assets/about.svg"
const About = () => {
  return (
    <div className={classes.about} id="About">
      <div className={classes.grid}>
        <div className={classes.content}>
          <h1>About me</h1>
          <p>
            Enthusiastic Developer eager to contribute to team success through
            hard work, attention to detail, and excellent organizational skills.
            <br />
            Motivated to learn, grow and excel in mastering new skills, with a
            proven ability to adapt in both self-starting and collaborative
            environments while staying focused on achieving high-quality results
            under strict deadlines.
            <br />
            Looking for a software developer job in React, where I can apply
            expertise in developing and designing front-end web architecture and
            gain more experinces.
          </p>
        </div>
        <div className={classes.image}>
            <img src={profileImg} alt="profile"/>
        </div>
      </div>
    </div>
  );
};
export default About;
