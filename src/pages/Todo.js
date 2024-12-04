import React, { useState } from "react";


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
            <div>
                My Todo
            </div>
            <div onClick={() => setModalOpen(true)}>
                +
            </div>
            {
                ModalOpen &&
                <div>
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
            }
        </React.Fragment>
    )
}

export default Todo;