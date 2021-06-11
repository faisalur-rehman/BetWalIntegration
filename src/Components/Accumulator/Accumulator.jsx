import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import CompleteFooter from '../Common/Footer/CompleteFooter';
import Header from '../Common/Header/Header';
import AccumulatorBody from './Accumulator_Body/AccumulatorBody';

const Accumulator = () => {
    return (
        <React.Fragment>
            <Header />
            <Breadcrumb detail="Accumulator"/>
            <AccumulatorBody />
            <CompleteFooter />
        </React.Fragment>
    )
}
export default Accumulator;