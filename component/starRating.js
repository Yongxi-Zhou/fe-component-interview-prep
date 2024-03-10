import { useState } from "react";
import "./styles.css";

const Star = ({ isShow, starId }) => {
  return <span rating={starId}>{isShow ? "\u2605" : "\u2606"}</span>;
};

const Stars = () => {
  const [rating, setRating] = useState(1);
  const [selection, setSelection] = useState(1);

  const handleMouse = (e) => {
    let val = 0;
    if (e?.target?.getAttribute("rating")) {
      val = e?.target?.getAttribute("rating");
    }
    setSelection(val);
  };
  return (
    <>
      <div
        className="star_parent"
        onMouseOver={(e) => handleMouse(e)}
        onMouseOut={() => handleMouse(null)}
        onClick={(e) => {
          let curRating = e.target.getAttribute("rating");
          console.log(e?.target);
          console.log(curRating, "123");

          setRating(curRating || rating);
        }}
      >
        {Array(5)
          .fill(null)
          .map((item, idx) => (
            <Star
              isShow={idx + 1 <= parseInt(selection) || idx + 1 <= rating}
              starId={idx + 1}
            />
          ))}
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Stars />
    </div>
  );
}
