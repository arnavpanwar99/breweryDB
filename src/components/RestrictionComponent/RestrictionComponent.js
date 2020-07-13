import React from 'react';

import { CheckBox } from '../subComponents/Inputs/Inputs';
import s from './RestrictionComponent.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';

const RestrictionComponent = () => {
    return(
        <>
            <Breaker text='AGE RESTRICTIONS' />
            <div className={s.holder}>
                <CheckBox label='None' />
                <CheckBox label='All ages welcome' />
                <CheckBox label='Underage parties must be accompanied by an adult' />
                <CheckBox label='Must be 17 or older' />
                <CheckBox label='Must be 18 or older' />
                <CheckBox label='Must be 21 or older' />
            </div>
        </>
    )
};

export default RestrictionComponent;