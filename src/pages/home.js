import React, { Component } from 'react'

import withAuthorization from '../components/Session/withAuthorization'
import { db } from '../firebase'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import Arrows from '../components/Arrows'

// const fromObjectToList = object =>
//   object ? Object.keys(object).map(key => ({ ...object[key], index: key })) : []

class HomePage extends Component {
  state = {
    forward: '/silence',
    back: '/landing'
  }

  // componentDidMount() {
  //   db.onceGetUsers().then(snapshot =>
  //     this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
  //   )
  // }

  render() {
    console.log('data', this.props.data)

    return (
      <Layout>
        <HomePageContent
          data={this.props.data}
          back={this.state.back}
          forward={this.state.forward}
        />
      </Layout>
    )
  }
}

const authCondition = authUser => !!authUser

const HomePageContent = withAuthorization(authCondition)(props => (
  <div>
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
  </div>
))

export default HomePage

export const query = graphql`
  query HomepageQuery {
    file(relativePath: { eq: "water-sand.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
