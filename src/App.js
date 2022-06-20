import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Gym Sessions</h1>
      <h2>Select a facility</h2>
      <label>
        Search:<br></br>
        <input type="search"></input>
      </label>
      <fieldset>
        <label>
          <input type="radio" name="facility" value="Ipswich"></input>
          Ipswich
        </label>
        <label>
          <input type="radio" name="facility" value="Colcester"></input>
          Colchester
        </label>
        <label>
          <input type="radio" name="facility" value="Chelmsford"></input>
          Chelmsford
        </label>
      </fieldset>
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
