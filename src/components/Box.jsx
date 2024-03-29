import { useState } from "react";

const Box = ({ width, height }) => {
  const [color, setColor] = useState("blue");
  console.log(width, height);
  // 상태 관리 -> state가 바뀔 때마다 js가 호출(function 호출)
  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <div
        style={{
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
    </>
  );
};

// 이 jsx파일을 호출
// default : 1개만 내보내기 위함
export default Box;
// export default Box2;
