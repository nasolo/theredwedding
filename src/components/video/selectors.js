import { createSelector } from "reselect"



const selectPlayerConfig = state => state.videoPlayer



const getPlayerConfig = createSelector(
    selectPlayerConfig,
    (_, name) => name,
    (config, name) => {
        return config[name]
    }
)


export default {
    getPlayerConfig
}