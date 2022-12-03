import React from 'react';
// @ts-ignore
import img1 from './banner.png';

const HomePage: React.FC = () => {
    return (<div className="banner">
        <img src={img1}/>
    </div>)
}

export default HomePage;