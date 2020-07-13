import React from 'react';

import s from './Attractions.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { DropDown } from '../subComponents/Inputs/Inputs';
import { PrimaryButton } from '../subComponents/Widgets/Widgets';

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
            <PrimaryButton text = 'Add Another Attraction' />
        </>
    )
};

export default Attractions;