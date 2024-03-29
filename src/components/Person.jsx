import { useState } from "react";
// useState [변수, set함수] = useState(초기값);
//입력으로 텍스트 변경하기
function Person({ age }) {
  const [name, setName] = useState("안홍범");
  console.log("Person");
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </>
  );
}
export default Person;
