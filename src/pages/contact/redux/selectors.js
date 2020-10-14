import { createSelector } from 'reselect'

const  getAllContactData = state => state.contact

export const contactPageData = createSelector(
    [getAllContactData],
    (contactPageData) => contactPageData
)


export const formValidation = createSelector(
    [getAllContactData],
    (formData) => formData
)

const getServices = state => state.gallery.filterIcons

export const services = createSelector(
    [getServices],
    (services) => services
)


const allSelectors = {
    contactPageData,
    services,
    formValidation
}

export default allSelectors