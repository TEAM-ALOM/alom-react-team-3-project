import { useEffect, useState } from "react";
import { fetchParkingNames } from "../utils/fetchParkingData";
import Container from "../styles/Container";

function ParkingList() {
  const [parkingList, setParkingList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchParkingNames();
      setParkingList(response);
    };
    loadData();
  }, []);

  return (
    <Container>
      <h1>광진구 주차장 정보</h1>
      <ul>
        {parkingList.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default ParkingList;
