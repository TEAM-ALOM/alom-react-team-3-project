
import { useEffect, useState } from "react";

import { fetchParkingList } from "../Utils/fetchParkingData";
import { useNavigate } from "react-router-dom";
import { fetchParkingNames } from "../Utils/fetchParkingData";
import { useQuery } from "@tanstack/react-query";


import Container from "../styles/Container";


function ParkingList() {

  const [parkingList, setParkingList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchParkingList();
      setParkingList(response);
    };
    loadData();
  }, []);
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

        {parkingList.map((item, idx) => (
          <li
            key={idx}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/detail", { state: item })}
          >
            {item["주차장명"]}
          </li>
        ))}

        {parkingList &&
          parkingList.map((name, idx) => <li key={idx}>{name}</li>)}

      </ul>
    </Container>
  );
}

export default ParkingList;
