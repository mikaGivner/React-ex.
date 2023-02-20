import styled from "styled-components";

export default function ToppinButton(props) {
  const Button = styled.button`
    min-width: 5rem;
    height: 1.5rem;
    margin: 0.5rem;
    background-color: darkblue;
    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      color: red;
    }
  `;
  return (
    <Button
      onClick={(e) => {
        props.onClick(e);
      }}
    >
      {" "}
      {props.value}{" "}
    </Button>
  );
}
