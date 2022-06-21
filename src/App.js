import "./styles.css";
import Picker from "./components/Picker";
import Timetable from "./components/Timetable";

export default function App() {
  return (
    <div className="App">
      <h1>Gym Sessions</h1>
      <h2>Select a facility</h2>
      <Picker></Picker>

      <h2>Activites in (Facility Name)</h2>
      <Timetable></Timetable>
    </div>
  );
}
