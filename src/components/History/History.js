import React, { useState } from 'react';

import s from './History.module.scss';
import { SecondaryBreaker } from '../subComponents/Breaker/Breaker';
import { TextArea } from '../subComponents/Inputs/Inputs';

const History = () => {
    const [text, setText] = useState('Describe your Brewery');

    return(
        <>
            <SecondaryBreaker text='History of the Brewery ' />
            <div className={s.box}>
                <TextArea onChange={({target})=>setText(target.value)} text={text} placeholder='Describe your Brewery' />
            </div>

        </>
    )
};

export default History;