import React from 'react';

import s from './Card.module.scss';

const Card = ({children}) => {
    return(
        <section className = {s.card}>
            {children}
        </section>
    )
};

export default Card;