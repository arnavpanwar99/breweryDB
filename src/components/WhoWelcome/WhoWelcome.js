import React from 'react';

import { DropDown } from '../subComponents/Inputs/Inputs';
import s from './WhoWelcome.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { petFriendly } from '../../strings/string';

const WhoWelcome = () => {
    return(
        <>
            <Breaker text='who is welcome' short />
            <div className={s.box}>
                <span className={s.box_first}>
                    <DropDown options={petFriendly} label='Pet Friendly' />
                </span>
                <DropDown label='Family Friendly' />
            </div>
        </>
    )
};

export default WhoWelcome;