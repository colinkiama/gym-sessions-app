import React from "react";
import Picker from "./Picker";
import Timetable from "./Timetable";

export default class SessionViewer extends React.Component {
  constructor(props) {
    super(props);

    this.payloads = {};

    this.state = {
      facilitiesData: {
        selectedId: -1,
        searchQuery: "",
        items: []
      },
      activitiesData: {
        searchQuery: "",
        items: []
      }
    };
  }

  async componentDidMount() {
    let activitiesFetchResponse = await fetch(this.props.activitiesUrl);
    this.payloads = {
      ...this.payloads,
      activities: await activitiesFetchResponse.json()
    };

    let facilitiesFetchResponse = await fetch(this.props.facilitiesUrl);
    this.payloads = {
      ...this.payloads,
      facilities: await facilitiesFetchResponse.json()
    };

    this.setState({
      activitiesData: {
        ...this.state.activitiesData,
        items: this.payloads.activities.data
      },
      facilitiesData: {
        ...this.state.facilitiesData,
        items: this.payloads.facilities.data
      }
    });
  }

  render() {
    return (
      <>
        <h2>Select a facility</h2>

        <Picker
          selectedId={this.state.facilitiesData.selectedId}
          items={this.state.facilitiesData.items}
        ></Picker>

        <h2>Activites in (Facility Name)</h2>
        <Timetable></Timetable>
      </>
    );
  }
}
