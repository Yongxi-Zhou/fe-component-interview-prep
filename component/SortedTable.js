import "./styles.css";
import { useState } from "react";

const Table = ({ inputData }) => {
  const [data, setData] = useState([...inputData]);
  const [flag, setFlag] = useState(true);
  console.log(Object.keys(data[0]));

  const handleSort = (key) => {
    console.log(123);

    const newData = [...data];
    if (flag) {
      newData.sort((a, b) => a[key].localeCompare(b[key]));
    } else {
      console.log("reverse");
      newData.sort((a, b) => b[key].localeCompare(a[key]));
    }
    console.log(flag);
    console.log(newData);
    setFlag((f) => !f);
    setData((old) => {
      return [...newData];
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((item, idx) => (
              <th>
                {item}
                <button onClick={() => handleSort(item)}>sort</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr keys={`tr-${idx}`}>
              <td>{item.Name}</td>
              <td>{item.City}</td>
              <td>{item.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const data = [
  { Name: "Alfreds Futterkiste", City: "Berlin", Country: "Germany" },
  {
    Name: "Ana Trujillo Emparedados y helados",
    City: "México D.F.",
    Country: "Mexico",
  },
  { Name: "Antonio Moreno Taquería", City: "México D.F.", Country: "Mexico" },
  { Name: "Around the Horn", City: "London", Country: "UK" },
  { Name: "B's Beverages", City: "London", Country: "UK" },
  { Name: "Berglunds snabbköp", City: "Luleå", Country: "Sweden" },
  { Name: "Blauer See Delikatessen", City: "Mannheim", Country: "Germany" },
  { Name: "Blondel père et fils", City: "Strasbourg", Country: "France" },
  { Name: "Bólido Comidas preparadas", City: "Madrid", Country: "Spain" },
  { Name: "Bon app'", City: "Marseille", Country: "France" },
  { Name: "Bottom-Dollar Marketse", City: "Tsawassen", Country: "Canada" },
  {
    Name: "Cactus Comidas para llevar",
    City: "Buenos Aires",
    Country: "Argentina",
  },
  {
    Name: "Centro comercial Moctezuma",
    City: "México D.F.",
    Country: "Mexico",
  },
  { Name: "Chop-suey Chinese", City: "Bern", Country: "Switzerland" },
  { Name: "Comércio Mineiro", City: "São Paulo", Country: "Brazil" },
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table inputData={data} />
    </div>
  );
}
