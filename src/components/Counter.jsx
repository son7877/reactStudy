import { useState } from "react";

function Counter() {
  const [i, setI] = useState(0);
  const [input, setInput] = useState(0);
  const [logs, setLogs] = useState([]);

  const plus = () => {
    setI(i + input);
    setInput(Number(""));
    // 기존 로그에 새 로그 추가
    // map에 대한 고유한 키 권장
    setLogs([...logs, `${i} + ${Number(input)} = ${i + Number(input)}`]);
  };
  const minus = () => {
    setI(i - Number(input));
    setInput("");
    setLogs([...logs, `${i} - ${Number(input)} = ${i - Number(input)}`]);
  };
  const multiple = () => {
    setI(i * Number(input));
    setInput("");
    setLogs([...logs, `${i} * ${Number(input)} = ${i * Number(input)}`]);
  };
  const division = () => {
    setI(i / Number(input));
    setInput("");
    setLogs([...logs, `${i} / ${Number(input)} = ${i / Number(input)}`]);
  };

  return (
    <div>
      <h1>{i}</h1>
      <input
        placeholder="숫자를 입력해주세요"
        onChange={(e) => setInput(Number(e.target.value))}
        type="number"
      />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multiple}>*</button>
      {input != 0 && <button onClick={division}>/</button>}
      {logs.map((str, i) => {
        return <p key={i}>{str}</p>;
      })}
    </div>
  );
}
export default Counter;
