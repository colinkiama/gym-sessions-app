import React from "react";

export default class Picker extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
