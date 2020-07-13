import React from 'react';

import s from './Events.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { SecondaryInput } from '../subComponents/Inputs/Inputs';
import { AddEvent } from '../subComponents/Widgets/Widgets';

const Events = () => {
    return(
        <>
            <Breaker text='ROUTINE ACTIVITIES / EVENTS' />
            <div className={s.box}>
                <SecondaryInput label='Facebook Event Page Link' />
                <AddEvent />
                <AddEvent text='Add another event' />
            </div>
        </>
    )
};

export default Events;