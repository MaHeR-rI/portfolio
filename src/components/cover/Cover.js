import Arrows from "./Arrows";
import classes from "./Cover.module.css";
const Cover = () => {
  function handleImageMouseOver() {
    window.getSelection().removeAllRanges();
  }
  return (
    <div className={classes.cover} id="cover"onMouseOver={handleImageMouseOver}>
      <Arrows />
      <div className={classes.profile}>
        <div className={classes.image}>
          <img 
            src="https://scontent.fkye4-1.fna.fbcdn.net/v/t1.6435-9/204908295_974729946662104_1611935914641369766_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=TEEYLmP1ZiMAX_srz1H&_nc_ht=scontent.fkye4-1.fna&oh=00_AfAOa1K67EYsI3vWY-v_WcM4Uc-pp1l6qNUpChkC6dCvow&oe=641B6053"
            alt="maher"
          />
        </div>
      </div>
      <div className={classes.intro}>
        <div className={classes.content}>
          <h1>Maher Al Rifai</h1>
          <p>Front-end web developer, designer and overall good human. I enjoy working with people who care on projects that make me think.</p>
        <a href="#projects">view my projects</a>
        </div>
        </div>
    </div>
  );
};
export default Cover;
