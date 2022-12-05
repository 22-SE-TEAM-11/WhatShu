import React, { useEffect, useState } from "react";

const { kakao } = window;

function KakaoMapScript(lat = 33.450701, lng = 126.570667) {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  var markerPosition = new kakao.maps.LatLng(lat, lng);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}

const MenuPage = () => {
  if ("geolocation" in navigator)
    navigator.geolocation.getCurrentPosition((position) => {
      KakaoMapScript(position.coords.latitude, position.coords.longitude);
    });

  return <div id="map" style={{ width: "100vh", height: "100vh" }}></div>;
};

export default MenuPage;
