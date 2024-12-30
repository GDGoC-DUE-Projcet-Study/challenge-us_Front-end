import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../css/Signup.css';

const SignUp = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: '',
        pw: '',
        name: '',
        phone: '',
    });

    const InputChange = event => {
        const { name, value } = event.target;
        setUser(user => ({
            ...user,
            [name]: value,
        }));
        console.log(user)
    };



    function UserSignUp() {
        axios.post('http://127.0.0.1:8080/user/create',user)
        .then((req) => {
            console.log(req)
            navigate('./')
        }).catch((err) => {
            console.log(err)
        })


    }

    return (
        <React.Fragment>
            <div className="wrap">
            <div className="title">
                내정보
            </div>
            <div onChange={InputChange}>
                <div>
                    <input className="input" name='id' placeholder='아이디' value={user.id} />
                </div>
                <div>
                    <input className="input" name='pw' placeholder='비밀번호' value={user.pw} />
                </div>
                <div>
                    <input className="input" name='name' placeholder='이름' value={user.name} />
                </div>
                <div>
                    <input className="input" name='phone' placeholder='전화번호' value={user.phone} />
                </div>
            </div>
            <div className="button" onClick={UserSignUp}>회원가입</div>
            </div>
        </React.Fragment>
    )
}

export default SignUp;