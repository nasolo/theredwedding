import { createStructuredSelector, createSelector } from 'reselect'




const selectAllGalleryData = state => state.gallery
const selectAllGalleryMedia = state => state.gallery.media
const selectActiveCard = state=> state.gallery.activeId

const filterBtns = state => state.gallery.filterIcons
const activeFilterBtns = state => state.gallery.activeFilterBtnId

export const allMediaData = () => {
    return createSelector(
        [selectAllGalleryData],
        data => data
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


export const filterGalleryByTags = createSelector(
    [selectAllGalleryData, selectActiveCard],
    (allMediaData, activeId) => {
        const {filterTags, userTags, media} = allMediaData

        const allFilterTags = new Set([...filterTags, ...userTags])

        if(allFilterTags.size < 1){
            return media
        }

        const filterMedia = media.reduce((valFound, currVal) =>{
          currVal.tags.forEach(tag => {
              if(allFilterTags.has(tag)){
                valFound = [...valFound, currVal]
              }
          })
          return valFound
        }, [])
        return filterMedia.length > 0 ? filterMedia : media
    })

const allSelectors = {
    allMediaData,
    allMediaTags,
    filterBtnsIcons,
    userTags,
    filterGalleryByTags
    
}

export default allSelectors

