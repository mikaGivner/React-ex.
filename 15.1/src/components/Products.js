import { Link } from "react-router-dom";
import "./style.css";
import Data from "./Store";
import styled from "styled-components";

export default function Products() {
  const Card = styled.div`
    width: 20rem;
    height: 20rem;
    background: lavender;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  `;
  const ProductsWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const ProductsPageWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Photo = styled.img`
    width: 20rem;
    height: 10rem;
  `;
  const ProductTitle = styled.div`
    font-weight: bold;
    font-size: 2rem;
    margin: 1rem;
  `;

  return (
    <div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>{" "}
        </li>
        <li style={{ color: "red" }}>Products</li>
      </ul>
      <ProductsPageWrapper>
        <h1>our Products</h1>
        <ProductsWrapper>
          {Data.map((product) => {
            return (
              <ProductTitle key={product.id}>
                <Link className="link product" to={`/product${product.id}`}>
                  {product.title}
                </Link>
              </ProductTitle>
            );
          })}
        </ProductsWrapper>
      </ProductsPageWrapper>
    </div>
  );
}
