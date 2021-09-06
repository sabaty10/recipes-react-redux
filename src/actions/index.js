import { store } from '../index';
import axios from "axios";


export const fetchRecipes = (query) => {
    const APP_ID = 'f17223a0';
    const APP_KEY = '791fc894be8ec0e32c1603992c861080';

    return async (dispatch) => {
        const response = await axios.create({ baseURL: 'https://api.edamam.com' }).get(`search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

        const data = response.data.hits;
        dispatch({ type: 'IS_LOADING', payload: false })
        dispatch({ type: 'INITIAL_RECIPES', payload: data })
    }
}



export const setSearch = (input) => {
    return {
        type: 'SET_SEARCH',
        payload: input
    }
}


export const setQuery = (search) => {
    return (dispatch) => {
        dispatch({ type: 'IS_LOADING', payload: true })
        dispatch({ type: 'SET_QUERY', payload: search })
    }
}

export const changeLikesList = (recipe, likeStatus) => {
    return (dispatch, getState) => {
        const likesList = getState().likesList.likes;
        if (likeStatus) {
            let newLikeList = [...likesList]
            let uriList = newLikeList.map((index) => index['uri'])

            if (!uriList.includes(recipe['uri'])) {
                newLikeList.push(recipe)

                dispatch({
                    type: 'SET_LIKE',
                    payload: newLikeList
                })
            }

        } else {
            const newList = likesList.filter((obj) => obj.label !== recipe.label)
            dispatch({
                type: 'REMOVE_LIKE',
                payload: newList
            })
        }

    }
}

export const showRecipeDetails = (recipe) => {
    return {
        type: 'PICK_RECIPE',
        payload: recipe
    }
}