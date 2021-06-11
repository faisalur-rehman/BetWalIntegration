import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import CompleteFooter from '../Common/Footer/CompleteFooter';
import Header from '../Common/Header/Header';
import MyBetsBody from './MyBets_Body/MyBetsBody';


const Accumulator = () => {
    return (
        <React.Fragment>
            <Header />
            <Breadcrumb detail="My Bets"/>
            <MyBetsBody />
            <CompleteFooter />
        </React.Fragment>
    )
}
export default Accumulator;
