import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
import { numToString } from "../utils/utilFuncs"

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  // Hvað í fjandanum get ég kallað þetta annað en "færslur"!?
  
  const pageHeader = `${numToString(totalCount)} ${totalCount === 1 ? " færsla merkt " : " færslur merktar "} ${ tag }`
  return (
    <Layout widePageTitle={pageHeader}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
        key={node.id}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        course={node.frontmatter.course}
        date={node.frontmatter.date}
        body={node.excerpt}
        tags={node.frontmatter.tags}
        fluid={node.frontmatter.image.childImageSharp.fluid}
        />
        ))}
    </Layout>
  )
}

// Just learn that I dpn't need to name the queries !!
export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D/M/YYYY")
            course
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default tagPosts
