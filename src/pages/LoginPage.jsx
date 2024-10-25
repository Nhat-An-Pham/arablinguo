import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import accounts from '../assets/data/account';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const user = localStorage.getItem("login-token");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            navigate("/home")
        }
    });

    const handleLogin = () => {
        const account = accounts.find((account) => account.userName === userName && account.password === password);
        if (account) {
            // Redirect to another page or set user session
            const token = account.userName;
            // Store the token in session storage
            localStorage.setItem('login-token', token);
            navigate("/home");
            toast.success("登陆成功")
        } else {
            setError('用户名或密码无效');
        }
    }


    return (
        <div className='authpage-container'>
            {/* <img alt='' className='authpage-background' src={require("../assets/background/loginback.webp")} /> */}
            <div className='login-container'>
                <h1 className="login-section login-section-title">欢迎回来</h1>
                <div className="login-section login-section-email">
                    <TextField style={{ width: "100%" }} label="电子邮件" variant="outlined"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="login-section login-section-password">
                    <TextField style={{ width: "100%" }} label="密码" type={!showPassword ? "password" : "text"} variant='outlined' onChange={(e) => setPassword(e.target.value)} />
                    {showPassword === false ?
                        <VisibilityIcon
                            style={{ position: "absolute", right: "0", height: "100%", padding: "0px 10px", cursor: "pointer" }}
                            onClick={() => setShowPassword(true)}
                        /> : <VisibilityOffIcon
                            style={{ position: "absolute", right: "0", height: "100%", padding: "0px 10px" }}
                            onClick={() => setShowPassword(false)}
                        />}
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className="login-section login-section-button" onClick={() => handleLogin()}>登录<br/></button>
                <div className='login-section login-section-link'>
                    <p>
                        还没有帐户？
                        <br />
                        <Link to="/register">在这里注册</Link>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default LoginPage;