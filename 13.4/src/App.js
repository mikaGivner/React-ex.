import { timeout } from "q";
import { useState, useEffect } from "react";
function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(false);
    }, "5000");
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div>
      {isDisplay && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default App;
