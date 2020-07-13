import React from 'react';

import Board from './../Board/Board';
import Breaker from './../subComponents/Breaker/Breaker';
import { DropDown, Range } from '../../components/subComponents/Inputs/Inputs';
import s from './CostComponent.module.scss';

const CostComponent = () => {
    return(
        <>
            <Breaker text='tour costs' />
            <div className = {s.selectionRow}>
                <DropDown label='Free?' />
                <Range label='Enter Minimum - Maximum Price Range*' />
            </div>
        </>
    )
};

export default CostComponent;