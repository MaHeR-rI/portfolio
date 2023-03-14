import classes from "./Cover.module.css";
const Arrows = () => {
  const items = new Array(100).fill(null);
  return (
    <ul>
      {items.map((item, index) => {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * 100);
        let duration = Math.random() * 100;
        let size = Math.random() * 2;
        let styles = {
          left: `${x}px`,
          top: `${y}%`,
          fontSize: `calc(${size}rem + 16px)`,
          animationDuration: `${duration}s`,
        };
        return (
          <li
            key={index}
            className={index % 2 === 0 ? classes.toRight : classes.toLeft}
            style={styles}
          >
            {index % 2 === 0 ? ">" : "<"}
          </li>
        );
      })}
    </ul>
  );
};
export default Arrows;

//     arrow.style.left=x+'px'
//     arrow.style.top=y+'px'
//     arrow.style.fontSize=size+'px'}
//   const showArrows=()=>{
//    let count = 10;
//    let cover=document.getElementById('parent')
//    for (let i = 0;i < count;i++) {
//         return(<li>t</li>)
//    }}
