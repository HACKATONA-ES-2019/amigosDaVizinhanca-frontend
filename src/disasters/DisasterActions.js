import axios from 'axios'

function disasterGet(resp){
    return {
        type: 'DISASTER_FETCHED',
        payload: resp
    }
}

export function initDisaster() {
    return [
        getList(),
    ]
}

export function selectedRegion(region){
    return {
        type: 'REGION_FETCHED',
        payload: region
    }
}

export function getList() {
    return dispatch => {
        const request = axios.get(`http://localhost:3001/listaDesastres`)
        .then(resp => {
            dispatch(disasterGet(resp))
        }).catch(e => {
            showErrorMessages(e.response)
        })
    }
}

function submit(values, method) {
    return dispatch => {
        const id = values.id ? '/' + values.id : ''
        axios[method](`http://localhost:3001/listaDesastres${id}`, values)
        .then(resp => {
            dispatch(disasterGet())
        }).catch(e => {    
            showErrorMessages(e.response)
        })
    }
}

function showErrorMessages(response) {
    // if (response.status === 400) {
        console.log('Erro ' + response, "Alguns campos não foram preenchidos.")
    // }
    // if (response.status === 500 || response.status === 409) {
        // console.log('Erro ' + response.status, "Um erro desconhecido ocorreu.")
    // }
}