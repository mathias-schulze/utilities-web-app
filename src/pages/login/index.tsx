import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

const Login: FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <button className="login-btn" onClick={goToHome}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
