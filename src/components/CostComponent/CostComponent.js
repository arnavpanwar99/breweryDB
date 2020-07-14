import React, {useState} from 'react';

import Breaker from './../subComponents/Breaker/Breaker';
import { DropDown, Range } from '../../components/subComponents/Inputs/Inputs';
import s from './CostComponent.module.scss';

const CostComponent = () => {

    const [selectedOption, setSelectedOption] = useState('No');
    const [minValue, setMinValue] = useState('5');
    const [maxValue, setMaxValue] = useState('25');
    const [showDropdown, toggleShowDropdown] = useState(false);

    const onChooseOption = (option) => {
        setSelectedOption(option);
        toggleShowDropdown(false);
    }

    const toggleDropdown = () => toggleShowDropdown(!showDropdown);

    const onRangeChange = ({target}, max=false) => {
        const { value, style } = target;
        max ? setMaxValue(value) : setMinValue(value);
        if(!value.match(/^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/)){
            style.border = '1px solid #f88';
        }
    }

    return(
        <>
            <Breaker text='tour costs' />
            <div className = {s.selectionRow}>
                <DropDown 
                 selected={selectedOption} 
                 label='Free?' 
                 onChooseOption={onChooseOption}
                 toggleDropdown={toggleDropdown} 
                 showDropdown={showDropdown}
                />
                <Range 
                 label='Enter Minimum - Maximum Price Range*' 
                 min={minValue}
                 max={maxValue}
                 onRangeChange={onRangeChange} 
                />
            </div>
        </>
    )
};

export default CostComponent;