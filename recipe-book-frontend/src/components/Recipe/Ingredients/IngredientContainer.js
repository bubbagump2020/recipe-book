import React, { useEffect } from 'react'
import IngredientCard from './IngredientCard'
import { CircularProgress } from '@material-ui/core'
import { ROOT_URL } from '../../../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { allIng } from '../../../redux/actions/ingActions'

const IngredientContainer = (props) => {

    const dispatch = useDispatch()
    const { ingredients } = useSelector(state => ({ ingredients: state.ingredient.allIngredients }))    

    useEffect(() => {
        const fetchIngredients = async () => {
            const response = await fetch(`${ROOT_URL}/recipes/${props.recipe.name}/ingredients`)
            const ingData = await response.json()
            const dispatchData = ingData.filter(ingredient => ingredient.recipe_id === props.recipe.id )
            dispatch(allIng(dispatchData))
        }
        fetchIngredients()
    }, [props.recipe])

    // while(props.ing.length === 0){
    //     return <CircularProgress />
    // }
    const listIngredients = () => {
        return ingredients.map(ingredient => {
            return(
                <div key={ingredient.id}>
                    <IngredientCard ing={ingredient} recipe={props.recipe} />
                </div>
            )
        })
    }


    return(
        <div>
            {listIngredients()}
        </div>
    )
}

export default IngredientContainer;