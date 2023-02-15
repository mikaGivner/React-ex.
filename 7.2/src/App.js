import Checkbox from "./components/Checkbox";

const data = [
  ["I read the term of the app", false],
  ["I accept the term of the app", false],
  ["I want to get the weekly news letter", true],
  ["I want to get sales and offers", true],
];

function App() {
  return (
    <div>
      {data.map((x) => {
        return <Checkbox data={x[0]} checked={x[1]}></Checkbox>;
      })}
    </div>
  );
}

export default App;
