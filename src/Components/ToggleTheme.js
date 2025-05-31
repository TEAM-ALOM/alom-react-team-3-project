import { useRecoilState } from "recoil";
import { isDarkModeAtom } from "../recoil/themeAtom";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  background-color: ${(props) => props.theme.accentColor};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.theme.bgColor === "#2f3640" ? "#9c88ff" : "#6c5ce7"};
  }
`;

function ToggleTheme() {
  const [isDark, setIsDark] = useRecoilState(isDarkModeAtom);

  return (
    <Button onClick={() => setIsDark((prev) => !prev)}>
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </Button>
  );
}

export default ToggleTheme;
