import headerConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'

const {
    SUCCESS,
    ERROR,
    PENDING,
    DIRECTION
} = headerConstants


export const fetchNavigation = createAction(PENDING)
export const fetchNavigationError = createAction(ERROR)
export const setNewNavDirection = createAction(DIRECTION)
export const receivedNavigationData = createAction(SUCCESS, json =>({
    payload: {
        social: json.socialLinks.map((social, position)=>({
            ...social,
            position,
            id: nanoid()
    })),
    brand: json.brand,
        receivedAt: Date.now(),
        id: nanoid(),
        links: json.links.map((link, position) =>({
            ...link,
            position,
            id: nanoid()
        })),
        copyright: json.copyright
    }
}))


export default {
    fetchNavigation,
    fetchNavigationError,
    receivedNavigationData
}

