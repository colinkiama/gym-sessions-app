import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Gym Sessions</h1>
      <h2>Pick a facility</h2>
      <div>
        <label>
          Search:<br></br>
          <input type="search"></input>
        </label>
        <ul>
          <li>
            <button>Ipswich</button>
          </li>
          <li>
            <button>Colchester</button>
          </li>
          <li>
            <button>Chelmsford</button>
          </li>
        </ul>
      </div>
      <h2>Activites in (Facility Name)</h2>
      <div>
        <label>
          Search:<br></br>
          <input type="search"></input>
        </label>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pilates</td>
              <td>9:00</td>
              <td>10:00</td>
            </tr>
            <tr>
              <td>HITT</td>
              <td>9:30</td>
              <td>10:30</td>
            </tr>
            <tr>
              <td>Yoga</td>
              <td>10:30</td>
              <td>10:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
