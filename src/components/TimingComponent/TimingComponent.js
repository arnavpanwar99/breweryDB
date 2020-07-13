import React from 'react';

import Breaker from './../subComponents/Breaker/Breaker';
import s from './TimingComponent.module.scss';
import TimeRow from '../subComponents/TimeRow/TimeRow';


const TimingComponent = () => {
    return(
        <>
            <Breaker text='TOUR DAYS AND HOURS' />
            <div className={s.timeGrid}>
                <TimeRow primaryText='Monday' />
                <TimeRow primaryText='Tuesday' />
                <TimeRow primaryText='Wednesday' />
                <TimeRow primaryText='Thursday' />
                <TimeRow primaryText='Friday' />
                <TimeRow primaryText='Saturday' />
                <TimeRow primaryText='Sunday' checked={false} />
            </div>
        </>
    )
};

export default TimingComponent;