import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ParkingList from "./Components/ParkingList";
import ParkingDetail from "./Components/ParkingDetail";
import ParkingList from "./components/ParkingList";
import { useRecoilValue } from "recoil";
import { isDarkModeAtom } from "./recoil/themeAtom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/style";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const isDark = useRecoilValue(isDarkModeAtom);
  return (
<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
  <Router>
    <ToggleTheme />
    <Routes>
      <Route path="/" element={<ParkingList />} />
      <Route path="/detail" element={<ParkingDetail />} />
    </Routes>
  </Router>
</ThemeProvider>

  );
}

export default App;
