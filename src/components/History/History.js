import React from 'react';

import s from './History.module.scss';
import { SecondaryBreaker } from '../subComponents/Breaker/Breaker';
import { TextArea } from '../subComponents/Inputs/Inputs';

const History = () => {
    return(
        <>
            <SecondaryBreaker text='History of the Brewery ' />
            <div className={s.box}>
                <TextArea text='Describe your Brewery' placeholder='Describe your Brewery' />
            </div>

        </>
    )
};

export default History;