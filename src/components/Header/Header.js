import React from 'react';

import s from './Header.module.scss';

const Header = () => {
    return(
        <header className = {s.header}>
            <img
             alt='BreweryDB'
             src={require('../../assets/BreweryDB_LogoC.png')}
             srcSet={`
                 ${require('../../assets/BreweryDB_LogoC@2x.png')} 2x, 
                 ${require('../../assets/BreweryDB_LogoC@3x.png')} 3x
             `}
             className={s.header_sideLogo} 
            />
            <img
             alt='Location Traffic'
             src={require('../../assets/BreweryDB_LocationTraffic.png')}
             srcSet={`
                 ${require('../../assets/BreweryDB_LocationTraffic@2x.png')} 2x, 
                 ${require('../../assets/BreweryDB_LocationTraffic@3x.png')} 3x
             `}
             className={s.header_mainLogo} 
            />
            <h1 className = {s.header_heading}>Build Traffic</h1>
        </header>
    )
};

export default Header;