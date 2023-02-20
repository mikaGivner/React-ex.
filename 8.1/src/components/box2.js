import Box3 from "./box3";
export default function Box2(props) {
  return (
    <div className="box" style={props.style}>
      <Box3
        className={"box"}
        style={{ backgroundColor: "pink", width: "30rem", height: "30rem" }}
      ></Box3>
    </div>
  );
}
//export default Box2;
