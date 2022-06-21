import React from "react";

export default function Picker() {
  return (
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
  );
}
