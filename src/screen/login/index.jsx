import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Login = (props) => {

    const history = useHistory();

    const navigateToHome = () => {
        history.push(AppRoutes.home)
    }

    const navigateToHomeWithState = () => {
        history.push({
            pathname : AppRoutes.home,
            state: {
                name: "kamesh",
                age: 25,
                role: "Technical Lead"
            }
        })
    }

    return <div>
        <p>I am Login Screen</p>
        <Link to={AppRoutes.home}> Go to Home </Link><br />
        <Link to={"/profile/2/3"}> Go to view </Link><br />

        <button onClick={navigateToHome} >Go to Home</button>
        <button onClick={navigateToHomeWithState} >Go to Home with state</button>
    </div>
}