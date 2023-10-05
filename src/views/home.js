import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Directives Strategist</title>
        <meta property="og:title" content="Lead Directives Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
