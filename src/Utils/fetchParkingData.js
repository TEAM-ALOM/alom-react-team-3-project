const SERVICE_KEY =
  "cvEGlskHWAzclGN9Ijq10yeNkZ%2BBypCiFtj%2FwHiBIwdoKPaz4f8dRGjRiSwAN5Ef9JGzu06rTFLz5uM17qRolA%3D%3D";

const BASE_URL =
  "https://api.odcloud.kr/api/15112975/v1/uddi:bbd28616-b6b9-45bb-8435-d46ba6a6ad7e";

export const fetchParkingData = async (page = 1, perPage = 100) => {
  const url = `${BASE_URL}?page=${page}&perPage=${perPage}&returnType=JSON&serviceKey=${SERVICE_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error("❌ 주차장 데이터 불러오기 실패:", error);
    return [];
  }
};
