export default function Checkbox(props) {
  return (
    <div>
      <input type="checkbox" checked={props.checked} />
      <label>{props.data}</label>
    </div>
  );
}
