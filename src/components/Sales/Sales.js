import React, {useState} from 'react';

import s from './Sales.module.scss';
import Breaker, {TertiaryBreaker, SecondaryBreaker} from '../subComponents/Breaker/Breaker';
import { DropDown, CheckBox } from '../subComponents/Inputs/Inputs';
import { extraCheck } from '../../strings/string';

const Sales = () => {
    const [first, setFirst] = useState('No');
    const [second, setSecond] = useState('No');
    const [showFirstDropdown, toggleFirstDropdown] = useState(false);
    const [showSecondDropdown, toggleSecondDropdown] = useState(false);

    const onFirstChoose = (option) => {
        setFirst(option);
        toggleFirstDropdown(false);
    }
    const onSecondChoose = (option) => {
        setSecond(option);
        toggleSecondDropdown(false);
    }

    const toggleFirst = () => toggleFirstDropdown(!showFirstDropdown);
    const toggleSecond = () => toggleSecondDropdown(!showSecondDropdown);

    return(
        <>
            <Breaker text='carryout sales' />
            <div className={s.box}>
                <span>
                    <DropDown 
                        apart
                        label='Select an option'
                        selected={first}
                        onChooseOption={onFirstChoose}
                        toggleDropdown={toggleFirst}
                        showDropdown={showFirstDropdown}
                    />
                    {first === 'Yes' && <Extra />}
                </span>
                <span>
                    <DropDown 
                    label='Select an option'
                    selected={second}
                    onChooseOption={onSecondChoose}
                    toggleDropdown={toggleSecond}
                    showDropdown={showSecondDropdown}
                    />
                    {second === 'Yes' && <Extra />}
                </span>
            </div>
        </>
    )
};

const Extra = () => (
    <div className={s.box_check}>
        <SecondaryBreaker text='Carryout Options' small />
        <TertiaryBreaker text='Check all that apply' tiny />
        {extraCheck.map(e => <CheckBox label={e} key={e} />)}
    </div>
)

export default Sales;