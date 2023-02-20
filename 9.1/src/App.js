import Site from "./conponents/Site";
import Card from "./conponents/Card";
import Names from "./conponents/Names";
import { Data } from "./conponents/Data";
function App() {
  const arr = Data.filter((user) => user.birthday.slice(-4) < 1990);
  const arr2 = arr.map(
    (user) => user.favoriteFoods.meats && user.favoriteFoods.fish
  );

  return (
    <div>
      <h2>All The Names:</h2>
      {Data.map((obj, i) => {
        return <Names key={i} name={obj.name} />;
      })}
      <br></br>
      <h2>All The users Who Older Then 30:</h2>
      {arr.map((obj, i) => {
        return (
          <Card
            key={i}
            name={obj.name}
            birthday={obj.birthday}
            favoriteFoods={arr2[i]}
          />
        );
      })}
    </div>
  );
}

export default App;
