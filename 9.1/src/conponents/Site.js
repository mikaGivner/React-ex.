import { useState } from "react";
// import { Data } from "./Data";
import BirthList from "./BirthList";
export default function Site(props) {
  // function names(arr) {
  //   const namesArr = arr.map((user) => {
  //     return user.name;
  //   });
  //   return namesArr;
  // }

  // function getOlderPeople(data) {
  //   const birthdayArr = data.filter((user) => {
  //     const birthdayArray = user.birthday.split("-");
  //     return birthdayArray[birthdayArray.length - 1] > 1990;
  //     //  Number(user.birthday.slice(-4)) > 1990}
  //     // );
  //     return birthdayArr;
  //   });
  //   const [olderPeople, setOlderPeople] = useState(getOlderPeople(Data));
  return (
    // <BirthList
    //   name={olderPeople.name}
    //   birthday={olderPeople.birthday}
    //   favoriteFoods={olderPeople.favoriteFoods}
    // ></BirthList>
    <div>{props.data}</div>
  );
}
