import React from 'react';

export default class BlogPost extends React.Component {
  render() {
    return (
      <div className="blog-post">
        <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
        <h2>{this.props.data.markdownRemark.frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }}
        />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;