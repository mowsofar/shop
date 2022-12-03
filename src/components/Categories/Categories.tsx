import React from 'react';
import {Link} from "react-router-dom";
import {categories} from "../../constants/categories";
// @ts-ignore
import back from "../ItemPage/back.png";

export const Categories: React.FC = () => {

    const linkStyle: any = {
        textDecoration: "none",
    }

    return (<div>
        {Object.keys(categories).map(key => {
            return <div key={key} className="category-page"><Link to={key} style={linkStyle}>{categories[key]}</Link></div>
        })}
    </div>)
}