import { createSelector } from 'reselect'
import { sliderHandler } from '../../../utils/selectors/handleSlide'


const getAllHeaderData = state => state.header
const getCurrentCardId = state => state.header.activeCardId
const getAllCards = state => state.header.cards


const  allHeaderData = () => {
    return createSelector(
        [getAllHeaderData, getAllCards, getCurrentCardId],
        (data, cards, id) => ({
            ...data,
            ...sliderHandler( cards, id )
        })
    )
}

const currentCard = createSelector(
        [getAllCards, getCurrentCardId],
        (allCards, id) => Object.assign({}, ...allCards.filter(card => card.id === id))
    )

const allHeaderSelectors = {
    allHeaderData,
    currentCard
}


export default allHeaderSelectors