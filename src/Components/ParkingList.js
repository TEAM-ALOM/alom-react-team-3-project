import { useEffect, useState } from "react";
import { fetchParkingData } from "../Utils/fetchParkingData";

function ParkingList() {
  const [parkingList, setParkingList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchParkingData();
      setParkingList(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>광진구 주차장 정보</h1>
      <ul>
        {parkingList.map((item, idx) => (
          <li key={idx}>{item["주차장명"]}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParkingList;
