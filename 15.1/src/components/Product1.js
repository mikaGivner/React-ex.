import { Link } from "react-router-dom";
import Data from "./Store";
import styled from "styled-components";
import Header from "./Header";
export default function Product1() {
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
    <div>
      <Header />
      <ProductsPageWrapper>
        <Card key={Data[0].id}>
          <h2>{Data[0].title}</h2>
          <Photo src={Data[0].imageUrl} alt="pic" />
          <p>price: {Data[0].price}</p>
          <p>size:{Data[0].size}</p>
        </Card>
        <Link className="link" to="/products">
          Back
        </Link>
      </ProductsPageWrapper>
    </div>
  );
}
