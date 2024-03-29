import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";

const DataModal = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    
    const fetchData = async () => {
    const result = await axios(
      "http://hn.algolia.com/api/v1/search?query=redux"
    );
    setData(result.data);
  }

  fetchData()
}, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default DataModal;
