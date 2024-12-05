import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css';
import axios from "axios";

const LogIn = () => {

    const navigate = useNavigate();

    const [user, getUser] = useState({
        id: '',
        pw: '',
    });

    const InputChange = event => {
        const { name, value } = event.target;
        getUser(user => ({
            ...user,
            [name]: value,
        }));
        console.log(user)
    };

    function UserLogIn() {
        axios.get(`http://127.0.0.1:8080/user/get`,{"id":"아이디"})
        .then((req)=>{
        console.log("로그인")
        console.log(user)
        navigate('./todo')
        })
    }


    return (
        <React.Fragment>
            <div className="wrap">
                <div className="title">
                    로그인
                </div>
                <div onChange={InputChange}>
                    <div>
                        <input className="input" name='id' placeholder='아이디' />
                    </div>
                    <div>
                        <input className="input" name='pw' placeholder='비밀번호' />
                    </div>
                    <div>
                        <div className="button" onClick={UserLogIn}>확인</div>
                    </div>
                    <div>
                        <span>계정이 없으신가요?</span>
                        <a href='./signup'>회원가입</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LogIn;