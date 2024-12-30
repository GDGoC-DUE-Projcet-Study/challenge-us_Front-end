import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {

    var userId = localStorage.getItem('id');

    const [user, getUser] = useState();

    const [userinfo, getinfo] = useState(false)

    const InputChange = event => {
        const { name, value } = event.target;
        getUser(user => ({
            ...user,
            [name]: value,
        }));
        console.log(user)
    };

    function UserLogIn() {
        axios.post('http://127.0.0.1:8080/user/login', user)
            .then((res) => {
                getUser(res.data)
                getinfo(true)
            }
            )
            .catch((err) => {
                alert("존재하지 않는 아이디 입니다.")
            })
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         //console.log(userId)
    //         await axios.get(`http://127.0.0.1:8080/todo/get/${userId}`)
    //             .then((res) => {
    //                 try {
    //                     console.log(res.data)
    //                     getUser(res.data)
    //                 } catch {
    //                     return res
    //                 }
    //             })
    //     }
    //     fetchData();
    // }, []);
    return (
        <React.Fragment>
            <div className="wrap">
                <div className="title">
                    내정보
                </div>
                {
                    userinfo ?
                        (
                            <div>
                                <div>
                                    <input className="input" name='id' placeholder={user.id} />
                                </div>
                                <div>
                                    <input className="input" name='pw'/>
                                </div>
                                <div>
                                    <input className="input" name='phone' placeholder={user.phone} />
                                </div>
                                <div>
                                    <input className="input" name='phone' placeholder={user.name} />
                                </div>
                            </div>
                        ) :
                        (
                            <div>
                                <div onChange={InputChange}>
                                    <div>
                                        <input className="input" name='id' placeholder='아이디' />
                                    </div>
                                    <div>
                                        <input className="input" name='pw' placeholder='비밀번호' />
                                    </div>
                                </div>
                            </div>
                        )
                }

                <div>
                    <div className="button" onClick={UserLogIn}>확인</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default User;