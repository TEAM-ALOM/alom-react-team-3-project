import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchParkingList } from "../Utils/fetchParkingData";

function ParkingDetail() {
  const [parking, setParking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchParkingList();
      setParking(data[0]); // 첫 번째 주차장으로 임시 설정
    };
    loadData();
  }, []);

  if (!parking) return <div>로딩 중...</div>;

  return (
    <div>
      <h3>{parking["주차장명"]} - 운영 시간</h3>
      <p>평일: {parking["평일운영시간"]}</p>
      <p>토요일: {parking["토요일 운영시간"]}</p>
      <p>일요일: {parking["일요일운영시간"]}</p>
      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
}

export default ParkingDetail;