import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./Footer"
import "../styles/index.scss"
import Sidebar from "./Sidebar"
import { Row, Col } from "reactstrap"

const Layout = ({ children, pageTitle, widePageTitle, courseImageFluid, postCourse }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          <Row md="1">
            <Col md="8">
              <h2>{pageTitle}</h2>
            </Col>
          </Row>
          <h2>{widePageTitle}</h2> {/* Nota þetta kannski fyrir "Efnisatriði"...eða þar sem titillinn getur orðið mjög langur */}
          <Row md="11" className="title-margin">
            <Col md="8">{children} </Col>
            <Col md="4">
              <Sidebar course={postCourse} courseFluid={courseImageFluid} />
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
