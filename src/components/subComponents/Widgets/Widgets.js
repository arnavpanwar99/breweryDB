import React from 'react';

import s from './Widgets.module.scss';

export const TimeCard = ({startTime = '12:00PM', finishTime='2:00AM'}) => {
    return(
        <div className={s.group}>
            <div className = {s.group_card}>
                <span className={s.group_card_text}>
                    {startTime}
                </span>
            </div>
            <span className={s.group_divide} />
            <div className = {s.group_card}>
                <span className={s.group_card_text}>
                    {finishTime}
                </span>
            </div>
        </div>
    )
}

export const PrimaryText = ({text = 'text', secondary=false}) => {
    return(
        <span style={secondary?{textAlign: 'left'}:{}} className={s.primaryText}>
            {secondary ? 'Add hours' : text}
        </span>
    )
} 

export const AddEvent = ({text = 'Add an event', disabled = false, onClick}) => {
    return(
        <div onClick={onClick} className={s.event}>
            <div className={s.event_circle}>+</div>
            <span className={s.event_text}>{text}</span>
        </div>
    )
}

export const PrimaryButton = ({text = 'Start', simple = false}) => {
    return(
        <div style={simple?{marginLeft: 0}:{}} className={s.primaryButton}>
            {text}
        </div>
    )
}

export const FinishButton = ({text = 'Finish', last = false}) => {
    return(
        <div style={last?{marginLeft: '600px'}:{}} className={s.finishButton}>
            {text}
        </div>
    )
};

export const DarkButton = ({text = 'Cancel', onClick}) => {
    return(
        <div onClick={onClick} className={s.darkButton}>
            {text}
        </div>
    )
}

export const LightButton = ({text = 'Finish'}) => {
    return(
        <div className={s.lightButton}>
            {text}
        </div>
    )
}