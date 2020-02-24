import React from "react"
import {TodoItem} from "./TodoItem";
import '../style/todoStyle.css'

export const TodoList = ({todoItems,addClick,delClick,compFunc,handleFilter,changeAll})=>{

    return (
        <div className="todo-list">
            <div className="todo-list__control">
                <input type="text" className="todo-list__input" />
                <button onClick={()=>{
                    if(document.querySelector('.todo-list__input').value !== "") {
                        addClick(document.querySelector('.todo-list__input').value)
                        document.querySelector('.todo-list__input').value = ""
                    }
                }}>enter</button>
            </div>
            {todoItems.map((item,index)=>{
                return <TodoItem key={index} item={item} deleteFunc={()=>{delClick(item.id)}} compFunc={()=>compFunc(item.id)}/>
            })}
            <div className="filter">
             <div>
                <input id="completed" type="checkbox" className="todo-list__input" onChange={handleFilter} name={"isCompleted"}/>
                <label htmlFor="completed">Completed</label>
             </div>
                <button id="all" type="button" className="todo-list__input" onClick={changeAll} name={"isAll"}>all</button>
            </div>
        </div>
    )
}