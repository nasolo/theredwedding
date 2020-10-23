import { FETCH_NAV_CONFIG} from '../../header/redux/actionCreators'
import { FETCH_ABOUTUS_CONFIG } from '../../../pages/about/redux/actionsCreators'
import { FETCH_HEADER_CONFIG } from '../../../pages/home/redux/actionCreators'
import { FETCH_PACKAGES_CONFIG } from '../../../pages/packages/redux/actionCreators';
import { FETCH_GALLERY_CONFIG } from '../../../pages/gallery/redux/actionCreators';
import {FETCH_TESTIMONIALS_CONFIG} from '../../../pages/testimonial/redux/actionCreators';
import {FETCH_CONTACT_CONFIG} from '../../../pages/contact/redux/actionCreators'
import {FETCH_TERMS_CONFIG} from '../../../pages/info/redux/actionCreators'
import { BLOG_API_CONFIG } from '../../../pages/blog/redux/actionCreators';

//  ...api_dispatch_config(dispatch)

const list = [
    FETCH_NAV_CONFIG,
    FETCH_ABOUTUS_CONFIG,
    FETCH_HEADER_CONFIG,
    FETCH_PACKAGES_CONFIG,
    FETCH_GALLERY_CONFIG,
    FETCH_TESTIMONIALS_CONFIG,
    FETCH_CONTACT_CONFIG,
    FETCH_TERMS_CONFIG,
    BLOG_API_CONFIG
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