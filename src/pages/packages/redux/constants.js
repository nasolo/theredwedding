import apiActions from "../../../utils/asyncActionTypes";


const {TYPES, API} = apiActions

const packagesConstants = {
    ...TYPES("PACKAGES"),
    API,
    VIEW_PACKAGE_DETAILS: 'VIEW_PACKAGE_DETAILS'
}

export default packagesConstants