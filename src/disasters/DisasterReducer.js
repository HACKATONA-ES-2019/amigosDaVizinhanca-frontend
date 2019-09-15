const INITIAL_STATE = { data: [], selectedRegion: '', selectedMes:'', selectedAno: '' }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'DISASTER_FETCHED':
            return { ...state, data: action.payload.data}
        case 'REGION_FETCHED':
            return { ...state, selectedRegion: action.payload.region }
        case 'MES_FETCHED':
            return { ...state, selectedMes: action.payload.mes }
        case 'ANO_FETCHED':
            return { ...state, selectedAno: action.payload.ano }
        default:
            return state
    }
}

