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
        case '/whoweare':
            return About
            break;
        default:
          return Video
    }

}

const routes = (pages) => pages.map(
    page =>({
        path: page.route,
        component: handleComponent(page.route),
        data: {...page},
        page: page.page
    })
)



export default routes