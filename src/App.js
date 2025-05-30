import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParkingList from "./Components/ParkingList";
import ParkingDetail from "./Components/ParkingDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<ParkingList />}
        />
        <Route path="/detail" element={<ParkingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
