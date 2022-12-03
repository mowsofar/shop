import React from 'react';
// @ts-ignore
import logo from './logo1.png';

import {NavLink, Outlet} from 'react-router-dom';

const TopPanel: React.FC = () => {

    const linkStyle: any = {
        textDecoration: "none",
    }

    return (<div className="top-panel">
        <img src={logo} alt=""></img>
        <NavLink to="/" className="links" style={linkStyle}>Главная</NavLink>
        <NavLink to="/catalog" className="links" style={linkStyle}>Каталог</NavLink>
        <NavLink to="/categories" className="links" style={linkStyle}>Категории</NavLink>
        <Outlet></Outlet>
    </div>)
}

export default TopPanel;