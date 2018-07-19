import React from 'react';
import BlogPostLink from '../components/BlogPostLink'

export default class Blog extends React.PureComponent {
  render() {
    const Posts = this.props.data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <BlogPostLink key={edge.node.id} post={edge.node} />);
    return (
      <div className="blog-index">
        <h1>Blog Index</h1>
        <div className="blog-index__list">
          {Posts}
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;