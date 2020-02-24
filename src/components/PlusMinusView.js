import React from "react"
import '../App.css'



export const PlusMinusView = (props)=>{
    const {total,incClick,decClick} = props
    return (
        <div className="control">
            <p className="total">{total}</p>
            <div className="button-block">
                <button onClick={decClick}>-</button>
                <button onClick={incClick}>+</button>
            </div>
        </div>
    )
}