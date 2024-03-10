import { useState } from "react";

const TabBar = ({ data }) => {
  const [curIdx, setCurIdx] = useState(0);

  return (
    <>
      <div>labels</div>
      {data.map((item, idx) => (
        <button onClick={() => setCurIdx(idx)}>{item.label}</button>
      ))}
      {/* <div>items</div> */}
      {data
        .filter((item, idx) => idx === curIdx)
        .map((item, idx) => (
          <div>{item.item}</div>
        ))}
    </>
  );
};

export default TabBar;
