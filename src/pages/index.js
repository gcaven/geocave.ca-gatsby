import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero';

import './styles.scss';

const IndexPage = () => (
  <div>
    <Hero/>
    <div className='page-content'>
      <div className='about-geoff'>
        <img src={require("../images/headshot.jpg")}/>
        <div className='about-geoff__text'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#A5D6A7" points="100,0, 100,100, 0,100"/>
          </svg>
          <div className="about-geoff__text__inner">
            <h3>Who am I?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim magna pulvinar ornare finibus. Aliquam et gravida diam. Pellentesque commodo suscipit metus eget malesuada. Curabitur interdum id nulla sit amet dignissim. In at ante aliquam orci pulvinar rhoncus. Curabitur non nulla eget massa porttitor cursus vel eget ex. Duis elementum a quam ornare imperdiet. Donec ut risus ut urna sodales viverra quis aliquam eros. Nam at sapien vehicula, molestie augue dictum, ornare sapien.
            </p>
          </div>
        </div>
      </div>
      {/* <Link to="/blog/">Go to Blog</Link> */}
    </div>
  </div>
)

export default IndexPage
