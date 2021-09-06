import React, { useState, useEffect } from "react";
import { changeLikesList, showRecipeDetails } from "../actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Recipe = ({ recipe }) => {
    const dispatch = useDispatch();

    const [rec, setRec] = useState(recipe.recipe);
    const [likeStatus, setLikeStatus] = useState(false);
    const likeList = useSelector(state => state.likesList.likes);

    let newLikeList = [...likeList]
    let uriList = newLikeList.map((index) => index['uri'])


    const changeLikeList = () => {
        setLikeStatus(!likeStatus);
        dispatch(changeLikesList(rec, !likeStatus));
    };

    return (
        <div className="recipe-item">
            {likeStatus || uriList.includes(recipe.recipe.uri) ? (
                <i onClick={changeLikeList} className="heart icon"></i>
            ) : (
                <i onClick={changeLikeList} className="heart outline icon"></i>
            )}
            <div onClick={() => dispatch(showRecipeDetails(rec))}>
                <Link to="/recipe" >
                    <div className="recipe-item-details">
                        <h1>{rec.label}</h1>
                        <p>Calories: {Math.floor(rec.calories)}</p>
                        <img src={rec.image}></img>
                        <ul className="recipe-ingredient">
                            {rec.ingredients.map((ingredient) => {
                                return <li>{ingredient.text}</li>;
                            })}
                        </ul>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Recipe;
