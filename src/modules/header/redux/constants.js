import apiActions from '../../../utils/asyncActionTypes'

const { TYPES, API } = apiActions


const headerConstants = {
    ...TYPES("NAVIGATION"),
    API,
    DIRECTION: 'SET_DIRECTION'
}


export default headerConstants