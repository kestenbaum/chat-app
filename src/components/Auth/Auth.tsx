import {FC} from "react";
import {auth, provider} from "../../firebase-config.ts";
import {signInWithPopup} from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

import style from "./Auth.module.css";

const Auth:FC = ({setAuth}:any) => {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken)
            setAuth(true)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className={style.auth}>
            <p>Sign in Google to Continue</p>
            <button onClick={signInWithGoogle}>Sign in Google</button>
        </div>
    );
};

export default Auth;