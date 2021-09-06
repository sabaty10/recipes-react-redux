const initialState = {
    recipes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_RECIPES':
            return { ...state, recipes: action.payload }
        default:
            return state;
    }
}