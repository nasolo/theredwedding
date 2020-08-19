import { createSelector } from 'reselect'
import { sliderHandler } from '../../../utils/selectors/handleSlide'

const getAllTestimonial = state => state.testimonials
const getActiveId = state => state.testimonials.activeQuoteId

export const allTestimonies = () =>createSelector(
    [getAllTestimonial],
    (testimonies) =>({
        ...testimonies
    })
)

export const activeQuote = createSelector(
    [getAllTestimonial, getActiveId],
    ({testimonies}, id) => testimonies.find(quote => quote.id === id)
)


export default {
    allTestimonies,
    activeQuote
}