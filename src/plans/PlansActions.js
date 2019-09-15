import axios from 'axios'

function porcGet(resp) {
    return {
        type: 'PORC_FETCHED',
        payload: resp
    }
}

export function getList(mes) {
    return dispatch => {
        const request = axios.get(`http://localhost:3001/prob/${mes}`)
            .then(resp => {
                dispatch(porcGet(resp))
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



