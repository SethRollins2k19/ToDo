export const PlusMinusReducer = (state = {
    total: 0
}, action)=>{
    switch (action.type) {
        case "INCREMENT": {
            return {
                ...state,
                total: state.total + 1
            }
        }
        case "DECREMENT": {
            return {
                ...state,
                total: state.total === 0 ? 0 : state.total - 1
            }
        }
        case "COMPLETE" : {
            return {

            }
        }
        default:{
            return state
        }
    }
}