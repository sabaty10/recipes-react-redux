const initialState = {
    recipeDetails: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'PICK_RECIPE':
            return { ...state, recipeDetails: action.payload }
        default:
            return state;
    }
}