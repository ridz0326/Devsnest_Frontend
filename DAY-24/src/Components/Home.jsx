import React, {useContext} from 'react';
import {LoginContext} from './LoginContext';

const Home = () => {

    const {login, setLogin, loading, setLoading} = useContext(LoginContext);

    const Loading = () => {
        return new Promise((resolve) => { setTimeout(resolve, 1000) })
      }

    return(
        <>
        <h1>Home</h1>
        <p>If not logged in can't access, Profile & Dashboard</p>

        {loading ? <h3>Loading...</h3> :
          <button className="btn"
            onClick={() => {  
              setLoading(!loading) 
              Loading().then(() => {
                setLogin(!login)
                setLoading(false)
              }) }}
              >
                {login ? "Logout" : "Login"}</button>
        }
        </>
    )
}

export default Home;
