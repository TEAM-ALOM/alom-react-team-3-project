import { useEffect, useState } from "react";

import { fetchParkingList } from "../Utils/fetchParkingData";
import { useNavigate } from "react-router-dom";
import { fetchParkingNames } from "../Utils/fetchParkingData";
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

  return (
    <Container>
      <h1>광진구 주차장 정보</h1>
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
      </ul>
    </Container>
  );
}

export default ParkingList;
