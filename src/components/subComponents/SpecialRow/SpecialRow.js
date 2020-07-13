import React from 'react';

import { Toggle, SpecialInput } from '../../subComponents/Inputs/Inputs';
import { PrimaryText, TimeCard } from './../../subComponents/Widgets/Widgets';
import s from './SpecialRow.module.scss';

const SpecialRow = ({primaryText, checked = true, readOnly = false, first=false}) => {
    return(
        <div className={s.row}>
            <PrimaryText text={primaryText} />
            <Toggle hideLabel checked={checked} />
            <TimeCard />
            <SpecialInput first={first} readOnly={readOnly} />
        </div>
    )
};

export default SpecialRow;