import React from 'react';

import s from './Festivals.module.scss';
import { SecondaryBreaker } from '../subComponents/Breaker/Breaker';
import { TextInput } from '../subComponents/Inputs/Inputs';
import { PrimaryButton } from '../subComponents/Widgets/Widgets';

const Festivals = () => {
    return(
        <>
            <SecondaryBreaker text='Festivals / Awards' />
            <div className={s.box}>
                <div className={s.box_child}>
                    <div className={s.box_child_element}>
                        <TextInput placeholder='Enter Festivals' short label='Festivals' />
                        <PrimaryButton simple text='Add Festival' />
                    </div>
                    <div className={s.box_child_element}>
                        <TextInput placeholder='YYYY' short label='Year' />
                    </div>
                </div>
                <div className={s.box_child}>
                    <div className={s.box_child_element}>
                        <TextInput placeholder='Enter Award' short label='Award' />
                        <PrimaryButton simple text='Add Award' />
                    </div>
                    <div className={s.box_child_element}>
                        <TextInput placeholder='YYYY' short label='Year' />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Festivals;