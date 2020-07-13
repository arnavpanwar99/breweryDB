import React from 'react';

import s from './Modal.module.scss';
import { TertiaryBreaker } from '../subComponents/Breaker/Breaker';
import { modalData } from '../../strings/string';
import { DarkButton, LightButton } from '../subComponents/Widgets/Widgets';


const Modal = ({onCancelClick}) => {
    return(
        <div className={s.box}>
            <TertiaryBreaker text='Activities and Events' />
            <div className={s.box_activityHolder}>
                {modalData.map(logo => <ActivityCard logo={logo} />)}
                <div className={s.box_activityHolder_activity}>
                    <div className={[s.box_activityHolder_activity_logo, s.plus].join(" ")}>+</div>
                    <div className={s.box_activityHolder_activity_text}>See More</div>    
                </div>                
            </div>
            <div className={s.box_group}>
                <DarkButton onClick={onCancelClick} />
                <LightButton />
            </div>
        </div>
    )
};

const ActivityCard = ({logo}) => {
    const { image, title } = logo;
    return (
        <div className={s.box_activityHolder_activity}>
            <div className={s.box_activityHolder_activity_logo}>
                <img
                alt='Baking'
                src={require(`../../assets/${image}.png`)}
                srcSet={`
                    ${require(`../../assets/${image}@2x.png`)} 2x, 
                    ${require(`../../assets/${image}@3x.png`)} 3x
                `}
                className={s.box_activityHolder_activity_logo_image} 
                />
            </div>
            <span className={s.box_activityHolder_activity_text}>{title}</span>
        </div>
    )
}

export default Modal;