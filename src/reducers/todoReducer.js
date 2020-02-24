import {combineReducers} from "redux"
import {filterHelper} from "./helpers/filterHelpers";


const todoReducer = (state={
    items: [],
    filteredItems: [],
    filter: {
        isAll: true,
        isCompleted: false
    }
},action)=>{
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                items: [...state.items, {
                    id: state.items.length === 0 ? 1 : state.items[state.items.length - 1].id + 1,
                    text: action.text,
                    isCompleted: false
                }]
            }

        }
        case "DELETE_TODO":{
            return {
                ...state,
                items: state.items.filter(item=>item.id!==action.id).map((item,index)=>{
                    item.id = index + 1
                    return item
                })
            }
        }
        case "COMPLETED": {
            return {
                ...state,
                items: [...state.items.map((item)=>{
                    if(item.id === action.id){
                        item.isCompleted = !item.isCompleted
                    }
                    return item
                })]
            }
        }
        case "FILTER_ONCHANGE": {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    isAll: false,
                    [action.name]: action.value
                }
            }
        }
        case "FILTER": {
            return {
                ...state,
                filteredItems: filterHelper(state)
            }
        }
        case "FILTER_ALL":{
            return {
                ...state,
                filteredItems: [...state.items],
                filter: {
                    ...state.filter,
                    isAll: true
                }
            }
        }
        default: return  state
    }
}

// const filterReducer = (state = {completed: false}, action)=>{
//     switch (action.type) {
//         case "FILTER_ONCHANGE": {
//             return {
//                 ...state,
//                 completed: !state.completed
//             }
//         }
//         case "FILTER": {
//             return {
//                 ...state,
//
//             }
//         }
//         default: return  state
//     }
// }

export default combineReducers({
    todoReducer
})
