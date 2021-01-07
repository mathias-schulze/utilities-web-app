import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

const Detail: FC = () => {
  const navigate = useNavigate();

  const backToDemo = () => {
    navigate('/');
  };
  return (
    <div className="detail-page">
      <h3>This is Detail Page.</h3>
      <button className="backto-demo-btn" onClick={backToDemo}>
        back to demo
      </button>
    </div>
  );
};

export default Detail;
