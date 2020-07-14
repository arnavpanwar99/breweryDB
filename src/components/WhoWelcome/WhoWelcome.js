import React, {useState} from 'react';

import { DropDown } from '../subComponents/Inputs/Inputs';
import s from './WhoWelcome.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { petFriendly } from '../../strings/string';

const WhoWelcome = () => {
    const [petValue, setPetValue] = useState('Select an option');
    const [showPetDropdown, toggleShowPetDropdown] = useState(false);
    const [familyValue, setFamilyValue] = useState('Select an option');
    const [showFamilyDropdown, toggleShowFamilyDropdown] = useState(false);

    const onChoosePetOption = (option) => {
        setPetValue(option);
        toggleShowPetDropdown(false);
    }

    const onChooseFamilyOption = (option) => {
        setFamilyValue(option);
        toggleShowFamilyDropdown(false);
    }

    const togglePetDropdown = () => toggleShowPetDropdown(!showPetDropdown);
    
    const toggleFamilyDropdown = () => toggleShowFamilyDropdown(!showFamilyDropdown);

    return(
        <>
            <Breaker text='who is welcome' short />
            <div className={s.box}>
                <span className={s.box_first}>
                    <DropDown
                     options={petFriendly} 
                     label='Pet Friendly'
                     selected={petValue}
                     onChooseOption={onChoosePetOption}
                     toggleDropdown={togglePetDropdown} 
                     showDropdown={showPetDropdown}  
                    />
                </span>
                <DropDown 
                 selected={familyValue}
                 onChooseOption={onChooseFamilyOption}
                 toggleDropdown={toggleFamilyDropdown} 
                 showDropdown={showFamilyDropdown}
                 label='Family Friendly' />
            </div>
        </>
    )
};

export default WhoWelcome;