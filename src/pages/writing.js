import React from 'react'
import Img from 'gatsby-image'
import withAuthorization from '../components/Session/withAuthorization'

import Layout from '../components/layout'
import Arrows from '../components/Arrows'
import Wrapper from '../components/styles/Wrapper'
import Heading from '../components/Heading'

class WritingPage extends React.Component {
  state = {
    forward: '/reading',
    back: '/visualization'
  }

  render() {
    return (
      <Layout>
        <WritingPageContent
          data={this.props.data}
          forward={this.state.forward}
          back={this.state.back}
        />
      </Layout>
    )
  }
}

export default WritingPage
const authCondition = authUser => !!authUser

const WritingPageContent = withAuthorization(authCondition)(props => {
  return (
    <Wrapper>
      <Heading fontSize={[4, 5, 6, 7]}>Writing</Heading>
      <Img
        sizes={props.data.file.childImageSharp.sizes}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <Arrows back={props.back} forward={props.forward} />
    </Wrapper>
  )
})

export const query = graphql`
  query WritingPageQuery {
    file(relativePath: { eq: "writing.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
