import "./styles.css";
import React, { useState } from "react";

const menus = [
  { header: "header111", body: "body111" },
  { header: "header222", body: "body222" },
  { header: "header333", body: "body333" },
];
const Accordion = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(new Array(3).fill(false));
  const handleOpen = (idx) => {
    setIsOpen((flag) => {
      // let newFlag = [...flag]
      // newFlag[idx] = !newFlag[idx]
      // return newFlag

      // clear all of them
      let newFlag = new Array(menus.length).fill(false);
      newFlag[idx] = !flag[idx];
      return newFlag;
    });
  };
  console.log(menus);

  return (
    <>
      {menus.map((item, idx) => (
        <div>
          <button className="accordion__header" onClick={() => handleOpen(idx)}>
            {item.header}
          </button>
          {isOpen[idx] && <div className="accordion__body">{item.body}</div>}
        </div>
      ))}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Accordion menus={menus} />
      <h1>end</h1>
    </div>
  );
}
