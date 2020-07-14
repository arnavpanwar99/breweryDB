import React from 'react';

import s from './Options.module.scss';
import Breaker from '../subComponents/Breaker/Breaker';
import { CheckBox } from '../subComponents/Inputs/Inputs';
import { foodOption, relatedOption, entertainmentOption, seatingOption } from '../../strings/string';

const Options = () => {
    return(
        <div className={s.grid}>
            <div className={s.grid_child}>
                <List options={foodOption}  heading='food options' />
                <List options={relatedOption} heading='related options' />
            </div>
            <div className={s.grid_child}>
                <List options={entertainmentOption} heading='entertainment options' />
                <List options={seatingOption} heading='seating options' />
            </div>
        </div>
    )
};

const List = ({heading='options', options={}}) => {
    return(
        <div className={s.box}>
            <Breaker short text={heading} />
            <span className={s.box_warn}>Check all that apply</span>
            <div className={s.box_inputContainer}>
                {options.map(option => (
                    <CheckBox key={option} label={option} />
                ))}
            </div>
        </div>
    )
}

export default Options;