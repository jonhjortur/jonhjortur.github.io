import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Row, Col, Card, CardBody, CardSubtitle, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify, youtubeId } from "../utils/utilFuncs"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={''/*post.title*/}>
      <SEO title={post.title}/>
          <Card>
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
            />
            <CardBody>
              <div class="iframe-container" >
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId(post.youtube)}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
              <CardSubtitle>
                <span className="text-info">{post.date}</span> -{" "}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <ul className="post-tags">
                {post.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <Badge color="primary">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        youtube
        date(formatString: "D/M/YYYY")
        tags

        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
