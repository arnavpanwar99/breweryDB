import React from 'react';

import Header from './../Header/Header';
import s from './Container.module.scss';
import Card from '../Card/Card';
import CostComponent from '../CostComponent/CostComponent';
import TimingComponent from '../TimingComponent/TimingComponent';
import Board from '../Board/Board';
import RestrictionComponent from '../RestrictionComponent/RestrictionComponent';
import Options from '../Options/Options';
import Special from '../Special/Special';
import WhoWelcome from '../WhoWelcome/WhoWelcome';
import Attractions from '../Attractions/Attractions';
import Sales from '../Sales/Sales';
import Events from '../Events/Events';

const Container = () => {
    return(
        <div className = {s.container}>
            <Header />
            <Card>
                <Board heading='tour related search filters'>
                    <CostComponent />
                    <TimingComponent />
                    <RestrictionComponent />
                </Board>
                <Board heading='TAP ROOM / BREWPUB SEARCH FILTERS'>
                    <Options />
                    <Special />
                    <WhoWelcome />
                    <Attractions />
                    <Sales />
                    <Events />
                </Board>
            </Card>
            <Card>
                
            </Card>
        </div>
    )
};

export default Container;