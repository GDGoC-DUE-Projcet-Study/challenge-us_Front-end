import React, { useState } from "react";
//import axios from "axios";

const SignUp = () => {

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

    function UserSignUp(){
        //axios.post(`https://127.0.0.1:8080/user/create`,{user})
        //.then((req)=>{
            console.log("회원가입")
        //})
    }

    return (
        <React.Fragment>
            <div>
                회원가입
            </div>
            <div onChange={InputChange}>
                <div>
                    <input name='id' placeholder='아이디' value={user.id} />
                </div>
                <div>
                    <input name='pw' placeholder='비밀번호' value={user.pw}/>
                </div>
                <div>
                    <input name='name' placeholder='이름' value={user.name}/>
                </div>
                <div>
                    <input name='phone' placeholder='전화번호' value={user.phone}/>
                </div>
            </div>
            <div onClick={UserSignUp}>회원가입</div>
        </React.Fragment>
    )
}

export default SignUp;