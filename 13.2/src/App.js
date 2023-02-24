import { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";
function App() {
  const Box = styled.div`
    background: purple;
  `;
  const [displayBox, setDisplayBox] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplayBox(true);
      setTimeout(() => {
        setDisplayBox(false);
      }, "4000");
    }, "1000");
  }, []);

  return (
    <div>
      {displayBox && <Box className="box box1"></Box>}
      {displayBox && <Box className="box box2"></Box>}
      {displayBox && <Box className="box box3"></Box>}
    </div>
  );
}

export default App;
