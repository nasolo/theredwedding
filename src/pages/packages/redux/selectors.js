import { createStructuredSelector, createSelector } from 'reselect'


 const getAllPackages = state => state.packages

 

 const allPackages = createSelector(
     [getAllPackages],
     (packages) => packages.weddingPackages
 )


 const filterMediaPackage = createSelector(
     (state) => state.packages.weddingPackages,
     (_, id) => id,
     (packages, id) => packages.find(x => x.id === id)
 )

export const packageOverview = createSelector(
    [getAllPackages],
    (packages) => {

        const {isPageOpen, activePageId, weddingPackages} = packages
        const overview = Object.assign({}, ...weddingPackages.filter(details => details.id === activePageId))


        return {
            isPageOpen,
            activePageId,
            overview
        }
    }
)
 

 const allSelectors = {
    getAllPackages,
    packageOverview,
    filterMediaPackage
 }


 export default allSelectors