import React from 'react'

const IngredientCard = (props) => {
    return(
        <div>
            <h4>{props.attributes.name}</h4>
            <h5>{props.attributes.measurement}</h5>
        </div>
    )
}

export default IngredientCard;