import { useNavigate, useLocation } from "react-router-dom";
import Container from "../styles/Container";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchParkingList } from "../Utils/fetchParkingData";
import KakaoMap from "../Utils/KakaoMap";
import {
  FixedButton,
  Header,
  InfoCard,
  Label,
  LoaderSpan,
  Title,
} from "../styles/PageStyle";

function ParkingDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    data: parkingList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["parkingList"],
    queryFn: fetchParkingList,
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  if (isLoading) return <LoaderSpan>로딩 중...</LoaderSpan>;
  if (isError || !state) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  const selected = parkingList.find((p) => p["주차장명"] === state["주차장명"]);

  if (!selected) return <div>해당 주차장 정보를 찾을 수 없습니다.</div>;

  const {
    주차장명,
    평일운영시간,
    "토요일 운영시간": 토요일운영시간,
    일요일운영시간,
    시간당주차요금,
    주차장위치,
    주차면수,
    주차장형태,
    비고,
  } = selected;

  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
    주차장위치
  )}`;

  return (
    <Container>
      <Header>
        <Title>🅿️{주차장명}</Title>
      </Header>

      <InfoCard>
        <Label>
          🛣️ 주차장 형태:{" "}
          {주차장형태 === "노상"
            ? "노상(도로 위) 주차장"
            : "노외(도로 밖) 주차장"}
        </Label>
        <Label>
          🛣️ 주차장 유형:{" "}
          {비고 === "거주자" ? "거주자 우선 주차장" : "공영 주차장"}
        </Label>
        <Label>🕚 시간 당 주차요금: {시간당주차요금}원</Label>
        <Label>🚗 주차 면수: {주차면수}대</Label>
        <Label>
          📅 평일:{" "}
          {평일운영시간 === "무료개방" ? "무료개방" : `${평일운영시간}시`}
        </Label>
        <Label>
          📅 토요일:{" "}
          {토요일운영시간 === "무료개방" ? "무료개방" : `${토요일운영시간}시`}
        </Label>
        <Label>
          📅 일요일:{" "}
          {일요일운영시간 === "무료개방" ? "무료개방" : `${일요일운영시간}시`}
        </Label>

        <Label>
          📍{" "}
          <a
            href={naverMapUrl}
            target='_blank'
            rel='noopener noreferrer'>
            {주차장위치}
          </a>
        </Label>
      </InfoCard>

      <KakaoMap address={주차장위치} />

      <FixedButton onClick={() => navigate("/")}>홈으로</FixedButton>
    </Container>
  );
}

export default ParkingDetail;
