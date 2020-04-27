import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/index.scss'
import pic404 from '../images/404.jpg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img className="center" src={pic404} alt="Sorry! Hér er engin síða. Myndin sem á að vera hér til að segja þér það er ekki einu sinni hér!"/>


  </Layout>
)

export default NotFoundPage
