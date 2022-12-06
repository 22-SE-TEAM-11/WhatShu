import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import "./index.css";

const { kakao } = window;

function KakaoMapScript(
  lat = 33.450701,
  lng = 126.570667,
  location,
  navigate,
  truckDB
) {
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
  // 마커 이미지를 생성합니다
  var truck_image = new kakao.maps.MarkerImage(
    "https://cdn-icons-png.flaticon.com/512/1046/1046762.png",
    imageSize
  );
  var truck_marker;
  var i;
  if (location.state.category === "all") {
    for (i = 0; i < truckDB.length; i++) {
      const truck = truckDB[i];

      // 마커를 생성합니다
      truck_marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(truck.latitudee, truck.longitude), // 마커를 표시할 위치
        title: truck.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: truck_image, // 마커 이미지
      });
      console.log(truck.id);
      truck_marker.setMap(map);
      kakao.maps.event.addListener(truck_marker, "click", () => {
        navigate("/detail", { state: { id: truck.id } });
      });
    }
  } else {
    for (i = 0; i < truckDB.length; i++) {
      const truck = truckDB[i];
      if (!truck.on) continue;
      if (
        location.state.category &&
        truck.categories !== location.state.category
      )
        continue;

      // 마커를 생성합니다
      truck_marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(truck.latitudee, truck.longitude), // 마커를 표시할 위치
        title: truck.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: truck_image, // 마커 이미지
      });
      console.log(truck.id);
      truck_marker.setMap(map);
      kakao.maps.event.addListener(truck_marker, "click", () => {
        navigate("/detail", { state: { id: truck.id } });
      });
    }
  }

  // 마커가 지도 위에 표시되도록 설정합니다
  my_marker.setMap(map);
}

const MenuPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { trucks } = useContext(MyContext);
  const CATEGORY_KO = {
    snack: "분식",
    fastfood: "패스트 푸드",
    japanese: "일식",
    chinese: "중식",
    fruit: "과일",
    jokbo: "족발 & 보쌈",
    all: "전체",
  };
  if ("geolocation" in navigator)
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      KakaoMapScript(
        position.coords.latitude,
        position.coords.longitude,
        location,
        navigate,
        trucks
      );
    });

  return (
    <div id="container-menu">
      {/** 선택한 음식 카테고리 */}
      <h1>{CATEGORY_KO[location.state.category]}</h1>
      {/** 지도 */}
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <div id="menulist">
        <h2>푸드트럭 리스트</h2>
        {location.state.category==='all' ? trucks
          .filter(
            (truck) =>
              truck.on
          )
          .map((truck, idx) => (
            <div
              id="menu-box"
              onClick={() => {
                navigate("/detail", { state: { id: truck.id } });
              }}
            >
              <span>{idx + 1}</span>
              <h3>{truck.name}</h3>
            </div>
          )):trucks
          .filter(
            (truck) =>
              truck.on &&
              location.state.category &&
              truck.categories === location.state.category
          )
          .map((truck, idx) => (
            <div
              id="menu-box"
              onClick={() => {
                navigate("/detail", { state: { id: truck.id } });
              }}
            >
              <span>{idx + 1}</span>
              <h3>{truck.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuPage;
