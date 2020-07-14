import React, { useState } from 'react';

import s from './Input.module.scss';

const defaultOptions = ['Yes', 'No'];

export const DropDown = ({
    label = 'Select an option', 
    options=defaultOptions, 
    onChange, 
    selected,
    toggleDropdown,
    onChooseOption,
    apart=false,
    showDropdown = false
}) => {
    return(
        <div style={apart?{marginRight: '111px'}:{}} className={s.dropDown}>
            <label htmlFor='drop' className={s.dropDown_label}>{label}</label>
            <br />
            <span className={s.dropDown_parent}>
                <input value={selected} readOnly onChange={onChange} name='drop' id='drop' className={s.dropDown_input} />
                {
                    showDropdown &&
                    <div className={s.dropDown_input_optionContainer}>
                        {options.map(option => (
                            <div key={option} onClick={()=>onChooseOption(option)} className={s.dropDown_input_optionContainer_option} value={option}>{option}</div>
                        ))}
                    </div>
                }
                
                <span onClick={toggleDropdown} className={s.dropDown_arrowBox}>
                    <span className={s.dropDown_arrowBox_arrow}></span>
                </span>
            </span>            
        </div>
    )
};

export const Range = ({label = 'label', minValue, maxValue, onRangeChange}) => {
    return(
        <div>
            <label className={s.dropDown_label}>{label}</label>
            <br />
            <input value={minValue} onChange={onRangeChange} placeholder='$5.00' className={s.range_input}/>
            <span className={s.range_dash} >-</span>
            <input value={maxValue} onChange={e=>onRangeChange(e, true)} placeholder='$25.00' className={s.range_input}/>
        </div>
    )
};

export const Toggle = ({checked = true, hideLabel = false, onInpuClick}) => {
    const [show, toggleShow] = useState(true);
    return(
        <div className={s.toggle}>
            <label className={s.toggle_switch}>
                <input onChange={e=>toggleShow(!show)} type="checkbox" checked={show} className={s.toggle_input} />
                <span className={s.toggle_slider}></span>
            </label>
            {!hideLabel && <span className={s.toggle_text}>
                {show ? 'Open' : 'Closed'}
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

export const TextInput = ({placeholder = 'Name', label = false, short = false, apart}) => {
    return(
        <div style={apart?{marginTop: '10px'}:{}} className={s.textInput}>
            {label && <label className={s.textInput_label} htmlFor={placeholder}>{label}</label>}
            <input
             name={placeholder}
             id={placeholder}
             style={short?{width: '157.5px'}:{}} 
             placeholder={placeholder} 
             className={apart?[s.textInput_input, s.apart].join(" "):s.textInput_input} 
            />
        </div>
    )
}


export const TextArea = ({text = 'Here goes a paragraph', placeholder='Describe', onChange}) => {
    return(
        <div className={s.textarea}>
            <label htmlFor={placeholder} className={s.textarea_label}>{placeholder}</label>
            <textarea className={s.textarea_text} onChange={onChange} value={text} placeholder={placeholder} />
        </div>
    )
}