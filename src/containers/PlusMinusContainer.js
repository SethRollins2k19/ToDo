import {connect} from 'react-redux'
import {PlusMinusView} from "../components/PlusMinusView"
import {decrementTotal, incrementTotal} from "../actions/PlusMinusActions";

const mapStateToProps = state =>{
    return {
        total: state.total
    }
}

const mapDispatchToProps = dispatch =>({
    incClick: ()=>dispatch(incrementTotal()),
    decClick: ()=>dispatch(decrementTotal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlusMinusView)