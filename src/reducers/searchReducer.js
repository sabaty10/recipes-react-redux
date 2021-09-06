const initialState = {
    search: '',
    query: '',
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, search: action.payload };
        case 'SET_QUERY':
            return { ...state, query: action.payload, search: '' };
        case 'IS_LOADING':
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}