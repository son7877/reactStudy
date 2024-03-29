import "./App.css"; // css import
import { useState } from "react";
import Boxes from "./components/Boxes";
import Persons from "./components/Persons";
import Counter from "./components/Counter";

// html 태그를 리턴하는 파일을 jsx
// csr(client side render) ssr(server side render)
// 초기 속도 (사이트 접속했을때 csr이 ssr에 비해 압도적으로 느림)
// 그후 속도 (csr이 ssr보다 빨라짐)

function App() {
  console.log("App");

  return (
    <div className="App">
      {/* <Counter />
      <br /> */}
      {/* <Persons />
      <Boxes /> */}
    </div>
  );
}

export default App;
