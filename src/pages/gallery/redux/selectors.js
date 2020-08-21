import { createSelector } from 'reselect'
import { sliderHandler } from '../../../utils/selectors/handleSlide'




const selectAllGalleryData = state => state.gallery
const activeIndex = (_, props) => props
const selectAllGalleryMedia = state => state.gallery.media
const selectActiveCard = state=> state.gallery.activeId

const filterBtns = state => state.gallery.filterIcons
const activeFilterBtns = state => state.gallery.activeFilterBtnId

export const allMediaData = () => {
    return createSelector(
        [selectAllGalleryData, activeIndex],
        (gallery, activeIndex) => {
            
            //map filtered data requirements
            const {filterTags, userTags, media, activeId} = gallery

            //remove all duplicate tags
            const filteredTags = new Set([...filterTags, ...userTags])
            
            //filter predicate
            let shouldFilterData = filteredTags.size > 0

            //if no filted tags then return gallery or else return media filtered by tags
            const filteredMedia = shouldFilterData ? (media.filter(media => media.tags.find(tag => filteredTags.has(tag))))
            : ( media )


            

            return {
                ...gallery,
                media: [...filteredMedia],
                
            }

        } 
    )
}

export const allMediaTags = createSelector(
    [selectAllGalleryMedia],
    (allMedia) => {
        const allTags = new Set()
        allMedia.map(media => allTags.add(...media.tags))
        return [...allTags]
})


export const filterBtnsIcons = createSelector(
    [filterBtns, activeFilterBtns],
    (filterBtns, btnIds) => filterBtns.map(btn =>({...btn, active: btnIds.includes(btn.id)}))
)

export const userTags = createSelector(
    [selectAllGalleryData],
    (galleryData) => galleryData.userTags
)


const allSelectors = {
    allMediaData,
    allMediaTags,
    filterBtnsIcons,
    userTags
    
    
}

export default allSelectors

/*

    const filterMedia = media.reduce((valFound, currVal) =>{
          currVal.tags.forEach(tag => {
              if(allFilterTags.has(tag)){
                valFound = [...valFound, currVal]
              }
          })
          return valFound
        }, [])

*/