import galleryConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'


const { 
        SUCCESS,
        ERROR,
        PENDING,
        SET_ACTIVE_ID,
        ADD_MEDIA_FILTER,
        REMOVE_MEDIA_FILTER,
        REMOVE_ALL_MEDIA_FILTER,
        ADD_FILTER_TAG,
        REMOVE_FILTER_TAG,
        REMOVE_ALL_FILTER_TAGS,
        SET_FILTER_BUTTON_ACTIVE,
        REMOVE_FILTER_BUTTON_INACTIVE,
        ADD_USER_TAGS,
        REMOVE_USER_TAGS,
        UPDATE_MEDIA
 } = galleryConstants

const fetchMedia = createAction(PENDING)

const errorMedia = createAction(ERROR)

const addMediaFilter = createAction(ADD_MEDIA_FILTER)

const removeMediaFilter = createAction(REMOVE_MEDIA_FILTER)

export const removeAllFilterMedia = createAction(REMOVE_ALL_MEDIA_FILTER)

const setFilterButtonActive = createAction(SET_FILTER_BUTTON_ACTIVE)

const setFilterButtonInActive = createAction(REMOVE_FILTER_BUTTON_INACTIVE)

const addFilterTag = createAction(ADD_FILTER_TAG)

const removeFilterTag = createAction(REMOVE_FILTER_TAG)

export const removeAllFilterTags = createAction(REMOVE_ALL_FILTER_TAGS)

const addUserTags = createAction(ADD_USER_TAGS)

const removeUserTags = createAction(REMOVE_USER_TAGS)

export const updateMedia = createAction(UPDATE_MEDIA)

const receiveMedia = createAction(SUCCESS, function prepare(json){
        return{ 
            payload: {
            receivedAt: Date.now(),
            id: nanoid(),
            filterIcons: json.filterIcons.map((icon) =>({
                ...icon,
                id: nanoid()
            })),
            shareIcons: json.shareIcons.map((icon) =>({
                ...icon,
                id: nanoid()
            })),
            media: json.media.map((media, position) =>{
                return {
                    ...media, 
                    id: nanoid(),
                    position
                }
            })
        }
    }
})

export const setActiveId = createAction(SET_ACTIVE_ID)

const allActions = {
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
        removeUserTags,
        updateMedia
}

export default allActions