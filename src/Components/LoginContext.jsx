import React, {createContext, useState} from 'react';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    

    return (
        <LoginContext.Provider value= {{login, setLogin, loading, setLoading}} >
            {props.children}
        </LoginContext.Provider>
    )

}

export default LoginContextProvider;
