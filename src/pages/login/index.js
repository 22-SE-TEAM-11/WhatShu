import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDB } from "../../assets/userDB";
import './index.css'

const LoginPage = () => {
    const navigate=useNavigate();
    const [ID,setID] = useState("");
    const [Password,setPassword] = useState("");
    const passwordChanged = (e) => setPassword(e.target.value);
    const idChanged = (e) => setID(e.target.value);
    const login = () => {
        const idFilter = userDB.filter((user)=>user.id===ID);
        if(idFilter.length<=0){
            alert('ID가 잘못되었습니다.');
            return;
        }
        if(idFilter[0].password===Password) {
            alert('로그인 성공!');
            navigate('/main',{
                state:{...idFilter[0]}
            });
        } else {
            alert('비밀번호를 잘못입력하셨습니다 !');
            return;
        }
    }
  return (
    <div id="container-Login">
      <div id="form-Login">
        <img 
        src={require('../../assets/logo.png')}
        style={{
            width:'250px',

        }}
         />
        <div>
          <span>아이디</span>
          <input value={ID} onChange={idChanged} />
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" value={Password} onChange={passwordChanged}/>
        </div>
        <button onClick={login}>로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
