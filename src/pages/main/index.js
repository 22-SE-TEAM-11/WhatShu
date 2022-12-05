import React from "react";
import "./index.css";

const MainPage = () => {
  return (
    <>
      <div id="container-Main">
        <div id="category">
            <button>분식</button>
            <button>패스트 푸드</button>
            <button>일식</button>
            <button>중식</button>
            <button>과일</button>
            <button>족발 & 보쌈</button>
        </div>
        <div id="main-bottom">
            <button>검색</button>
            <button>지도</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
