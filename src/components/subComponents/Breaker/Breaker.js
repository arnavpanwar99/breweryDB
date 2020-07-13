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

export const SecondaryBreaker = ({text='Anonymous'}) => {
    return(
        <div className={s.secondaryBreaker}>
            <span className={s.secondaryBreaker_text}>
                {text}
            </span>
        </div>
    )
}

export const TertiaryBreaker = ({text='Anonymous'}) => {
    return(
        <div className={s.tertiaryText}>
            {text}
        </div>

    )
}