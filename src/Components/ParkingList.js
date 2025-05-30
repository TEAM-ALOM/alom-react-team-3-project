import { useQuery } from "@tanstack/react-query";
import { fetchParkingList } from "../Utils/fetchParkingData";
import { useNavigate } from "react-router-dom";
import Container from "../styles/Container";

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
      <h1>광진구 주차장 정보</h1>

      {isLoading && <p>로딩 중...</p>}
      {isError && <p>데이터를 불러오는 데 실패했습니다.</p>}

      <ul>
        {parkingList?.map((item, idx) => (
          <li
            key={idx}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/detail", { state: item })}>
            {item["주차장명"]}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ParkingList;
