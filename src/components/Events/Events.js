import React, { useState } from 'react';

import s from './Events.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { SecondaryInput } from '../subComponents/Inputs/Inputs';
import { AddEvent } from '../subComponents/Widgets/Widgets';
import Modal from '../Modal/Modal';

const Events = () => {

    const [show, toggleShow] = useState(false);
    
    return(
        <>
            {show &&
            <>
                <div className={s.overlay}></div>
                <Modal onCancelClick={()=>toggleShow(false)} />
            </>
            }
            <Breaker text='ROUTINE ACTIVITIES / EVENTS' />
            <div className={s.box}>
                <SecondaryInput label='Facebook Event Page Link' />
                <AddEvent onClick={()=>toggleShow(true)} />
                <AddEvent text='Add another event' />
            </div>
        </>
    )
};

export default Events;