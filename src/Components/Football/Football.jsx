import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import CompleteFooter from '../Common/Footer/CompleteFooter';
import Header from '../Common/Header/Header';
import FootballBody from "./Football_Body/FootballBody";

const Football = () => {
    return (<React.Fragment>
        <Header />
        <Breadcrumb detail="COMPETITIONS" />
        <FootballBody />
        <CompleteFooter />
    </React.Fragment>)

}
export default Football;