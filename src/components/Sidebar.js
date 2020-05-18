import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardBody, Row, CardText } from "reactstrap"
import { slugify } from "../utils/utilFuncs"
import "../styles/index.scss"
import courses from "../utils/coursesDescription"
import portfolioThumb from "../images/portfolioThumbnail.png"

import pythonBasicsThumb from "../images/courseThumbs/pythonBasicsThumb.jpg"
import cppBasicsThumb from "../images/courseThumbs/cppBasicsThumb.png"
import pythonProjectsThumb from "../images/courseThumbs/pythonProjectsThumb.jpeg"
import cppProjectsThumb from "../images/courseThumbs/cppProjectsThumb.png"

const pythonBasics = 0
const cppBasics = 1
const pythonProjects = 2
const cppProjects = 3

const Sidebar = () => (
  <div>
    <Card className=""> {/* border-color testBackground */}
      <CardBody className="">
        <CardTitle className="text-center text-uppercase">Portfolio</CardTitle> {/* heading */}
        <a
          href="https://jonhjortur.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
          className="border-color"
            src={portfolioThumb}
            alt="Úbs. Hér á að vera mynd!"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>

    <Card className=""> {/* border-color testBackground */}
      <CardBody className="">
        {/* Þetta er harðkóðað og afritað úr courses.js sem er ekki fallegt.
        En hvað ætlar þú að gera í því !!? HA!!?
        "Ég á þetta, ég má þetta!!"
        (En ég laga þetta nú samt seinna ef ég vil halda mig við að hafa þetta á þessum stað.)*/}
        <CardTitle className="text-center text-uppercase mb-3"> {/* heading */}
          Seríur
        </CardTitle>

        {/* PYTHON Basics*/}
        <Card className="border-color"> 
          <a href={`/course/${slugify(courses[pythonBasics].name)}`}>
            <img
              src={pythonBasicsThumb}
              style={{ maxWidth: "100%" }}
              alt="PYTHON"
            />
          </a>
          <CardBody>
            <Link to={`/course/${slugify(courses[pythonBasics].name)}`}>
              {courses[pythonBasics].name}
            </Link>
            <CardText>{courses[pythonBasics].shortDescription}</CardText>
            <Link
              to={`/course/${slugify(courses[pythonBasics].name)}`}
              className="btn btn-outline-primary float-right"
            >
              Skoða þetta
            </Link>
          </CardBody>
        </Card>

        {/* C++ Basics */}
        <Card className="border-color">
          <a href={`/course/${slugify(courses[cppBasics].name)}`}>
            <img
              src={cppBasicsThumb}
              style={{ maxWidth: "100%" }}
              alt="PYTHON"
            />
          </a>
          <CardBody>
            <Link to={`/course/${slugify(courses[cppBasics].name)}`}>
              {courses[cppBasics].name}
            </Link>
            <CardText>{courses[cppBasics].shortDescription}</CardText>
            <Link
              to={`/course/${slugify(courses[cppBasics].name)}`}
              className="btn btn-outline-primary float-right"
            >
              Skoða þetta
            </Link>
          </CardBody>
        </Card>

{/* Python Projects */}
<Card className="border-color">
  <a href={`/course/${slugify(courses[pythonProjects].name)}`}>
    <img
      src={pythonProjectsThumb}
      style={{ maxWidth: "100%" }}
      alt="PYTHON"
    />
  </a>
  <CardBody>
    <Link to={`/course/${slugify(courses[pythonProjects].name)}`}>
      {courses[pythonProjects].name}
    </Link>
    <CardText>{courses[pythonProjects].shortDescription}</CardText>
    <Link
      to={`/course/${slugify(courses[pythonProjects].name)}`}
      className="btn btn-outline-primary float-right"
    >
      Skoða þetta
    </Link>
  </CardBody>
</Card>

{/* C++ Projects */}
<Card className="border-color">
  <a href={`/course/${slugify(courses[cppProjects].name)}`}>
    <img
      src={cppProjectsThumb}
      style={{ maxWidth: "100%" }}
      alt="PYTHON"
    />
  </a>
  <CardBody>
    <Link to={`/course/${slugify(courses[cppProjects].name)}`}>
      {courses[cppProjects].name}
    </Link>
    <CardText>{courses[cppProjects].shortDescription}</CardText>
    <Link
      to={`/course/${slugify(courses[cppProjects].name)}`}
      className="btn btn-outline-primary float-right"
    >
      Skoða þetta
    </Link>
  </CardBody>
</Card>
        {/* Þetta fyrir neðan er til að birta nýjustu færslurnar á síðunni.
      Fannst þetta góð hugmynd til að byrja með en held að það sé betra að hafa seríurnar hér.
      Það nýjasta er augljóslega alttaf fremst á síðunni hvort sem er og ég held að það sé ekki
      mikið value í því fyrir notendur að hafa beinan aðgang að því nýjasta þó þeir séu komnir
      nokkrum síðum aftar */}
        {/* <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        /> */}
      </CardBody>
    </Card>
  </div>
)
/*
const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
*/
export default Sidebar
