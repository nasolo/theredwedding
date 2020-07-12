import React from 'react'
import PackageSubtile from "./packageSubtile"
import ViewPackage from "./viewPackagebtn"
import PackageName from "./packageName"
import ViewPackageLink from './viewPackageCol'
import ListContainer from './listContainerRow'
import { togglePackageDetailsPage } from '../../../redux/actions'
import { useDispatch } from 'react-redux'


const PackagesList = ({packages, isOpen, activeId}) =>{

    const dispatch = useDispatch()
    
    return(
        <ListContainer>
            {packages.map((packageData, index) => 
                <ViewPackageLink id={packageData.id} key={`package-${packageData.id}-${index}`} preview={packageData.previewImage}>
                    <PackageName name={packageData.name}/>
                        <PackageSubtile subtitle={packageData.subtitle}/>
                    <ViewPackage onClick={()=>dispatch(togglePackageDetailsPage(packageData.id))}/>
                </ViewPackageLink>
            )}
        </ListContainer>
    )
}


export default PackagesList