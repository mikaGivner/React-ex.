import styled from "styled-components";

import "./style.css";
import ToppinButton from "./ToppinButton";
export default function TurtleCard(props) {
  const CardClass = styled.div`
    width: 20rem;
    height: 30rem;
    background-color: lightblue;
    margin: 1rem;
    padding: 1rem;
  `;

  return (
    <CardClass>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.img} />
      <h2>Topping:</h2>
      <div>
        {props.toppingOptions.map((topping, i) => {
          return (
            <ToppinButton
              key={i}
              value={topping.name}
              onClick={props.onClick}
            ></ToppinButton>
          );
        })}
      </div>
    </CardClass>
  );
}
// export default CardClass;
// //export default pickToppings;
