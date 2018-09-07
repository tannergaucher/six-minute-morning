import React from 'react'
import Img from 'gatsby-image'
import withAuthorization from '../components/Session/withAuthorization'

import Layout from '../components/layout'
import Arrows from '../components/Arrows'
import Heading from '../components/Heading'

import Wrapper from '../components/styles/Wrapper'

class AffirmationsPage extends React.Component {
  state = {
    forward: '/visualization',
    back: '/silence'
  }

  render() {
    return (
      <Layout>
        <AffirmationsPageContent
          data={this.props.data}
          forward={this.state.forward}
          back={this.state.back}
        />
      </Layout>
    )
  }
}

export default AffirmationsPage
const authCondition = authUser => !!authUser

const AffirmationsPageContent = withAuthorization(authCondition)(props => {
  return (
    <Wrapper>
      <Heading fontSize={[4, 5, 6, 7]}>Affirmations</Heading>
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
  query AffirmationsPageQuery {
    file(relativePath: { eq: "affirmations.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
