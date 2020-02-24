export const addTodo = text =>{
    return {
        type: "ADD_TODO",
        text: text,
        completed: false
    }
}
export const completeTodo = id =>{
    return {
        type: "COMPLETED",
        id: id
    }
}

export const delTodo = id => {
    return {
        type: "DELETE_TODO",
        id: id
    }
}


export const filter = ()=>{
    return {
        type: "FILTER"
    }
}
export const defaultFilter = ()=> ({
    type: "FILTER_ALL"
})
export const  filterChange = (event) => async dispatch => {
    let target = event.target
    let value = target.type === "checkbox" ? target.checked : target.value
    let name = target.name
    await dispatch({
        type: "FILTER_ONCHANGE",
        name,
        value
    })
    await dispatch({type: "FILTER"})
}