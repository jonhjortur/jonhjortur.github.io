import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import courses from "../utils/courses"
import { Row, Card, CardTitle, CardBody, CardText, Button } from "reactstrap"
import JohnImage from "../images/testThumbPython1.jpg"
import JaneImage from "../images/castro.jpg"
import { slugify } from "../utils/utilFuncs"
import coursesPosts from "../templates/course-posts"

// const john = courses[0]

const CoursesPage = () => (
  <Layout pageTitle="Courses title">
    <SEO title="Courses" keywords={[`/*WHAT TO PUT HERE!!?*/`]}/>
    <Row className="mb-4">
      <div /*className="col-md-3"*/ >
        <img src={JohnImage} style={{ maxWidth: '100%', marginBottom: '1rem'}} alt="John profile"/>
      </div>
      <Row className="mb-8">
      <div className="col-md-12" >
        <Card style={{/* minHeight: '100%' */}}>
          <CardBody>
            <CardTitle>{courses[0].name}</CardTitle>
            <CardText>{courses[0].bio}</CardText>
            <Button className="text-uppercase" style={{ float: "right" }} color="primary" href={`/course/${slugify(courses[0].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>

      </Row>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={JaneImage} style={{ maxWidth: '100%' }} alt="Jane profile"/>
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{courses[1].name}</CardTitle>
            <CardText>{courses[1].bio}</CardText>
            <Button className="text-uppercase" color="primary" href={`/course/${slugify(courses[1].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default CoursesPage
