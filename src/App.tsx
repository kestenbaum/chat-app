import {useState} from "react";
import './App.css'
import Auth from "./components/Auth/Auth.tsx";

import Cookies from "universal-cookie";
import Chat from "./components/Chat/Chat.tsx";
const cookies = new Cookies();

function App() {
    const [isAuth, setAuth] = useState(cookies.get("auth-token"));

    if (!isAuth) {
        return (
        <>
            <Auth setAuth={setAuth}/>
        </>
      )
    }

    return <>
             <Chat/>
    </>
}

export default App
