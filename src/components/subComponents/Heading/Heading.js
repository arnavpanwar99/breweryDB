import React from 'react';

import s from './Heading.module.scss';

const Heading = ({heading = "Anonymous"}) => {
    return(
        <div className = {s.heading}>
            <span className = {s.heading_text}>
                {heading}
            </span>
        </div>
    )
};

export default Heading;