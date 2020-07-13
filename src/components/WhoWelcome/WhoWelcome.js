import React from 'react';

import { DropDown } from '../subComponents/Inputs/Inputs';
import s from './WhoWelcome.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';

const WhoWelcome = () => {
    return(
        <>
            <Breaker text='who is welcome' short />
            <div className={s.box}>
                <span className={s.box_first}>
                    <DropDown label='Pet Friendly' />
                </span>
                <DropDown label='Family Friendly' />
            </div>
        </>
    )
};

export default WhoWelcome;