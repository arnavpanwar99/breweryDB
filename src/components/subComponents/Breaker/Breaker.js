import React from 'react';

import s from './Breaker.module.scss';

const Breaker = ({text = 'Anonymous', short=false}) => {
    return(
        <div style={short?{marginBottom: 0}:{}} className={s.breaker}>
            <span className={s.breaker_text}>
                {text}
            </span>
            <hr className={s.breaker_line} />
        </div>
    )
};

export default Breaker;

export const SecondaryBreaker = ({text='Anonymous', small=false}) => {
    return(
        <div style={small?{fontSize:'7px', padding: 0, margin: '0 0 7px 0', height: '12px'}:{}} className={s.secondaryBreaker}>
            <span className={s.secondaryBreaker_text}>
                {text}
            </span>
        </div>
    )
}

export const TertiaryBreaker = ({text='Anonymous', tiny=false}) => {
    return(
        <div style={tiny?{margin: 0, fontSize: '9px', height: '19px'}:{}} className={s.tertiaryText}>
            {text}
        </div>

    )
}