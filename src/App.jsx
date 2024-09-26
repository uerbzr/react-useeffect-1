import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://api.spacexdata.com/v3/capsules";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>SpaceX Capsules</h1>
      <table>
        <thead>
          <tr>
            <td>Serial</td>
            <td>Landings</td>
            <td>Details</td>
            <td>Mission Count</td>
          </tr>
        </thead>
        <tbody>
          {data.map((capsule, index) => (
            <tr key={index}>
              <td>{capsule.capsule_serial}</td>
              <td>{capsule.landings}</td>
              <td>{capsule.details}</td>
              <td>{capsule.missions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
