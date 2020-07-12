import React, { useMemo } from 'react'
import Header from '../../elements/header'
import TopNavigation from './component/topNav'
import { allLinks } from './redux/selectors'
import { useSelector, shallowEqual } from 'react-redux'
import SideDrawer from './component/sidedrawer'
import { useCycle } from 'framer-motion'

const MainNavigation = props => {

const MakeGetAllLinks = useMemo(allLinks,[])
const {
  links,
  social,
  brand,
  copyright
} = useSelector(state => MakeGetAllLinks(state, shallowEqual))

const [isOpen, toggleOpen] = useCycle(false, true)


    return (
        <Header>
          <TopNavigation links={links} brand={brand} isOpen={isOpen} toggle={toggleOpen}/>
          <SideDrawer links={links} social={social} copyright={copyright} isOpen={isOpen} toggle={toggleOpen}/>
        </Header>
    )
}

export default MainNavigation