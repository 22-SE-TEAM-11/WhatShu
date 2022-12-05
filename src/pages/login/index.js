import React from "react";
import { Link } from "react-router-dom";
import './index.css'

const LoginPage = () => {
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
          <input />
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" />
        </div>
        <Link to="/main" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button>로그인</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
