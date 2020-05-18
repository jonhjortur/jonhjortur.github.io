import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import courses from '../utils/coursesDescription'

const coursesPosts = ({ data, pageContext }) => {
  // Ef ég vil birta fjölda pósta í seríu, t.d. í hausnum
  // const { totalCount } = data.allMarkdownRemark
  const course = courses.find(x => x.name === pageContext.courseName)
  const pageHeader = pageContext.courseName

  return (
    <Layout pageTitle={pageHeader}
      postCourse={course}
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