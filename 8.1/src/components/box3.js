import Box4 from "./box4";
export default function Box3(props) {
  return (
    <div className="box box-dir" style={props.style}>
      <Box4 color="orange"></Box4>
      <Box4 color="yellow"></Box4>
    </div>
  );
}
