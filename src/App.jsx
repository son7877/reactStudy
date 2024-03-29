import logo from "./logo.svg"; // 이미지 import
import "./App.css"; // css import
import { useState } from "react";
import Box from "./components/Box";
import Person from "./components/Person";
// html 태그를 리턴하는 파일을 jsx
// csr(client side render) ssr(server side render)
// 초기 속도 (사이트 접속했을때 csr이 ssr에 비해 압도적으로 느림)
// 그후 속도 (csr이 ssr보다 빨라짐)

function App() {
  console.log("App");
  const [age, setAge] = useState(20);
  const [width, setWidth] = useState("10px");
  const [height, setHeight] = useState("10px");
  return (
    <div className="App">
      <input onChange={(e) => setAge(e.target.value)} type="text" />
      <Person age={age} />
      <Person age={age} />
      <Person age={age} />
      <input
        type="range"
        min="10"
        max="500"
        onChange={(e) => setWidth(e.target.value.concat("px"))}
      />
      <input
        type="range"
        min="10"
        max="500"
        onChange={(e) => setHeight(e.target.value.concat("px"))}
      />
      <Box width={width} height={height} />
      <Box width={width} height={height} />

      <div style={{ display: "block" }}>
        <label htmlFor="select">선수 선택</label>
        <select
          style={{ display: "inline-block", width: "auto" }}
          name="player"
          id="1"
          multiple
          size="4"
        >
          <option value="1">aaaaaaaaaaa</option>
          <option value="2">bbbbbbbbbbb</option>
          <option value="3">ccccccccccc</option>
          <option value="4">ddddddddddd</option>
          <option value="5">eeeeeeeeee</option>
          <option value="1">aaaaaaaaaaa</option>
          <option value="2">bbbbbbbbbbb</option>
          <option value="3">ccccccccccc</option>
          <option value="4">ddddddddddd</option>
          <option value="5">eeeeeeeeee</option>
          <option value="6">ffffffffff</option>
        </select>
      </div>
    </div>
  );
}

export default App;
