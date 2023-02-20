import "./boxes.css";
import Box2 from "./box2";

function Box1(props) {
  return (
    <div className={"box"} style={props.style}>
      <Box2
        className={"box"}
        style={{
          backgroundColor: "lightblue",
          width: "40rem",
          height: "40rem",
        }}
      ></Box2>
    </div>
  );
}
export default Box1;
