import {connect} from 'react-redux'
import {TodoList} from "../components/TodoList";
import {addTodo, completeTodo, defaultFilter, delTodo, filter, filterChange} from "../actions/todoAction";


const mapStateToProps = (state)=>{
    const { todoReducer} = state
    return {
        todoItems: [...todoReducer.filteredItems]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addClick: (text) => {
            dispatch(addTodo(text))
            dispatch(filter())

        },
        delClick: (id) => {
            dispatch(delTodo(id))
            dispatch(filter())

        },
        compFunc: (id) => {
            dispatch(completeTodo(id))
            dispatch(filter())
        },
        changeAll: ()=>dispatch(defaultFilter()),
        handleFilter: (event) => dispatch(filterChange(event))
    }
}



export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
