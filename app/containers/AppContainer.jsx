import React from 'react'

import Nav from '../components/nav'
import EyeCatcher from '../components/eyecatcher'
import Footer from '../components/footer'
import Work from '../components/work'

class AppContainer extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <EyeCatcher />
        <Work />
        <Footer />
      </div>
    )
  }
}

export default AppContainer
