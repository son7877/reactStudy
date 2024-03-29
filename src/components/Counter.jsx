import { useState } from "react";

function Counter() {
  const [i, setI] = useState(0);
  const [input, setInput] = useState(0);
  const plus = () => {
    setI(i + Number(input));
    setInput("");
  };
  const minus = () => {
    setI(i - Number(input));
    setInput("");
  };
  const multiple = () => {
    setI(i * Number(input));
    setInput("");
  };
  const division = () => {
    setI(i / Number(input));
    setInput("");
  };

  return (
    <div>
      <h1>{i}</h1>
      <input
        placeholder="숫자를 입력해주세요"
        onChange={(e) => setInput(e.target.value)}
        type="number"
      />
      <button onClick={() => plus()}>+</button>
      <button onClick={() => minus()}>-</button>
      <button onClick={() => multiple()}>*</button>
      {input != 0 && <button onClick={() => division()}>/</button>}
    </div>
  );
}
export default Counter;
