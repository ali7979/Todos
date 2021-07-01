import React from 'react';

const Todo = (props) => {



    return (
        <>
            <div className="todo_style">

                <a href="#" class="btn" onClick={ ()=>{
                    props.selectt(props.id);
                }}>X</a>
                <li className="list_style">{props.t}</li>
            </div>


        </>)

}

export default Todo;