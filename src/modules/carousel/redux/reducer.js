import carouselConstants from './constants'

const {
    PAGINATE_NEXT,
    PAGINATE_PREV,
    SETACTIVEITEM,
    UPDATECAROUSELDATA,
} = carouselConstants

const carouselReducer = (state, action) =>{
    switch(action.type){
        case PAGINATE_NEXT :

        console.log(action)

            return {
                ...state,
                ...action.payload
                
            };
        case PAGINATE_PREV:
            return{
                ...state,
               ...action.payload
            };

        case SETACTIVEITEM: 
            return{
                ...state,
                direction: action.payload - state.activeIndex,
                activeIndex: action.payload,
            }

        default:
            return state

        }
        


}

export default carouselReducer