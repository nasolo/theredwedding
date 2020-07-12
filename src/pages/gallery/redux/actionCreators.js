
import galleryConstants from "./constants";
import allActions from './actions'
import pullAll from 'lodash/pullAll'


//CONSTANTS

const { SUCCESS, PENDING, ERROR, API } = galleryConstants
const {
        fetchMedia,
        errorMedia,
        receiveMedia,
        addFilterTag,
        removeFilterTag,
        setFilterButtonActive,
        setFilterButtonInActive,
        addUserTags,
        removeUserTags
        
    } = allActions

export const fetchMediaHandler = () => ({
        type: API,
        url: "/data/media.json",
        payload: {
            SUCCESS,
            PENDING,
            ERROR,
        actions:{
            SUCCESS: receiveMedia,
            PENDING: fetchMedia,
            ERROR: errorMedia
        }
    }
})

const shouldFetchMedia = state => {
    const gallery = state.gallery
    if(!gallery){
        return true
    } else if(gallery.isFetching){
        return false
    } else {
        return {
                    didInValidate: gallery.didInValidate,
                    errorMsg: gallery.apiErrorMsg
                }
    }
}

export function fetchMediaData(){
    return (dispatch, getState) =>{
        return shouldFetchMedia(getState) ? dispatch(fetchMediaHandler()) : Promise.resolve()
    }
}


export function addMediaFilter ( medialFilters ){
    
    
    if(medialFilters === undefined){
        return false
    }

    const compareValues = (arrVal, othVal)=>{
        return arrVal.includes(othVal)
    }

    return  (dispatch, getState) =>{
          
            const currentTags = getState().gallery.filterTags
            
        if(currentTags.length < 1){
            return dispatch(addFilterTag(medialFilters))
        } 
        
        if(medialFilters instanceof Array){

                const getDiffrence = pullAll(medialFilters, currentTags, compareValues)

                return getDiffrence.length > 0 && dispatch(addFilterTag(getDiffrence))
    
               
        }else if(medialFilters instanceof String){
    
                const filterTags = currentTags.filter(tag => tag.includes(medialFilters))
    
                return filterTags.length > 0 && dispatch(addFilterTag(filterTags))
            } 
            
            return false
    }
}


export const handleButtonActivation = (id) => {
    if(id === undefined){
        return false
    }

    return async (dispatch, getState)=>{

        const filterIds = getState().gallery.activeFilterBtnId

        if(filterIds === undefined || !filterIds instanceof Array){
            throw new Error("ids no defined")
        }

        
        if(filterIds.includes(id)){
            await dispatch(setFilterButtonInActive(id))
            return false
        }
            await dispatch(setFilterButtonActive(id))
            return true
          
        }
}
        

export const handleFilters = (icon) => {

    const { id, filterTags } = icon

    return (dispatch) =>{
        dispatch(handleButtonActivation(id)).then(shouldUpdateFilter => {
            shouldUpdateFilter ? dispatch(addMediaFilter(filterTags)) : dispatch(removeFilterTag(filterTags))
        }).catch(e => new Error(e))
    }

}


export const updateUserTags = tag =>{
    
    if(tag === undefined || tag === null){
        return;
    }

    return(dispatch, getState)=>{
        
         const allUserTags = getState().gallery.userTags
         const shouldAddTag = allUserTags.includes(tag)

         return  dispatch(shouldAddTag ? removeUserTags(tag) : addUserTags(tag))
    }
}
