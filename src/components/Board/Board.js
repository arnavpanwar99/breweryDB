import React from 'react';

import s from './Board.module.scss';
import Heading from '../subComponents/Heading/Heading';

const Board = ({children, heading}) => {
    return(
        <div className = {s.board}>
            <Heading heading = {heading} />
            {children}
        </div>
    )
};

export default Board;