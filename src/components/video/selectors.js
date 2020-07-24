import { createSelector } from "reselect"



const selectPlayerConfig = state => state.videoReducer



const getPlayerConfig = createSelector(
    selectPlayerConfig,
    (_, id) => id,
    (config, id) => {
        return config[id]
    }
)


export default {
    getPlayerConfig
}