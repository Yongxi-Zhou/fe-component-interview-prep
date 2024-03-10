import "./styles.css";
import React, { useEffect, useState } from "react";

const url = `https://randomuser.me/api/portraits/women/`;
const arr = Array(5)
  .fill(url)
  .map((item, idx) => item + `${50 + idx}.jpg`);
console.log(arr);

const CarouselNew = ({ imgArr }) => {
  const [curIdx, setCurIdx] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      handleRight();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLeft = () => {
    setCurIdx((i) => (i === 0 ? (i - 1 + 5) % 5 : i - 1));
  };

  const handleRight = () => {
    setCurIdx((i) => {
      return i === 4 ? (i + 1) % 5 : i + 1;
    });
  };

  return (
    <>
      {imgArr
        .filter((item, idx) => idx === curIdx)
        .map((item, idx) => (
          <img key={`img_${idx}`} alt={"pic"} src={item} />
        ))}

      <div>
        <button onClick={handleLeft}>left</button>
        <button onClick={handleRight}>right</button>
      </div>
    </>
  );
};

export default CarouselNew;
