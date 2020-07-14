import React, { useRef, useEffect } from 'react';

import s from './Stick.module.scss';

const Stick = ({currentPosition, maxSize, navigationKeys}) => {

    const stickRef = useRef(null);

    useEffect(() => {
        stickRef.current.style.gridTemplateColumns = `repeat(${maxSize}, ${(100/maxSize)}%)`;
    }, [currentPosition, maxSize])

    return(
        <div className={s.main}>
            <section ref={stickRef} className={s.main_box}>
                {navigationKeys.map((key, index) => (
                    <div 
                     style={returnChildStyles(index, currentPosition, maxSize)}
                     key={key} 
                     className={s.main_box_child}>
                        {key}
                    </div>
                ))}
            </section>
        </div>
    )
}

const returnChildStyles = (index, currentPosition, max) => {
    const styles = {};
    if(index+1 === currentPosition){
        styles.backgroundColor = '#003b71';
    }

    if(index === 0){
        styles.clipPath = 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)';
        styles.borderRadius = '20px 0 0 20px';
    }else if(index !== 0 && index+1 < max){
        styles.clipPath = 'polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%)';
    }else{
        styles.clipPath = 'polygon(100% 1%, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%)';
        styles.borderRadius = '0 20px 20px 0';
    }

    return styles;
}

export default Stick;