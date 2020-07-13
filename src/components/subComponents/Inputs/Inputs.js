import React from 'react';

import s from './Input.module.scss';

export const DropDown = ({label = 'Select an option'}) => {
    return(
        <div>
            <label htmlFor='drop' className={s.dropDown_label}>{label}</label>
            <br />
            <select name='drop' id='drop' className={s.dropDown_input}>
                <option value='yes'>Yes</option>
                <option value='no' selected>No</option>
            </select>
        </div>
    )
};

export const Range = ({label = 'label'}) => {
    return(
        <div>
            <label className={s.dropDown_label}>{label}</label>
            <br />
            <input  className={s.range_input}/>
            <span className={s.range_dash} >-</span>
            <input  className={s.range_input}/>
        </div>
    )
};

export const Toggle = ({checked, hideLabel = false}) => {
    return(
        <div className={s.toggle}>
            <label className={s.toggle_switch}>
                <input type="checkbox" checked={checked} className={s.toggle_input} />
                <span className={s.toggle_slider}></span>
            </label>
            {!hideLabel && <span className={s.toggle_text}>
                {checked ? 'Open' : 'Closed'}
            </span>}
        </div>
    )
}

export const CheckBox = ({label='label'}) => {
    return(
        <div className={s.checkbox}>
            <input name={label} id={label} className={s.checkbox_input} type='checkbox' />
            <label htmlFor={label} className={s.checkbox_label}>
                {label}
            </label>
        </div>
    )
}

export const SpecialInput = ({readOnly, first}) => {
    return(
        <div className={s.special}>
            {first && <span className={s.special_text}>Specials</span>}
            <input placeholder={readOnly?'':'Enter Specials'} readOnly={readOnly} className={s.special_specialInput} />
        </div>
    )
}


export const SecondaryInput = ({label = 'Enter...'}) => {
    return(
        <div className={s.secondaryInput}>
            <label className={s.secondaryInput_text} htmlFor={label}>{label}</label>
            <input placeholder={label} name={label} id={label} className={s.secondaryInput_input} />
        </div>
    )
}

export const TextInput = ({placeholder = 'Name', label = false, short = false}) => {
    return(
        <div className={s.textInput}>
            {label && <label className={s.textInput_label} htmlFor={placeholder}>{label}</label>}
            <input
             name={placeholder}
             id={placeholder}
             style={short?{width: '157.5px'}:{}} 
             placeholder={placeholder} 
             className={s.textInput_input} 
            />
        </div>
    )
}

export const TextArea = ({text = 'Here goes a paragraph', placeholder='Describe'}) => {
    return(
        <div className={s.textarea}>
            <label htmlFor={placeholder} className={s.textarea_label}>{placeholder}</label>
            <textarea className={s.textarea_text} value={text} placeholder={placeholder} />
        </div>
    )
}