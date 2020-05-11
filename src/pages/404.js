import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import pic404 from "../images/404.jpg"
import { Link } from "gatsby"
import { Card } from "reactstrap"

const NotFoundPage = () => (
  <Layout pageTitle="">
    <SEO title="404: Not found" keywords={[`/*WHAT TO PUT HERE!!?*/`]}/>
    <Card>
    <img src={pic404} alt=""/>
    </Card>
    <Link style={{ float: "right" }} className="btn btn-danger" to={'/'}>Forða mér.</Link>
  </Layout>
)

export default NotFoundPage
