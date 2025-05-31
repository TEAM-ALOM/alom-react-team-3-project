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
  background-color: white;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  transition: color 0.2s ease-in;
  cursor: pointer;
  color: ${(props) =>
    props.theme.bgColor === "#2f3640" ? "black" : "inherit"};

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
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
