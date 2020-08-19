
import apiActions from '../../../utils/asyncActionTypes'

const {TYPES, API} = apiActions

const HEADER_CONSTANTS = {
    PAGINATE_NEXT: 'PAGINATE_NEXT',
    PAGINATE_PREV: 'PAGINATE_PREV',
    REQUEST_CARDS: 'REQUEST_POSTS',
    RECEIVE_CARDS: 'RECEIVE_CARDS',
    INVALID_CARD_REQUEST: 'INVALID_CARD_REQUEST',
    SET_CURRENT_CARD_ID: 'SET_CURRENT_CARD_ID',
    PAGE: 'PAGE',
    UPDATE_CAROUSEL_DATA: 'UPDATE_CAROUSEL_DATA',
    DIRECTION: 'DIRECTION',
    ...TYPES("HEADER"),
    API
}

export default HEADER_CONSTANTS