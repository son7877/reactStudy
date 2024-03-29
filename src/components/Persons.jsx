import { useState } from "react";
import Person from "./Person";
function Persons() {
  const [age, setAge] = useState(20);
  return (
    <>
      <input onChange={(e) => setAge(e.target.value)} type="text" />
      <Person age={age} />
    </>
  );
}
export default Persons;
