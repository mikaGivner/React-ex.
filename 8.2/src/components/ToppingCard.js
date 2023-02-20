import styled from "styled-components";

export default function ToppingCard(props) {
  const ToppingCardClass = styled.div`
    width: 20rem;
    height: 30rem;
    background: darkblue;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  `;
  return (
    <ToppingCardClass>
      <h1>{props.title}</h1>
      <img src={props.img} alt="img" />
    </ToppingCardClass>
  );
}
