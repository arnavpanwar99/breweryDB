import React from 'react';

import s from './Guild.module.scss';
import { SecondaryBreaker } from '../subComponents/Breaker/Breaker';
import { TextInput } from '../subComponents/Inputs/Inputs';
import { PrimaryButton } from '../subComponents/Widgets/Widgets';

const Guild = () => {
    return(
        <>
            <SecondaryBreaker text='Guild Memberships' />
            <div className={s.box}>
                <TextInput placeholder='Enter Guild Name' />
                <PrimaryButton simple text='Add Guild' />
            </div>   
        </>
    );
};

export default Guild;