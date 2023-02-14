import Balloon from "./Balloon";
export default function Child(props) {
  return (
    <div className="kid">
      <h3>{props.name}</h3>
      <Balloon color={props.color}></Balloon>
    </div>
  );
}
