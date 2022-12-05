import React from "react";
import { useLocation } from "react-router-dom";
import { truckDB } from "../../assets/truckDB";

const { kakao } = window;

function KakaoMapScript(lat = 33.450701, lng = 126.570667) {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 2,
  };
  const map = new kakao.maps.Map(container, options);

  // 내 위치에 마커를 생성합니다
  var imageSize = new kakao.maps.Size(24, 35);
  var my_loc_marker = new kakao.maps.MarkerImage(
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
    imageSize
  );
  var my_marker_position = new kakao.maps.LatLng(lat, lng);
  var my_marker = new kakao.maps.Marker({
    position: my_marker_position,
    image: my_loc_marker,
  });

  let truck;
  for (var i = 0; i < truckDB.length; i++) {
    truck = truckDB[i];
    // 마커 이미지를 생성합니다
    var truck_image = new kakao.maps.MarkerImage(
      "https://cdn-icons-png.flaticon.com/512/1046/1046762.png",
      imageSize
    );

    // 마커를 생성합니다
    var truck_marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(truck.latitudee, truck.longitude), // 마커를 표시할 위치
      title: truckDB[i].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: truck_image, // 마커 이미지
    });
    truck_marker.setMap(map);
  }

  // 마커가 지도 위에 표시되도록 설정합니다
  my_marker.setMap(map);
}

const MenuPage = () => {
  const location = useLocation();
  if ("geolocation" in navigator)
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      KakaoMapScript(position.coords.latitude, position.coords.longitude);
    });

  return (
    <>
      {/** 선택한 음식 카테고리 */}
      <div>{location.state.category}</div>
      {/** 지도 */}
      <div id="map" style={{ width: "100vh", height: "100vh" }}></div>;
    </>
  );
};

export default MenuPage;
