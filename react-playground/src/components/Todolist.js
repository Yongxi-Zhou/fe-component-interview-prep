

import { useState } from "react";

const Todolist = () => {
  const [data, setData] = useState([1,2,3]);
    const [val, setVal] = useState("")
    const handleDelete = (idx) => {
        const newData = [...data]
        newData.splice(idx, 1)
        setData(newData)
    }
  return (
    <ul>
        Todo list
        <input value={val} onChange={(e) => setVal(e.target.value)} />
        <button onClick={() => {
            setData(old => {
                return [...old, val]
            })
            setVal("")
        }}>add todo</button>
        {data.map((item, idx) => (
            <li style={{display: 'flex'}}>
                <div >{item}</div>
                <button onClick={() => handleDelete(idx)}>delete</button>
            </li>
        ))}
    </ul>
  );
};

export default Todolist;
