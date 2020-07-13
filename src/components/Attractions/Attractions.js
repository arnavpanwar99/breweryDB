import React from 'react';

import s from './Attractions.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { DropDown } from '../subComponents/Inputs/Inputs';

const Attractions = () => {
    return(
        <>
            <Breaker text='Nearby attractions' />
            <div className={s.box}>
                <span className={s.box_first}>
                    <DropDown label='Enter Attraction' />
                </span>
                <DropDown label='Select Distance' />
            </div>
            <div className={s.button}>
                Add Another Attraction
            </div>
        </>
    )
};

export default Attractions;