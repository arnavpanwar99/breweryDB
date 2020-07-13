import React from 'react';

import s from './Mailing.module.scss';
import { SecondaryBreaker } from '../subComponents/Breaker/Breaker';
import { TextInput } from '../subComponents/Inputs/Inputs';

const Mailing = () => {
    return(
        <>
            <SecondaryBreaker text='Mailing List' />
            <div className={s.box}>
                <TextInput short label='Email' placeholder='Mailinglist@gmail.com' />
            </div>
        </>
    );
};

export default Mailing;