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

  facilitySelected = (id) => {
    this.setState(
      (state) => {
        return {
          facilitiesData: {
            ...state.facilitiesData,
            selectedId: id
          }
        };
      },
      () => console.log("New state aftter facilitiy selection:", this.state)
    );

    this.updateTimetableData();
  };

  updateTimetableData = () => {
    this.setState((state) => {
      return {
        activitiesData: {
          ...state.activitiesData,
          items: this.payloads.activities.data.filter(
            (item) => item.facility_id === state.facilitiesData.selectedId
          )
        }
      };
    });
  };

  async componentDidMount() {
    let activitiesFetchResponse = await fetch(this.props.activitiesUrl);
    let facilitiesFetchResponse = await fetch(this.props.facilitiesUrl);
    this.payloads = {
      ...this.payloads,
      facilities: await facilitiesFetchResponse.json()
    };

    this.payloads = {
      ...this.payloads,
      activities: await activitiesFetchResponse.json()
    };

    this.setState(
      (state) => {
        return {
          activitiesData: {
            ...state.activitiesData,
            items: this.payloads.activities.data
          },
          facilitiesData: {
            ...state.facilitiesData,
            items: this.payloads.facilities.data
          }
        };
      },
      () => console.log("State update on mount:", this.state)
    );
  }

  render() {
    return (
      <>
        <h2>Select a facility</h2>

        <Picker
          selectedId={this.state.facilitiesData.selectedId}
          items={this.state.facilitiesData.items}
          onPick={this.facilitySelected}
        ></Picker>

        <h2>Activites in (Facility Name)</h2>
        <Timetable items={this.state.activitiesData.items}></Timetable>
      </>
    );
  }
}
