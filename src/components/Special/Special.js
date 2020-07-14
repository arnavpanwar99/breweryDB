import React, {useState} from 'react';

import SpecialRow from '../subComponents/SpecialRow/SpecialRow';
import Breaker from '../subComponents/Breaker/Breaker';
import s from './Special.module.scss';
import { DropDown } from '../subComponents/Inputs/Inputs';

const Special = () => {

    const [selectedOption, setSelectedOption] = useState('No');
    const [showDropdown, toggleShowDropdown] = useState(false);

    const onChooseOption = (option) => {
        setSelectedOption(option);
        toggleShowDropdown(false);
    }

    const toggleDropdown = () => toggleShowDropdown(!showDropdown);

    return(
        <>
            <Breaker text='HAPPY HOUR / SPECIALS' />
            <div className={s.box}>
                <DropDown
                 label='Happy Hours?' 
                 selected={selectedOption}
                 onChooseOption={onChooseOption}
                 toggleDropdown={toggleDropdown} 
                 showDropdown={showDropdown}
                />
                <div className={s.box_timeGrid}>
                    <SpecialRow first primaryText='Monday' />
                    <SpecialRow primaryText='Tuesday' />
                    <SpecialRow primaryText='Wednesday' />
                    <SpecialRow primaryText='Thursday' />
                    <SpecialRow primaryText='Friday' />
                    <SpecialRow primaryText='Saturday' />
                    <SpecialRow primaryText='Sunday' checked={false} />
                </div>
            </div>
        </>
    )
};

export default Special;