import React from "react";

const { kakao } = window;

function KakaoMapScript(lat = 33.450701, lng = 126.570667) {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 2,
  };

  // 내 위치에 마커를 생성합니다
  var imageSize = new kakao.maps.Size(24, 35);
  var my_loc_image =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  var my_loc_marker = new kakao.maps.MarkerImage(my_loc_image, imageSize);
  var my_marker_position = new kakao.maps.LatLng(lat, lng);
  var my_marker = new kakao.maps.Marker({
    position: my_marker_position,
    image: my_loc_marker,
  });
  const map = new kakao.maps.Map(container, options);

  // 마커가 지도 위에 표시되도록 설정합니다
  my_marker.setMap(map);
}

const MenuPage = () => {
  if ("geolocation" in navigator)
    navigator.geolocation.getCurrentPosition((position) => {
      KakaoMapScript(position.coords.latitude, position.coords.longitude);
    });

  return <div id="map" style={{ width: "100vh", height: "100vh" }}></div>;
};

export default MenuPage;
