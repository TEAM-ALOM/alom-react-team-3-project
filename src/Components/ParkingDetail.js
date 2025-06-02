import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Container from "../styles/Container";

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.accentColor};
`;

const InfoCard = styled.div`
  background-color: white;
  color: black;
  padding: 24px;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const FixedButton = styled.button`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  padding: 12px 20px;
  border-radius: 16px;
  font-weight: bold;
  border: none;
  z-index: 100;

  &:hover {
    opacity: 0.9;
  }
`;

function ParkingDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <div>데이터가 없습니다.</div>;

  const {
    주차장명,
    평일운영시간,
    토요일운영시간,
    일요일운영시간,
  } = state;

  return (
    <Container>
      <Header>
        <Title>🅿️{주차장명}</Title>
      </Header>

      <InfoCard>
        <Label>📅 평일: {평일운영시간}</Label>
        <Label>📅 토요일: {토요일운영시간}</Label>
        <Label>📅 일요일: {일요일운영시간}</Label>
      </InfoCard>

      <FixedButton onClick={() => navigate("/")}>홈으로</FixedButton>
    </Container>
  );
}

export default ParkingDetail;
