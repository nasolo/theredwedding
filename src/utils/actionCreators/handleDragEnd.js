
const handleOnDragEnd = (e, {offset, velocity}, next, prev, jump) =>{
    
    const swipeConfidenceThreshold = 1000;
    const swipePower = Math.abs(offset.x) * velocity.x
    const isRightSwipe = swipePower > swipeConfidenceThreshold
    const isLeftSwipe = swipePower < -swipeConfidenceThreshold

   

    if(jump) {
        if(isRightSwipe){
            return jump(next)
        }else if(isLeftSwipe){
            return jump(prev)
        }
    }
   
    return (dispatch) => {
        if(isRightSwipe){
            return dispatch(next)
        }else if(isLeftSwipe){
            return dispatch(prev)
        }
    }
}

export default handleOnDragEnd