import React from "react"

export const TodoItem = ({item,deleteFunc, compFunc})=>{
    const {id,text,isCompleted} = item
    return (
        <div className={`todo-list__item ${isCompleted=== true ? "todo-list__item--comp" : null }`}>
            <p className="todo-list__id">{id}</p>
            <p className="todo-list__text">{text}</p>
            <button onClick={deleteFunc}>delete</button>
            <button onClick={compFunc}>{isCompleted === false ? "Completed" : "Uncompleted"}</button>
        </div>
    )
}
