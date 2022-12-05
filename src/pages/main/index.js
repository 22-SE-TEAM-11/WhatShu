import React from "react";
import index from "./index.css";

const MainPage = () => {
  return (
    <>
      <div>
        <table id="category" width={"100%"}>
          <tbody>
            <tr>
              <td>
                <button id="bunsick">분식</button>
              </td>
              <td>
                <button id="fastfood">패스트 푸드</button>
              </td>
              <td>
                <button id="japan">일식</button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="hei">회</button>
              </td>
              <td>
                <button id="fruit">과일</button>
              </td>
              <td>
                <button id="meat">족발&보쌈</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="etc" width={"100%"}>
          <tbody>
            <tr>
              <button id="search">검색</button>
            </tr>
            <tr>
              <button id="map">지도</button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainPage;
