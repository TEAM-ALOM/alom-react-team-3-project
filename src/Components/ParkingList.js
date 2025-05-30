import { useQuery } from "@tanstack/react-query";
import { fetchParkingNames } from "../utils/fetchParkingData";
import Container from "../styles/Container";

function ParkingList() {
  const {
    data: parkingList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["parkingNames"],
    queryFn: fetchParkingNames,
  });

  return (
    <Container>
      <h1>광진구 주차장 정보</h1>

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>데이터를 불러오는 데 실패했습니다.</p>}

      <ul>
        {parkingList &&
          parkingList.map((name, idx) => <li key={idx}>{name}</li>)}
      </ul>
    </Container>
  );
}

export default ParkingList;
