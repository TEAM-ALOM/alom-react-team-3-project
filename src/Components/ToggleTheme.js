import { useRecoilState } from "recoil";
import { isDarkModeAtom } from "../recoil/themeAtom";

function ToggleTheme() {
  const [isDark, setIsDark] = useRecoilState(isDarkModeAtom);
  return (
    <button onClick={() => setIsDark((prev) => !prev)}>
      {isDark ? "라이트모드" : "다크모드"}
    </button>
  );
}

export default ToggleTheme;
