import apiActions from "../../../utils/asyncActionTypes"

const {TYPES, API} = apiActions

const favouritesConstants ={
    ...TYPES("favourites"),
    API,
    ADD_FAVOURITE: "ADD_FAVOURITE",
    REMOVE_FAVOURITE: "REMOVE_FAVOURITE"
}


export default favouritesConstants