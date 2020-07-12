import {useState, useEffect} from 'react'
import debounce from 'lodash/debounce'




export default function useWindowSize(){
    const isClient = typeof window === 'object';

    function getSize(){

        let width = window.innerWidth 
                    || document.documentElement.clientWidth 
                    || document.body.clientWidth
        let height = window.innerHeight 
                    || document.documentElement.clientHeight
                    || document.body.clientHeight

        return {
            width,
            height
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        if(!isClient){
            return false
        }     
   
        const resizeListener = debounce(()=>setWindowSize(getSize()), 150)

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    })
    return windowSize
}


