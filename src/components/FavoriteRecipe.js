import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { showRecipeDetails } from '../actions';
import { useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';

const FavoriteRecipe = ({ recipe }) => {
    const [rec, setRec] = useState(recipe)
    const dispatch = useDispatch();
    return (
        <Link to="/recipe">
            <div className="favorite-recipe" onClick={() => dispatch(showRecipeDetails(rec))}>
                <Typography
                    variant="h6"
                    component="h2" // it will looks like in F12 like h2 but its h6
                    color="inherit"
                    noWrap
                >
                    {rec.label}</Typography>
                <p>Calories: {Math.floor(rec.calories)}</p>
                <img src={rec.image}></img>
            </div>
        </Link >
    )
}

export default FavoriteRecipe;