import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const MainPage = () => {
  return (
    <>
      <div id="container-Main">
        <div id="category">
            <Link to="/menu" state={{
                category:"snack"
            }}>
            <button>분식</button>
            </Link>
            <Link to="/menu" state={{
                category:"fastfood"
            }}>
            <button>패스트 푸드</button>
            </Link>
            <Link to="/menu" state={{
                category:"japanese"
            }}>
            <button>일식</button>
            </Link>
            <Link to="/menu" state={{
                category:"chinese"
            }}>
            <button>중식</button>
            </Link>
            <Link to="/menu" state={{
                category:"fruit"
            }}>
            <button>과일</button>
            </Link>
            <Link to="/menu" state={{
                category:"jokbo"
            }}>
            <button>족발 & 보쌈</button>
            </Link>
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
