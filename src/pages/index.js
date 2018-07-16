import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';

import './styles.scss';

const IndexPage = () => (
  <div>
    <Hero/>
    <div className="page-content">
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
