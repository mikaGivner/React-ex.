import { Link } from "react-router-dom";
import Data from "./Store";
import styled from "styled-components";
export default function Product2() {
  const Card = styled.div`
    width: 20rem;
    height: 20rem;
    background: lavender;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  `;
  const Photo = styled.img`
    width: 20rem;
    height: 10rem;
  `;
  const ProductsPageWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <ProductsPageWrapper>
      <Card key={Data[1].id}>
        <h2>{Data[1].title}</h2>
        <Photo src={Data[1].imageUrl} alt="pic" />
        <p>price: {Data[1].price}</p>
        <p>size:{Data[1].size}</p>
      </Card>
      <Link className="link" to="/products">
        Back
      </Link>
    </ProductsPageWrapper>
  );
}
