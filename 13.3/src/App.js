import { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";
function App() {
  const [displayBox, setDisplayBox] = useState(false);
  const Box = styled.div`
    border-radius: ${displayBox ? "50%" : "0"};
  `;
  useEffect(() => {
    setTimeout(() => {
      setDisplayBox(true);
    }, "2500");
  }, []);

  return (
    <div>
      <Box className="box"></Box>
    </div>
  );
}

export default App;
