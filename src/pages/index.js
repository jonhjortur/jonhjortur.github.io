import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`/*WHAT TO PUT HERE!!?*/`]} />
    <h1>some page</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D/M/YYYY")
            author
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
