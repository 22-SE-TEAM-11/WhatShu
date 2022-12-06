import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MyContext } from '../../App';
import './index.css'

const TruckPage = () => {
    const location = useLocation();
    const {trucks, setTrucks} = useContext(MyContext);
    const userTrucks = location.state.foodtruck;
    console.log(userTrucks);
    const foodTrucks = trucks.filter((truck)=>
        userTrucks.includes(truck.id)
    );
    console.log(foodTrucks);
    const toggleHandler = (truckID) => {
        const temptruck = [...trucks];
        const idx = temptruck.findIndex((truck)=>truck.id === truckID);
        if(temptruck[idx].on===1) {
            temptruck[idx].on=0;
        } else {
            temptruck[idx].on=1;
        }
        setTrucks(temptruck);
    }
  return (
    <div id="containerTruck">
        <div id="wrapperTruck">
            <h2>트럭 관리</h2>
            {
                foodTrucks.map((truck)=>(
                    <div key={truck.id} className="truckBox">
                        <span>{truck.name}</span>
                        <button
                        onClick={()=>toggleHandler(truck.id)}
                        >{truck.on===1 ? 'ON' : 'OFF'}</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TruckPage