import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify, youtubeId } from "../utils/utilFuncs"
import courses from "../utils/coursesDescription"
import { Helmet } from "react-helmet"
import "../styles/index.scss"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const course = courses.find(x => x.name === post.course)

  const baseUrl = "https://www.jonhjortur.com/"

  return (
    <Layout
      pageTitle={post.title}
      postcourse={course}
    >
      <Helmet>
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=5eaa1c404ba4f9001384ca59&product=inline-share-buttons"
          async="async"
        ></script>
        {/* https://github.com/googlearchive/code-prettify */}
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
      </Helmet>
      <SEO title={post.title} />
      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          {post.youtube !== "" && (
            <div class="iframe-container" id="hideMe">
              <iframe
              title="YouTubeVideo"
                src={`https://www.youtube.com/embed/${youtubeId(post.youtube)}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          )}
          <CardSubtitle>
            <div className="post-date-course-margin">
            <span className="text-info">{post.date}</span> -{" "}
            <span className="text-info">{post.course}</span>

            </div>
          </CardSubtitle>
          <ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </CardBody>
      </Card>
      {/* <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_new"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.twitter.com/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterHandle" // My twitter handle...if I get one!
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <div class="sharethis-inline-share-buttons"></div>
          </li>
        </ul>
      </div> */}
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
        course
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
