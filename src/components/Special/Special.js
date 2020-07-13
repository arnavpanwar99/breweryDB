import React from 'react';

import SpecialRow from '../subComponents/SpecialRow/SpecialRow';
import Breaker from '../subComponents/Breaker/Breaker';
import s from './Special.module.scss';
import { DropDown } from '../subComponents/Inputs/Inputs';

const Special = () => {
    return(
        <>
            <Breaker text='HAPPY HOUR / SPECIALS' />
            <div className={s.box}>
                <DropDown label='Happy Hours?' />
                <div className={s.box_timeGrid}>
                    <SpecialRow first primaryText='Monday' />
                    <SpecialRow primaryText='Tuesday' />
                    <SpecialRow primaryText='Wednesday' />
                    <SpecialRow primaryText='Thursday' />
                    <SpecialRow primaryText='Friday' />
                    <SpecialRow primaryText='Saturday' />
                    <SpecialRow readOnly primaryText='Sunday' checked={false} />
                </div>
            </div>
        </>
    )
};

export default Special;