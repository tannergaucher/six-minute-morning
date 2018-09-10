import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'

import { Arrow } from 'rebass'

const StyledArrowsWrapper = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  position: absolute;
  top: 50%;

  > * {
    font-size: 3em;
    opacity: 0.5;
    color: white;

    &:hover {
      opacity: 1;
    }
  }
`

const LeftArrow = styled(Arrow)`
  transform: rotate(90deg);
`

const RightArrow = styled(Arrow)`
  transform: rotate(270deg);
`

const Arrows = props => (
  <StyledArrowsWrapper>
    <Link to={props.back}>
      <LeftArrow direction="down" />
    </Link>
    <Link to={props.forward}>
      <RightArrow direction="down" />
    </Link>
  </StyledArrowsWrapper>
)

export default Arrows
