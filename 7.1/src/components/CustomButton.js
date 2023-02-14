export default function CustomButton(props) {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.color}
      </button>
    </div>
  );
}
