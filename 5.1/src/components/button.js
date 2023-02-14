import "./Button.css";
export default function Button(props) {
  return <input type="button" value={props.value} className={props.class} />;
}
