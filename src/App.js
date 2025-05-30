import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { isDarkModeAtom } from "./recoil/themeAtom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/style";
import ToggleTheme from "./components/ToggleTheme";
import GlobalStyle from "./styles/GlobalStyle";
import ParkingList from "./components/ParkingList";
import ParkingDetail from "./components/ParkingDetail";

function App() {
  const isDark = useRecoilValue(isDarkModeAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <ToggleTheme />
        <Routes>
          <Route
            path='/'
            element={<ParkingList />}
          />
          <Route
            path='/detail'
            element={<ParkingDetail />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
