import React from 'react'
import ShareIconsWrapper from '../style/shareIconsWrapper'
import Popover from '../../../components/popover'
import Icon from '../../../components/icon'
import IconBoxWrapper from '../style/iconBoxWrapper'
import IconBox from '../../../components/iconbox'

const ShareIcon = ({icon}) => (
    <Icon icon={icon} height="2rem" pr={10} fill="rgba(204,204,204,.7)"/>
)

const ShareGalleryIcons = (shareIcons) =>(
    <IconBoxWrapper
        key="share-social-icons"
        direction="column"
    >
        {shareIcons.map(icon => 
         <IconBox
            icon={icon.icon}
            text={icon.text}
        />)}
    </IconBoxWrapper>
)

const ShareGallery = ({shareIcons}) => {
    return (
        <ShareIconsWrapper lg={12}>
            <Popover data="Select star to favorite images you love">
                <ShareIcon icon="star"/>
            </Popover>
            <Popover data={ShareGalleryIcons(shareIcons)}>
               <ShareIcon icon="paperplane"/>
            </Popover>
        </ShareIconsWrapper>
    )
}

export default ShareGallery