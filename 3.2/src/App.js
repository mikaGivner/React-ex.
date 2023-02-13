function App() {
  //task1
  const data = ["hello", "world"];
  let str = "";
  data.forEach((word) => {
    str += word + " ";
  });

  //task2
  const number1 = 5;
  const number2 = 6;
  //task3
  const string = "I love React!";
  return (
    <div>
      <h2>task 1:{str}</h2>
      <p>
        task 2: {number1} + {number2} = {number1 + number2}
      </p>
      <p>task3: The string’s length is {string.length}</p>
    </div>
  );
}

export default App;
