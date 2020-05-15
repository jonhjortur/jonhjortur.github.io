import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Row,
  CardText,
} from "reactstrap"
// import { graphql, StaticQuery, Link } from "gatsby"
import "../styles/index.scss"
import portfolioThumb from "../images/portfolioThumbnail.png"
import courses from "../utils/coursesDescription"
import pyPic from "../images/testThumbPython1.jpg"
import { slugify } from "../utils/utilFuncs"
import rantPic from "../images/testThumbJS1.jpg"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">Portfolio</CardTitle>
        <a
          href="https://jonhjortur.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={portfolioThumb}
            alt="Úbs. Hér á að vera mynd!"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        {/* Þetta er harðkóðað og afritað úr courses.js sem er ekki fallegt.
        En hvað ætlar þú að gera í því !!? HA!!?
        "Ég á þetta, ég má þetta!!"
        (En ég laga þetta nú samt seinna ef ég vil halda mig við að hafa þetta á þessum stað.)*/}
        <CardTitle className="text-center text-uppercase mb-3">
          Seríur
        </CardTitle>
    <Row className="mb-6">
      <div className="col-md-12" >
        <Card style={{/* minHeight: '100%' */}}>
        <a href={`/course/${slugify(courses[0].name)}`}>
        <img src={pyPic} style={{ maxWidth: '100%'}} alt="PYTHON"/>
        </a>
          <CardBody>
            <CardTitle className="text-info">{courses[0].name}</CardTitle>
            <CardText>{courses[0].desc}</CardText>
            {/* <Button className="text-uppercase" style={{ float: "right" }} color="primary" href={`/course/${slugify(courses[0].name)}`}>Læra {courses[0].name}</Button> */}
          </CardBody>
        </Card>
      </div>
      </Row>
      <Row className="mb-6">
        <div className="col-md-12" >
          <Card style={{/* minHeight: '100%' */}}>
          <a href={`/course/${slugify(courses[2].name)}`}>
          <img src={rantPic} style={{ maxWidth: '100%'}} alt="PYTHON"/>
          </a>
            <CardBody>
              <CardTitle className="text-info">{courses[2].name}</CardTitle>
              <CardText>{courses[2].desc}</CardText>
              {/* <Button className="text-uppercase" style={{ float: "right" }} color="primary" href={`/course/${slugify(courses[2].name)}`}>Læra {courses[2].name}</Button> */}
            </CardBody>
          </Card>
        </div>
      </Row>
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

// const sidebarQuery = graphql`
//   query sidebarQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: 5
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 300) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `

export default Sidebar
