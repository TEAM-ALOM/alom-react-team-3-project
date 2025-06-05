import { useEffect } from "react";

function KakaoMap({ address }) {
  console.log(window.kakao);
  useEffect(() => {
    const kakaoInit = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 기본 위치
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            new window.kakao.maps.Marker({ map, position: coords });
            map.setCenter(coords);
          }
        });
      });
    };

    // 스크립트가 이미 있으면 중복 삽입 방지
    const existingScript = document.querySelector(
      "script[src*='dapi.kakao.com']"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a23024f95d738610b1d4c0b0ddd4156f&autoload=false&libraries=services`;
      script.async = true;
      script.onload = kakaoInit;
      document.head.appendChild(script);
    } else {
      kakaoInit();
    }
  }, [address]);

  return (
    <div
      id='map'
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        marginBottom: "24px",
      }}
    />
  );
}

export default KakaoMap;
