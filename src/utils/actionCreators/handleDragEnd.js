
const handleOnDragEnd = (e, {offset, velocity}, next, prev, dispatch) =>{
    
    const swipeConfidenceThreshold = 1000;
    const swipePower = Math.abs(offset.x) * velocity.x
    const isRightSwipe = swipePower > swipeConfidenceThreshold
    const isLeftSwipe = swipePower < -swipeConfidenceThreshold
    
    
        if(isRightSwipe){
            return dispatch(next)
        } else if(isLeftSwipe){
            return dispatch(prev)
        }
       
    
}

export default handleOnDragEnd