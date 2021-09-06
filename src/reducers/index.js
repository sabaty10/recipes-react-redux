import { combineReducers } from "redux";
import recipesReducer from './recipesReducer'
import searchReducer from './searchReducer';
import likesListReducer from "./likesListReducer";
import recipeDetails from "./recipeDetails";

export default combineReducers({
    recipes: recipesReducer,
    search: searchReducer,
    likesList: likesListReducer,
    recipeDetails: recipeDetails
})

