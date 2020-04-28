import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import pic404 from "../images/404.jpg"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oups..">
    <SEO title="404: Not found" keywords={[`/*WHAT TO PUT HERE!!?*/`]}/>
    <Link className="btn btn-danger" to={'/'}>Forða mér.</Link>
  </Layout>
)

export default NotFoundPage
