import { Picture } from 'react-responsive-picture';


const RenderImage = ({sources, media, ...rest}) => (
    <Picture
        {...rest}
        sources = {[
            {
                srcSet: sources,
                media
            }
        ]}
    />
)


const Image = ({sources, media, ...rest}) =>{
    if(sources === undefined){
        return false
    }
    return (
        <Picture media={media} sources={sources} {...rest}/>
    )
}

export default Image