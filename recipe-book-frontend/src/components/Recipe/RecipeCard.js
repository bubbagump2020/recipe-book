import React from 'react'
import { Card, Container } from 'react-bootstrap';
import './recipe styling/recipe_styling.css'

const RecipeCard = (props) => {

    const recipe = props.attributes

    return(
        <Container fluid>
            <Card className="recipe-card">
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Body>{recipe.description}</Card.Body>
            </Card> 
        </Container>
    )
}

export default RecipeCard;