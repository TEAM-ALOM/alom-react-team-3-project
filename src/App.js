import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParkingList from "./Components/ParkingList";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<ParkingList />}
        />
      </Routes>
    </Router>
  );
}

export default App;
