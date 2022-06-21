import "./styles.css";
import SessionViewer from "./components/SessionViewer";

export default function App() {
  return (
    <div className="App">
      <h1>Gym Sessions</h1>
      <SessionViewer
        activitiesUrl="/data/activities.json"
        facilitiesUrl="/data/facilities.json"
      ></SessionViewer>
    </div>
  );
}
