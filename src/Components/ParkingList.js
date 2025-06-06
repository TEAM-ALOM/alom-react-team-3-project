import { useQuery } from "@tanstack/react-query";
import { fetchParkingList } from "../Utils/fetchParkingData";
import { useNavigate } from "react-router-dom";
import Container from "../styles/Container";
import { Header, LoaderSpan, Parking, Title } from "../styles/PageStyle";

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

      {isLoading && <LoaderSpan>로딩 중...</LoaderSpan>}
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
