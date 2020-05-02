import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "../styles/index.scss"
import Sidebar from "./Sidebar"

import { Row, Col } from "reactstrap"

const Layout = ({ children, pageTitle, authorImageFluid, postAuthor }) => (
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
              {/*Því ég var að spá í að hafa titilinn bara yfir vinstri dálkinum...kannski?? */}
            </Col>
          </Row>
          <h1>{pageTitle}</h1>
          <Row md="11">
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
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
