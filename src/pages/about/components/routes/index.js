import About from "../about"
import Services from "../services"
import Video from "../video"
import Faqs from "../faqs"


const handleComponent = (path, components) =>{
 
    switch(path){
        case '/video': 
            return Video
            break;
        case '/services':
           return  Services
            break;
        case '/faqs':
           return Faqs
            break;
        case '/about':
            return About
            break;
        default:
          return Video
    }

}

const routes = (pages) => {
    return pages.map(page =>{
        return{
            path: page.route,
            component: handleComponent(page.route),
            data: {...page},
            page: page.page
        }
    })
}

export default routes