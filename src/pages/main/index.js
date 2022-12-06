import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../../App";
import "./index.css";

const MainPage = () => {
  const { state: user } = useLocation();
  const {trucks} = useContext(MyContext);
  console.log(user);
  console.log(trucks);
  return (
    <>
      <div id="container-Main">
        <div id="category">
          <Link
            to="/menu"
            state={{
              category: "snack",
            }}
          >
            <button>분식</button>
          </Link>
          <Link
            to="/menu"
            state={{
              category: "fastfood",
            }}
          >
            <button>패스트 푸드</button>
          </Link>
          <Link
            to="/menu"
            state={{
              category: "japanese",
            }}
          >
            <button>일식</button>
          </Link>
          <Link
            to="/menu"
            state={{
              category: "chinese",
            }}
          >
            <button>중식</button>
          </Link>
          <Link
            to="/menu"
            state={{
              category: "fruit",
            }}
          >
            <button>과일</button>
          </Link>
          <Link
            to="/menu"
            state={{
              category: "jokbo",
            }}
          >
            <button>족발 & 보쌈</button>
          </Link>
        </div>
        <div id="main-bottom">
          {user.role === "1" && (
            <Link
              to="/trucks"
              state={{
               ...user
              }}
            >
              <button>트럭 관리</button>
            </Link>
          )}
          <button>지도</button>
          <Link to="/">
          <button 
          id="logout-btn"
          onClick={()=>alert("로그아웃 되었습니다.")}
          >Log out</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
