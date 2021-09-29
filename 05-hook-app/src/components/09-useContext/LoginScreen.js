import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {

    const handleSubmit = () => {
        console.log("Submit");
    }

    const { user, setUser } = useContext(UserContext);

    console.log(user, setUser);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            {/* <form onSubmit={handleSubmit}> */}
                <div>
                    <input
                        placeholder="Tu nombre"
                        name="nombre"
                        className="form-control"

                    />
                </div>
                <button
                    // type="submit"
                    className="btn btn-outline-primary mt-2"
                    onClick={() => {
                        console.log("Login");
                        setUser({
                            id: 25646,
                            nombre: 'Carlos Adolfo'
                        })
                    }}
                >
                    Login
                </button>
            {/* </form> */}
        </div>
    )
};


export default LoginScreen;
