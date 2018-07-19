import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.scss'

export default class BlogPostLink extends React.PureComponent {
  render() {
    return (
      <Link 
        className='blog-preview'
        to={this.props.post.frontmatter.path}
      >
        <div className='blog-preview__image-container'>
          <img src={"http://via.placeholder.com/350x350"}/>
        </div>
        <div className='blog-preview__text'>
          <h2>{this.props.post.frontmatter.title}</h2>
          <span className='blog-preview__text__date'>{this.props.post.frontmatter.date}</span>
          <span>Text Preview here...</span>
        </div>
      </Link>
    );
  }
}

BlogPostLink.propTypes = {
  post: PropTypes.object
}