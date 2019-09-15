const INITIAL_STATE = { data: [], selectedRegion: '' }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'DISASTER_FETCHED':
            return { ...state, data: action.payload.data}
        case 'REGION_FETCHED':
            console.log(action.payload)
            return { ...state, selectedRegion: action.payload.region }
        default:
            return state
    }
}

