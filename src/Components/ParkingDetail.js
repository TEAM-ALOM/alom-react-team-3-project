import { useNavigate, useLocation } from "react-router-dom";

function ParkingDetail() {
  const navigate = useNavigate();
  const { state } = useLocation(); // 리스트에서 전달된 데이터

  if (!state) return <div>데이터가 없습니다.</div>;

  const {
    주차장명,
    평일운영시간,
    토요일운영시간,
    일요일운영시간,
  } = state;

  return (
    <div>
      <h3>{주차장명} - 운영 시간</h3>
      <p>평일: {평일운영시간}</p>
      <p>토요일: {토요일운영시간}</p>
      <p>일요일: {일요일운영시간}</p>
      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
}

export default ParkingDetail;