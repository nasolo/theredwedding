import { createSelector } from 'reselect'

const  getAllAboutUsData = state => state.aboutUs

export const allPages = createSelector(
    [getAllAboutUsData],
    (pages) => pages
)

const allSelectors = {
    allPages
}

export default allSelectors