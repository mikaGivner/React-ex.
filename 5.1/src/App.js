import Button from "./components/button";
function App() {
  let data = [
    { value: "Important", class: "bold" },
    { value: "Not Important", class: "no-bold" },
  ];

  return (
    <div>
      <Button value={data[0].value} class={data[0].class}></Button>
      <Button value={data[1].value}></Button>
    </div>
  );
}

export default App;
