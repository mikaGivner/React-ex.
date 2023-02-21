import { useRef } from "react";
import styled from "styled-components";

function App() {
  const ImgRef = useRef(null);

  const blackWhite = () => {
    ImgRef.current.src =
      "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/back-to-childhood/coloring-all-princesses-disney.jpg";
  };
  const color = () => {
    ImgRef.current.src =
      "https://lh3.googleusercontent.com/g1fS0MoKpAvYzYEhFeTedrO7ovVFZ0NnP4XglwAJoXLfYGaPowBLQnirpuSdXYRCt4zRM06-VjL3aqO-p5XIpHSNzRI=w640-h400-e365-rj-sc0x00ffffff";
  };

  const ImgDiv = styled.img`
    width: 50rem;
    height: 50rem;
  `;
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background: linear-gradient(45deg, darkred, pink, lavender);
  `;

  return (
    <Wrapper>
      <ImgDiv
        onMouseOver={blackWhite}
        onMouseOut={color}
        ref={ImgRef}
        src="https://lh3.googleusercontent.com/g1fS0MoKpAvYzYEhFeTedrO7ovVFZ0NnP4XglwAJoXLfYGaPowBLQnirpuSdXYRCt4zRM06-VjL3aqO-p5XIpHSNzRI=w640-h400-e365-rj-sc0x00ffffff"
      />
    </Wrapper>
  );
}

export default App;
