import Link from '../../../elements/Link'
import styled from 'styled-components'

const NavLink = styled(Link).attrs(props => ({
    className: `${props.text}`
}))`

    flex: 1 1 auto;
    padding: 1rem;
    
`

export default NavLink