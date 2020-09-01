import { createSelector } from 'reselect'

const  getAllContactData = state => state.contact

export const contactPageData = createSelector(
    [getAllContactData],
    (contactPageData) => contactPageData
)

const getServices = state => state.gallery.filterIcons

export const services = createSelector(
    [getServices],
    (services) => services
)


const allSelectors = {
    contactPageData
}

export default allSelectors