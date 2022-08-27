import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Login = (props) => {

    const history = useHistory();

    const navigateToHome = () => {
        history.push(AppRoutes.home)
    }

    return <div>
        <p>I am Login Screen</p>
        <Link to={AppRoutes.home}> Go to Home </Link>

        <button onClick={navigateToHome} >Go to Home</button>
    </div>
}