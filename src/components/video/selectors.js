import { createSelector } from "reselect"



const selectPlayerConfig = state => state.videoReducer



const getPlayerConfig = createSelector(
    selectPlayerConfig,
    (_, id) => id,
    (config, id) => {
        return config[id]
    }
)

const activeVideo = createSelector(
    selectPlayerConfig,
    (media) => {
        const { activeVideo } = media

        const id = activeVideo.id
       
        return media[id] ?  media[id] : media
    }
)

export default {
    getPlayerConfig,
    activeVideo
}