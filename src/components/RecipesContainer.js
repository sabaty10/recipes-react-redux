import React from 'react';
import { useSelector } from "react-redux";
import Recipe from './Recipe';
import insertImage from '../images/insert-image.png';
import loadingImage from '../images/loading-image.png';

const RecipesContainer = () => {
    const recipes = useSelector(state => state.recipes.recipes)
    const query = useSelector(state => state.search.query)
    const loader = useSelector(state => state.search.isLoading)

    const displayRecipesHandler = () => {
        if (recipes.length === 0 && query === '') {
            return <div className="display-text">
                <div>Search for a recipe!</div>
                <div className="image-container">
                    <img src={insertImage}></img>
                </div>
            </div>
        } else if (recipes.length === 0 && query !== '' && !loader) {
            return <div className="display-text">There are no matches</div>
        } else if (loader) {
            return <div className="display-text">
                <img src={loadingImage}></img>
                <div >Loading...</div>
            </div>
        } else {
            return <div className="recipes-container">
                {recipes.map(recipe => <Recipe key={recipe.recipe.uri} recipe={recipe} />)}
            </div>
        }
    }
    return (
        <div>
            {displayRecipesHandler()}
        </div>
    )
}

export default RecipesContainer;