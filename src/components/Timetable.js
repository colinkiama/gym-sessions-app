import React from "react";

export default function Timetable(props) {
  console.log(props.items);

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
          {props.items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.start_time}</td>
                <td>{item.end_time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
