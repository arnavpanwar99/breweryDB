import React, {useState} from 'react';

import s from './Attractions.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { DropDown, TextInput } from '../subComponents/Inputs/Inputs';
import { PrimaryButton } from '../subComponents/Widgets/Widgets';
import { distance } from '../../strings/string';

const Attractions = () => {
    const [selectedOption, setSelectedOption] = useState('Select an option');
    const [showDropdown, toggleShowDropdown] = useState(false);
    const [attractionCount, increaseCount] = useState(1);

    const onChooseOption = (option) => {
        setSelectedOption(option);
        toggleShowDropdown(false);
    }

    const toggleDropdown = () => toggleShowDropdown(!showDropdown);

    return(
        <>
            <Breaker text='Nearby attractions' />
            <div className={s.box}>
                <span>
                    {Array(attractionCount).fill(undefined).map((undefined, index) => (
                        <TextInput apart placeholder='Enter Nearby Location' label={index===0?'Enter Attraction':''} />
                    ))}
                </span>
                <DropDown 
                 options={distance} 
                 label='Select Distance'
                 selected={selectedOption}
                 onChooseOption={onChooseOption}
                 toggleDropdown={toggleDropdown} 
                 showDropdown={showDropdown}
                />
            </div>
            <PrimaryButton onClick={()=>increaseCount(attractionCount+1)} text = 'Add Another Attraction' />
        </>
    )
};

export default Attractions;