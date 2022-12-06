import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../../../App";

const MenuDetailPage = () => {
  const location = useLocation();
  const {trucks:truckDB} = useContext(MyContext);
  let storeName;
  let storeMenu;
  let truck;
  console.log(location);
  for (let i = 0; i < truckDB.length; i++) {
    truck = truckDB[i];
    const truckId = location.state.id;
    console.log("truckId: ", truckId);
    console.log("location: ", location);
    if (truckId === truck.id) {
      storeName = truck.name;
      storeMenu = truck.menu;
      console.log("storeName: ", storeName);
      console.log("storeMenu: ", storeMenu);
      break;
    }
  }
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
          <h2>{storeName}</h2>
        </div>
        <div
          id="store_info"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            {storeMenu.map((m) => {
              return (
                <div>
                  {m.key} : {m.price}\
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </>
  );
};

export default MenuDetailPage;
