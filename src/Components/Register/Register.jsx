import React from "react";
import RegisterBody from "./Register_Body/RegisterBody";
import Header from "../Common/Header/Header";
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import CompleteFooter from "../Common/Footer/CompleteFooter";


const Register = () => {
    return <React.Fragment>
        <Header />
        <Breadcrumb detail="Register" type="reg" />
        <RegisterBody />
        <CompleteFooter />
    </React.Fragment>
}
export default Register;