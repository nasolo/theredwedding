import { createReducer, createNextState } from '@reduxjs/toolkit'
import allActions from './actions'
import appInitialState from '../../../root/initialState'

const {
        fetchMedia,
        errorMedia,
        receiveMedia,
        setActiveId,
        addMediaFilter,
        removeMediaFilter,
        removeAllFilterMedia,
        addFilterTag,
        removeFilterTag,
        removeAllFilterTags,
        setFilterButtonActive,
        setFilterButtonInActive,
        addUserTags,
        removeUserTags
        
    } = allActions


const gallery = createReducer(appInitialState.gallery, {
    [fetchMedia]: (state, action) =>{
        return{
            ...state,
                isFetching: true,
                didInValidate: false,
                apiErrorMsg: null
        }
    },
    [errorMedia]: (state, action) => {
        return{
            ...state,
            isFetching: false,
            didInValidate: true,
            apiErrorMsg: action.payload
        }
    },
    [receiveMedia]: (state, action) =>{
        return {
            ...state,
            isFetching: false,
            didInValidate: false,
            lastUpdate: action.payload.receivedAt,
            media: action.payload.media,
            shareIcons: action.payload.shareIcons,
            filterIcons: action.payload.filterIcons,
            id: action.payload.id,
            apiErrorMsg: null,
            activeId: action.payload.media[0].id
        }
    },
    [setActiveId]: (state, action)=>{

        const {id, position} = action.payload
        const { activeIndex } = state
        const direction = position > activeIndex ? 1 : -1

        return {
            ...state,
            direction,
            activeIndex: position,
            activeId: id
        }
    },
    [addMediaFilter]: (state, action) => {
        return{
            ...state,
            filteredMedia: [...state.filteredMedia, ...action.payload]
        }
    },
    [removeMediaFilter]: (state, action) =>{
        return {
            ...state,
            filteredMedia: state.filteredMedia.filter(media => media !== action.payload)
        }
    },
    [removeAllFilterMedia]: (state) =>{
        return {
            ...state,
            filteredMedia: []
        }
    },
    [addFilterTag]: (state, action) =>{
        return{
            ...state,
            filterTags: [...state.filterTags, ...action.payload]
        }
    },
    [removeFilterTag]: (state, action)=>{
        return{
            ...state,
            filterTags: state.filterTags.filter(tag => !action.payload.includes(tag))
        }
    },
    [removeAllFilterTags]: (state) => {
        return{
            ...state,
            filterTags: [],
            activeFilterBtnId: [],
            userTags: []
        }
    },
    [setFilterButtonActive]: (state, action) => {
        return {
        ...state,
        activeFilterBtnId: [...state.activeFilterBtnId, action.payload]
        }
    },
    [setFilterButtonInActive]: (state, action) => {
        return {
            ...state,
            activeFilterBtnId: state.activeFilterBtnId.filter(filter => filter !== action.payload)
        }
    },
    [addUserTags]: (state, action)=>{
        return {
            ...state,
            userTags: [...state.userTags, action.payload]
        }
    },
    [removeUserTags]: (state, action) =>{
        return{
            ...state,
            userTags: [...state.userTags.filter(tag => !action.payload.includes(tag))]
        }
    }
})

export default gallery
