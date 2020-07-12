import React from 'react';
import Chevron from '../../../elements/chevron';
import ChevronContainer from '../style/chevroncontainer';


const Chevrons = ({chevrons, dispatch}) => (
    <ChevronContainer>
        {chevrons.map(chevron => <Chevron onClick={()=>dispatch(chevron)} className={chevron} id={chevron} icon={chevron} maxHeight="3rem"/>)}
    </ChevronContainer>
)

export default Chevrons




