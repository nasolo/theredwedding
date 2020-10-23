import { createSelector } from 'reselect'

const  getTermsData = state => state.info.pages

export const info = createSelector(
    [getTermsData],
    (pages) => pages
)