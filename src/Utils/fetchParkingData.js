const SERVICE_KEY =
  "cvEGlskHWAzclGN9Ijq10yeNkZ%2BBypCiFtj%2FwHiBIwdoKPaz4f8dRGjRiSwAN5Ef9JGzu06rTFLz5uM17qRolA%3D%3D";

const BASE_URL =
  "https://api.odcloud.kr/api/15112975/v1/uddi:bbd28616-b6b9-45bb-8435-d46ba6a6ad7e";

const withParams = (page = 1, perPage = 100) =>
  `${BASE_URL}?page=${page}&perPage=${perPage}&returnType=JSON&serviceKey=${SERVICE_KEY}`;

export async function fetchParkingList(page = 1, perPage = 100) {
  //전체 데이터 필요할 때
  const response = await fetch(withParams(page, perPage));
  const json = await response.json();
  return json.data || [];
}

export async function fetchParkingNames() {
  // 주차장 이름 데이터 필요할 때
  const data = await fetchParkingList();
  return data.map((item) => item["주차장명"]);
}

export async function fetchWeekdayTimes() {
  // 평일 운영 시간 데이터 필요할 때
  const data = await fetchParkingList();
  return data.map((item) => item["평일운영시간"]);
}

export async function fetchSaturdayTimes() {
  // 토요일 운영 시간 데이터 필요할 때
  const data = await fetchParkingList();
  return data.map((item) => item["토요일 운영시간"]);
}

export async function fetchSundayTimes() {
  // 일요일 운영 시간 데이터 필요할 때
  const data = await fetchParkingList();
  return data.map((item) => item["일요일운영시간"]);
}

export async function fetchParkingFee() {
  // 시간 당 요금을 불러오는 경우
  const data = await fetchParkingList();
  return data.map((item) => item[" 시간당주차요금 "]);
}

export async function fetchAddress() {
  // 시간 당 요금을 불러오는 경우
  const data = await fetchParkingList();
  return data.map((item) => item["주차장위치"]);
}
