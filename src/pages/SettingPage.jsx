import React, { useEffect, useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import account from '../assets/data/account';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const SettingPage = () => {

    const user = localStorage.getItem("login-token");

    const [accounts, setAccounts] = useState();
    const [content, setContent] = useState(0);
    const [status, setStatus] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login")
        } else {
            const accounts = account.find(account => account.userName === user)
            setAccounts(accounts);
        }
    });


    const handleLogout = () => {
        localStorage.removeItem("login-token");
        navigate("/home");
        toast.success("成功退出")
    }

    const handleContent = (value) => {
        setContent(value);
    }
    const handleChangeStatus = () => {
        setStatus(false);
    }
    const handleCancelChange = () => {
        setStatus(true)
    }

    const showContent = () => {
        return (
            <>
                {content === 0 ?
                    <>
                        <div className='setting_section_right_mid-container'>
                            <div className='setting_section_right_mid_input'>
                                <p>用户名</p>
                                <input placeholder={accounts.userName} disabled={status} />
                            </div>
                            <div className='setting_section_right_mid_input'>
                                <p>电子邮件</p>
                                <input placeholder={accounts.email} disabled={status} />
                            </div>
                            <div className='setting_section_right_mid_input'>
                                <p>电话号码</p>
                                <input placeholder={accounts.phoneNumb} disabled={status} />
                            </div>
                            <div className='setting_section_right_mid_input setting_section_right_mid_input-button'>
                                {status === true ?
                                    <button onClick={handleChangeStatus} id='edit'>编辑</button>
                                    : <>
                                        <button id='save'>Save</button>
                                        <button onClick={handleCancelChange} id='cancel'>取消</button>
                                    </>}
                            </div>
                        </div>
                        <div className='setting_section_right_mid-container'>
                            <div className='setting_section_right_mid_input'>
                                <p>密码</p>
                                <input type="password" disabled={status} />
                            </div>
                            {status === false ?
                                <div className='setting_section_right_mid_input'>
                                    <p>确认您的密码</p>
                                    <input type="password" disabled={status} />
                                </div>
                                : <></>}
                        </div>
                    </>
                    :
                    <div className='setting_section_right_mid'>
                        
                    </div>
                }
            </>
        )
    }

    return (
        <>
            {accounts ?
                <div className='page page-setting'>
                    <div className='setting_section setting_section-profile'>
                        <img src={accounts.avatar} alt="avatar"></img>
                        <div className='setting_section_profile-content'>
                            <p id="title">总体</p>
                            <p id='des'>intermediate</p>
                        </div>
                        <div className='setting_section_profile-content'>
                            <p id="title">语法</p>
                            <p id="des">beginner</p>
                        </div>
                        <div className='setting_section_profile-content'>
                            <p id="title">听力</p>
                            <p id="des">beginner</p>
                        </div>
                        <div className='setting_section_profile-content'>
                            <p id="title">阅读</p>
                            <p id="des">intermediate</p>
                        </div>
                        <button id='logout-button' onClick={handleLogout}><LogoutIcon /> 退出 </button>
                    </div>
                    <div className='setting_section setting_section-right'>
                        <div className='setting_section_right-top'>
                            <p onClick={() => handleContent(0)} id={content === 0 ? "chose" : ""}>用户信息</p>
                            <p onClick={() => handleContent(1)} id={content === 1 ? "chose" : ""}>仪表板</p>
                        </div>
                        <div className="setting_section_right-mid">
                            {showContent()}
                        </div>
                    </div>
                </div> : <></>}
        </>
    )
}

export default SettingPage