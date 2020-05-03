import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'

const IndexPage = () => (
  <Layout pageTitle="">
    <SEO title="Home" keywords={[`/*WHAT TO PUT HERE!!?*/`]} />
      <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
              key={node.id}
                title={node.frontmatter.title}
                slug={node.fields.slug}
                author={node.frontmatter.author}
                body={node.excerpt}
                date={node.frontmatter.date}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const indexQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
      limit: 2) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D/M/YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
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

export default IndexPage
