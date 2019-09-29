import React from "react";
import User from "../../components/User";
const AuthPage = ()=>{
    return (
        <div>
            <h1>This is Auth Page</h1>
            <User name="Sai Yashwanth" age={23}/>
        </div>
    )
}

export default AuthPage;