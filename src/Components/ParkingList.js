import { useQuery } from "@tanstack/react-query";
import { fetchParkingList } from "../Utils/fetchParkingData";
import { useNavigate } from "react-router-dom";
import Container from "../styles/Container";
import styled from "styled-components";

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Parking = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    color: ${(props) => props.theme.accentColor};
  }
  font-weight: 600;
  letter-spacing: -0.03em;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
  padding: 20px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.accentColor};
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
function ParkingList() {
  const navigate = useNavigate();

  const {
    data: parkingList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["parkingList"],
    queryFn: fetchParkingList,
  });

  return (
    <Container>
      <Header>
        <Title>광진구 주차장 정보</Title>
      </Header>

      {isLoading && <Loader>로딩 중...</Loader>}
      {isError && <p>데이터를 불러오는 데 실패했습니다.</p>}

      <ul>
        {parkingList?.map((item, idx) => (
          <Parking
            key={idx}
            onClick={() => navigate("/detail", { state: item })}>
            {item["주차장명"]}
          </Parking>
        ))}
      </ul>
    </Container>
  );
}

export default ParkingList;
