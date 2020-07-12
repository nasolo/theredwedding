import {
    background,
    border,
    bottom,
    shadow,
    color,
    compose,
    layout,
    position,
    space,
    typography,
    flexbox
    
  } from 'styled-system';

const ComposeBoxHelper = compose(
    flexbox,
    background,
    border,
    bottom,
    shadow,
    color,
    layout,
    position,
    space,
    typography
)


export default ComposeBoxHelper