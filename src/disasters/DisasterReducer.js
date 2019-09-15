const INITIAL_STATE = { data: [], selectedRegion: '', selectedMes: 1, selectedAno: 2019 }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'DISASTER_FETCHED':
            return { ...state, data: action.payload.data}
        case 'REGION_FETCHED':
            return { ...state, selectedRegion: action.payload }
        case 'MES_FETCHED':
            return { ...state, selectedMes: action.payload }
        case 'ANO_FETCHED':
            return { ...state, selectedAno: action.payload }
        default:
            return state
    }
}

