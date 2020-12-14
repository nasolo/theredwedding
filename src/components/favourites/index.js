import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import Icon from '../icon'
import Popover from '../popover';
import { addFavourite, removeFavourite } from './redux/actions'
import { selectedFavourites } from './redux/selectors';


const RenderIcon = ({icon, popOverComponent, handleOnClick, isActive}) => (
    <Popover data={popOverComponent}>
          <Icon icon={icon} height="2rem" pr={10} fill={`${isActive ? `white` : `rgba(204,204,204,.7)`}`} onClick={() => handleOnClick()}/>
    </Popover>
)

const Favourite = ({
    icon ="star",
    popOverData="Select star to favorite images you love",
    activeMedia
}) =>{

    const dispatch = useDispatch()
    const {
        keys
    } = useSelector(state => selectedFavourites(state), shallowEqual)

    const handleFavourites = bindActionCreators({
        add: addFavourite,
        remove: removeFavourite
    }, dispatch)

    const { add, remove } = handleFavourites

    const isActive = keys.includes(activeMedia.id)

    const handleOnClick = () => {
        if(!activeMedia.id){
            return
        }

        return  isActive ? remove(activeMedia) : add(activeMedia)
    }

    return (
        <RenderIcon icon={icon} popOverComponent={popOverData} handleOnClick={handleOnClick} isActive={isActive}/>
    )

}


export default Favourite