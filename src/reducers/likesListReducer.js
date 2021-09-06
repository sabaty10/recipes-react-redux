const initialState = {
    likes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIKE':

            return { ...state, likes: action.payload }
        case 'REMOVE_LIKE':
            return { ...state, likes: action.payload }
        default:
            return state;
    }
}