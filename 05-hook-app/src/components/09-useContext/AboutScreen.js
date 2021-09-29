import React, { useContext } from 'react';
import { UserContext } from './UserContext';


const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    console.log(user, setUser);

    const handleClick = () => {
        console.log("handleClick")
        setUser({});
    }

    return (
        <div>
            <h1>AboutScreem</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
            className="btn btn-warning"
            onClick={ handleClick }
            >
                Logout
            </button>

        </div>
    )
};

export default AboutScreen;
