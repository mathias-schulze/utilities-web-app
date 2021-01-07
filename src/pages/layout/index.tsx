import React, { FC } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import './index.less';

const Layout: FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };
  return (
    <div className="layout-page">
      <nav className="nav-bar">
        <NavLink to="/" end>
          Home
        </NavLink>
        <span className="divider"></span>
        <NavLink to="/detail">Detail</NavLink>
      </nav>
      <button className="logout-btn" onClick={logout}>
        logout
      </button>
      <div className="layout-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
