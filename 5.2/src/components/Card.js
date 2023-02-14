import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img}></img>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="links">
          <a href="#">{props.link1}</a>
          <a href="#">{props.link2}</a>
        </div>
      </div>
    </div>
  );
}
