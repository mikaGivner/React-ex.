import React, { useState } from "react";
import TurtleCard from "./components/TurtleCard";
import styled from "styled-components";
import data from "./components/data";
// import pickToppings from "./components/ToppingCard";
import ToppingCard from "./components/ToppingCard";

function App() {
  const Wrapper = styled.div`
    width: 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Cards = styled.div`
    display: flex;
  `;

  const ToppingCards = styled.div`
    display: flex;
  `;

  const [pickToppings, SetPickToppings] = useState([]);
  const [imgToppings, SetImgToppings] = useState([]);
  const [error, SetError] = useState("");

  return (
    <Wrapper>
      <h1> Order With Ninja Turtles</h1>
      <Cards>
        {data.map((turtle, index) => {
          return (
            <TurtleCard
              key={index}
              name={turtle.name}
              img={turtle.img}
              toppingOptions={turtle.pizzaToppings}
              // onClick={showTop}
              onClick={(e) => {
                SetError("");
                if (pickToppings.length < 5) {
                  if (!pickToppings.includes(e.target.innerText)) {
                    SetPickToppings([...pickToppings, e.target.innerText]);

                    {
                      turtle.pizzaToppings.map((top) => {
                        if (top.name === e.target.innerText) {
                          return SetImgToppings([...imgToppings, top.img]);
                        }
                      });
                    }
                  } else {
                    SetError("you have alredt picked this topping");
                  }
                } else {
                  SetError("you have alredy picked 5 toppings");
                }
                console.log(pickToppings);
              }}
            />
          );
        })}
      </Cards>
      <h2>our oreder:</h2>
      {error}
      <ToppingCards>
        {pickToppings.map((x, i) => {
          return <ToppingCard title={x} img={imgToppings[i]} />;
        })}
      </ToppingCards>
    </Wrapper>
  );
}

export default App;
