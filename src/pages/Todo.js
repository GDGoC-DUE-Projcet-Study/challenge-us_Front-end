import React, { useState } from "react";
import '../css/Todo.css'

const Todo = () => {

    const [ModalOpen, setModalOpen] = useState(false);

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        start_date: '',
        end_date: ''
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
        setModalOpen(false)
        //axios.post(`https://127.0.0.1:8080/todo/create`,{user})
        //.then((req)=>{
        console.log("목표생성")
        //})
    }

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
                    ModalOpen &&
                    <div className="modaloverlay" onClick={() => setModalOpen(false)}>
                        <div className="modalcontent">
                            <div>목표작성</div>
                            <div onChange={InputChange}>
                                <div>
                                    <input name='title' placeholder='제목' />
                                </div>
                                <div>
                                    <input name='description' placeholder='내용' />
                                </div>
                                <div>
                                    <input name='start_date' placeholder='시작일' />
                                    <input name='end_date' placeholder='종료일' />
                                </div>
                            </div>
                            <div onClick={() => Write()}>작성 완료</div>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Todo;