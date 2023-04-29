import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import App from './App';

const Login = () => {
    const [isVerified, setIsVerified] = useState(false);

    const checkPw = () => {
        // gets the current input value
        const answer = document.getElementById("password").value;

        if (answer === "Password") {
            setIsVerified(true);
        } else {
            alert("Sorry, that's not it");
        }
    };

    return (
        <>
            {isVerified ? <App />
                :
                (
                    <form onSubmit={checkPw}>
                        <input id="password" name="password"/>
                        <button>open sesame</button>
                    </form>
                )
            }
        </>)
};

export default Login;