const INITIAL_STATE = { data: []}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'PORC_FETCHED':
            return { ...state, data: action.payload.data }
        default:
            return state
    }
}

