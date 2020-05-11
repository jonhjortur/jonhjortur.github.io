import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import courses from '../utils/courses'

const coursesPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const course = courses.find(x => x.name === pageContext.courseName)
  const pageHeader = pageContext.courseName
  {console.log("funk this ", course)}

  return (
    <Layout pageTitle={pageHeader}
      postCourse={course}
      // courseImageFluid={data.file.childImageSharp.fluid}
      >
      {data.allMarkdownRemark.edges.map(({node}) => (
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
export const coursesQuery = graphql`
  query($courseName: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { course: {eq: $courseName}}}
    ) {
      totalCount
      edges{
        node{
          id
          frontmatter{
            title
            date(formatString: "D/M/YYYY")
            course
            tags
            image{
              childImageSharp {
                fluid(maxWidth: 650) {
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

export default coursesPosts