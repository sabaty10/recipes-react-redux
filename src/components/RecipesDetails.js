import React from 'react'
import { useSelector } from 'react-redux'
const RecipesDetails = () => {
    const recipe = useSelector(state => state.recipeDetails.recipeDetails)

    return (
        <div className="display-text">
            <div className="recipe-details">
                <div className="recipe-details-img-name">
                    <img src={recipe.image}></img>
                    <span>
                        <h1>{recipe.label}</h1>
                        <p>Calories: {Math.floor(recipe.calories)}</p>
                        <p>If you want to make it...  <a href={recipe.url} target="_blank"><i class="globe icon"></i></a></p>
                    </span>
                </div>
                <ul className="details-ul">
                    <p>Ingredients:</p>
                    {recipe.ingredients.map((ingredient) => {
                        return <li>{ingredient.text}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RecipesDetails
