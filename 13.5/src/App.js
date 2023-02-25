import React, { useEffect, useRef } from "react";
function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form>
      <label> Full Name: </label>
      <input ref={inputRef} name="firstName" type="text" />
    </form>
  );
}

export default App;
