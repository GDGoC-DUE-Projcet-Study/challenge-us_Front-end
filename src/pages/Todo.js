import React, { useState, useEffect } from "react";
import '../css/Todo.css'
import axios from "axios";

const Todo = () => {

    var userId = localStorage.getItem('id');

    const [todolist, setLists] = useState([]);
    const [ModalOpen, setModalOpen] = useState(false);

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        //start_date: '',
        //end_date: ''
    });

    const InputChange = event => {
        const { name, value } = event.target;
        setTodo(todo => ({
            ...todo,
            [name]: value,
        }));
        console.log(todo)
    };

    function Write() {
        axios.post(`http://127.0.0.1:8080/todo/create?id=${userId}`, todo)
            .then((res) => {
                if (res) {
                    console.log(res.data)
                    setLists(res.data)
                } else {
                    //msg를 다루는 부분
                }
            }).catch((err) => {
                console.log(err)
            })
        setModalOpen(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log(userId)
            await axios.get(`http://127.0.0.1:8080/todo/get/${userId}`)
                .then((res) => {
                    try {
                        console.log(res.data)
                        setLists(res.data);
                    } catch {
                        return
                    }
                })
        }

        fetchData();
    }, [setLists]);


    return (
        <React.Fragment>
            <div className={ModalOpen ? 'Modal' : ''}>
                <div className="title">
                    My Todo
                </div>
                <div className="modalbutton" onClick={() => setModalOpen(true)}>
                    목표 추가
                </div>
                {
                    todolist.length === 0 ?
                        (
                            <div>목표를 등록해주세요</div>
                        ) :
                        todolist.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div>{item.title}</div>
                                </div>
                            )
                        })
                }

                {
                    ModalOpen &&
                    <div className="modaloverlay">
                        <div className="modalcontent">
                            <div className="modalcolsebutton" onClick={() => setModalOpen(false)}>X</div>
                            <div>목표작성</div>
                            <div onChange={InputChange}>
                                <div>
                                    <input className="modalinput" name='title' placeholder='제목' />
                                </div>
                                <div>
                                    <input className="modalinput" name='description' placeholder='내용' />
                                </div>
                                <div>
                                    <input className="modalinput" name='start_date' placeholder='시작일' />
                                    <input className="modalinput" name='end_date' placeholder='종료일' />
                                </div>
                            </div>
                            <div className="modalbutton" onClick={() => Write()}>작성 완료</div>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Todo;