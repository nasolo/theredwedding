import { createStructuredSelector, createSelector } from 'reselect'
import { wrap } from "@popmotion/popcorn";

 const getAllPackages = state => state.packages

 

 const allPackages = createSelector(
     [getAllPackages],
     (packages) => packages.weddingPackages
 )


 const filterMediaPackage = createSelector(
     (state) => state.packages.weddingPackages,
     (_, id) => id,
     (_, __,activeMedia) => activeMedia,
     (packages, id, activeIndex) =>{

        //filter all  packages by ID
        const getPackagesById = packages.find(x => x.id === id)

        //map all media from filtered data
        const { media } = getPackagesById

        //paginate function
        const paginate = ( direction ) => wrap(0, media.length, activeIndex + direction)
        

        return {
            ...getPackagesById,
            activeMedia: media[activeIndex],
            next: paginate(1),
            prev: paginate(-1)
        }

     } 
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