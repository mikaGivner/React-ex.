import { useRef } from "react";
import styled from "styled-components";

function App() {
  const ButtonsMenu = styled.div`
    width: 50rem;
    display: flex;
    justify-content: center;
  `;
  const Button = styled.button`
    width: 10rem;
    height: 2rem;
    margin: 1rem;
    cursor: pointer;
    background: linear-gradient(125deg, darkred, darkgray);
    color: #fff;
    &:hover {
      opacity: 0.7;
    }
  `;
  const vidRef = useRef(null);

  const playVideo = () => {
    vidRef.current.play();
  };
  const pauseVideo = () => {
    vidRef.current.pause();
  };
  const playAgainVideo = () => {
    vidRef.current.load();
    vidRef.current.play();
  };
  return (
    <div className="wrapper">
      <video
        className="videoDiv"
        ref={vidRef}
        src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4"
      />

      <ButtonsMenu>
        <Button onClick={playVideo}>PLAY</Button>
        <Button onClick={pauseVideo}>PAUSE</Button>
        <Button onClick={playAgainVideo}>PLAY AGAIN</Button>
      </ButtonsMenu>
    </div>
  );
}

export default App;
