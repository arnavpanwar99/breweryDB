import React from 'react';

import s from './Sales.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { DropDown } from '../subComponents/Inputs/Inputs';

const Sales = () => {
    return(
        <>
            <Breaker text='carryout sales' />
            <div className={s.box}>
                <span className={s.box_first}>
                    <DropDown />
                </span>
                <DropDown />
            </div>
        </>
    )
};

export default Sales;