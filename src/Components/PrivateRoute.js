import React, { useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LoginContext} from './LoginContext';



const PrivateRoute = ({ component: Component, ...rest }) => {  // from App.js path goes inside rest and component goes in children and the html of component is rendered inside return

    const {login} = useContext(LoginContext);

    return (

        <Route {...rest} 
            render={(props) => login?(<Component{...props}/>):(<Redirect to={'/'}/>)}/>
    );
}

export default PrivateRoute;


