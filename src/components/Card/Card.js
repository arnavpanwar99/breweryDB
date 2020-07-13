import React from 'react';

import s from './Card.module.scss';

const Card = ({children, plain=false}) => {
    return(
        <section style={plain?{padding: '0 0 16px 0'}:{}} className = {s.card}>
            {children}
        </section>
    )
};

export default Card;