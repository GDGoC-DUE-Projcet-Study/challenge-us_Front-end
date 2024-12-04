import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    function UserLogIn(){
        //axios.post(`https://127.0.0.1:8080/user/get`,{user})
        //.then((req)=>{
            console.log("로그인")
            console.log(user)
            navigate('./todo')
        //})
    }


    return (
        <React.Fragment>
            <div>
                로그인
            </div>
            <div onChange={InputChange}>
                <div>
                    <input name='id' placeholder='아이디' />
                </div>
                <div>
                    <input name='pw' placeholder='비밀번호' />
                </div>
                <div>
                    <div onClick={UserLogIn}>확인</div>
                </div>
                <div>
                    <span>계정이 없으신가요?</span>
                    <a href='./signup'>회원가입</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LogIn;