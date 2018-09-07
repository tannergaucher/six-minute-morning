import styled from 'styled-components'
import Img from 'gatsby-image'

// Styles not applied to gatsby image
const BackgroundImage = styled(Img)`
  position: 'absolute';
  left: 0;
  top: 0;
  width: '100%';
  height: '100%';
`

export default BackgroundImage
