import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import CompleteFooter from '../Common/Footer/CompleteFooter';
import Header from '../Common/Header/Header';
import LoginBody from "./Login_Body/LoginBody";



const Login = () => {
    return(
        <React.Fragment>
            <Header />
            <Breadcrumb detail="Sign In" type="reg"/>
            <LoginBody />
            <CompleteFooter />
        </React.Fragment>
    )
}
export default Login;