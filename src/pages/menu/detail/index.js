import React from "react";

const MenuDetailPage = () => {
  return (
    <>
      <div>
        <div id="store_image">
          <img />
        </div>
        <div
          id="store_name"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>타코야키 집</h2>
        </div>
        <div
          id="store_info"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>타코야키</span>
          <span> 25알: 7,000원</span>
        </div>
      </div>
    </>
  );
};

export default MenuDetailPage;
