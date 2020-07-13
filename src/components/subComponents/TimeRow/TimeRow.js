import React from 'react';

import { Toggle } from '../../subComponents/Inputs/Inputs';
import { PrimaryText, TimeCard } from './../../subComponents/Widgets/Widgets';
import s from './TimeRow.module.scss';

const TimeRow = ({primaryText, checked = true}) => {
    return(
        <div className={s.row}>
            <PrimaryText text={primaryText} />
            <Toggle checked={checked} />
            <TimeCard />
            <PrimaryText secondary />
        </div>
    )
};

export default TimeRow;