import React, { useEffect } from "react";

const { kakao } = window;

function KakaoMapScript() {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
}

const MenuPage = () => {
  useEffect(() => {
    KakaoMapScript();
  }, []);
  return <div id="map" style={{ width: "100vh", height: "100vh" }}></div>;
};

export default MenuPage;
