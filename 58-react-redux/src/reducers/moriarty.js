export const moriartyReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_MORIARTY_LOCATION':
            return [...state, action.payload]
        default:
            return state
    }
}