
import { createSelector } from 'reselect';

const getAllRoutes = state => state.navigation

export const routes = createSelector(
    [getAllRoutes],
    ({links, direction}) => {
        const routes = { direction }
        links.forEach(link => routes[link.page] = link)
        return routes
    }

)