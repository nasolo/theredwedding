import { FETCH_NAV_CONFIG} from '../../header/redux/actionCreators'
import { FETCH_ABOUTUS_CONFIG } from '../../../pages/about/redux/actionsCreators'
import { FETCH_HEADER_CONFIG } from '../../../pages/home/redux/actionCreators'


//  ...api_dispatch_config(dispatch)

const list = [
    FETCH_NAV_CONFIG,
    FETCH_ABOUTUS_CONFIG,
    FETCH_HEADER_CONFIG
]

export const fetchAppApi = () => {
    return dispatch => Promise.all(
      list.map(api => dispatch(api))
    ).then((result) => {
        console.log(result)
    }).catch((err) => {
         console.log(err)
    })
}