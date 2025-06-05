import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Container from "../styles/Container";
import { useEffect } from "react"; // ✅ useEffect 추가

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
  letter-spacing: -0.03em;
`;

const InfoCard = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
`;

const Label = styled.p`
  font-size: 18px;
  margin: 12px 0;
  word-break: keep-all;
  font-weight: 600;
  letter-spacing: -0.03em;

  a {
    color: ${(props) => props.theme.accentColor};
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const FixedButton = styled.button`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  padding: 14px 24px;
  border-radius: 16px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentColor + "CC"};
  }
`;

function ParkingDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // ✅ ESC 키 이벤트 핸들러
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [navigate]);

  if (!state) return <div>데이터가 없습니다.</div>;

  const {
    주차장명,
    평일운영시간,
    토요일운영시간,
    일요일운영시간,
    시간당주차요금,
    주차장위치,
    주차면수,
    주차장형태,
    비고,
  } = state;

  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
    주차장위치
  )}`;

  return (
    <Container>
      <Header>
        <Title>🅿️{주차장명}</Title>
      </Header>

      <InfoCard>
        <Label>
          🛣️ 주차장 형태:{" "}
          {주차장형태 === "노상"
            ? "노상(도로 위) 주차장"
            : "노외(도로 밖) 주차장"}
        </Label>
        <Label>
          🛣️ 주차장 유형:{" "}
          {비고 === "거주자" ? "거주자 우선 주차장" : "공영 주차장"}
        </Label>
        <Label>🕚 시간 당 주차요금: {시간당주차요금}</Label>
        <Label>🚗 주차 면수: {주차면수}</Label>
        <Label>📅 평일: {평일운영시간}</Label>
        <Label>📅 토요일: {토요일운영시간}</Label>
        <Label>📅 일요일: {일요일운영시간}</Label>
        <Label>
          📍{" "}
          <a href={naverMapUrl} target="_blank" rel="noopener noreferrer">
            {주차장위치}
          </a>
        </Label>
      </InfoCard>

      <FixedButton onClick={() => navigate("/")}>홈으로</FixedButton>
    </Container>
  );
}

export default ParkingDetail;
