export default function Card({ name, birthday, favoriteFoods }) {
  return (
    <div>
      <h3>
        name: {name} <br></br>
        birthday: {birthday} <br></br>
        favoriteFoods: {favoriteFoods}
      </h3>
    </div>
  );
}
