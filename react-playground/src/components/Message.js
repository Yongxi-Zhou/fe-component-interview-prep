

import { useEffect, useState, useRef } from "react";


const Message = () => {
  const [data, setData] = useState({ username: "", password: "" });
    const [txt, setTxt] = useState("点击发送短信")
    const [time, setTime] = useState(30)
    const [disabled, setDisabled] = useState(false)
    const [val, setVal] = useState("")
    let interval = useRef(undefined)
    

    useEffect(() => {
        clearInterval(interval.current)
    }, [])

    useEffect(() => {
        console.log('effect', time);
        if (time > 0 && time < 30) {
            setTxt(`${time}后再点击`)
            
        } else {
            clearInterval(interval.current)
            interval.current = null
                setDisabled(false)
                setTime(30)
                setTxt(`点击发送短信`)
        }
    }, [time])

    console.log(time);
    const handleClick = () => {
        setDisabled(true)
        interval.current = setInterval(() => {
            if (time > 0) {
                setTime(t => t-1)
            } 
        }, 100)
    }
  return (
    <div>Message
        <input value={val} onChange={e => setVal(e.target.value)} />
        <button disabled={disabled} onClick={handleClick} >{txt}</button>
    </div>
  );
};

export default Message;
