import React from "react";
import Picker from "./Picker";
import Timetable from "./Timetable";

export default class SessionViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facilityData: {
        selectedItem: "",
        searchQuery: "",
        items: []
      },
      activitiesData: {
        searchQuery: "",
        items: []
      }
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <h2>Select a facility</h2>

        <Picker></Picker>

        <h2>Activites in (Facility Name)</h2>
        <Timetable></Timetable>
      </>
    );
  }
}
