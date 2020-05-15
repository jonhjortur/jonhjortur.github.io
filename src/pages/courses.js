// Skipta um nafn á þessum file...eða hinum sem heitir það sama!

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import courses from "../utils/coursesDescription"
import { Row, Card, CardTitle, CardBody, CardText, Button } from "reactstrap"
import { slugify } from "../utils/utilFuncs"

// Myndir fyrir seríur
import pyPic from "../images/testThumbPython1.jpg"
import cppPic from "../images/testThumbCpp1.png"
import rantPic from "../images/testThumbJS1.jpg"

// Já, þetta er harðkóðað í drasl!!
// Það er því þetta var svo bjánalega hannað hjá mér í upphafi
// svo það var svakalegt vesen að breyta því þeg ar ég skipti um skoðun um hvernig þetta átti að vera
// Ég á þetta allt svo ég má gera það sem mér sýnist!
// Svo er líka ekkert svakalegt mál að copy-a bara miður fyrir næstu seríu.

const CoursesPage = () => (
  <Layout pageTitle="Seríur">
    <SEO title="Seríur" keywords={[`/*WHAT TO PUT HERE!!?*/`]}/>
    {/* PYTHON */}

    <Row className="mb-6">
      <div className="col-md-12" >
        <Card style={{/* minHeight: '100%' */}}>
        <a href={`/course/${slugify(courses[0].name)}`}>
        <img src={pyPic} style={{ maxWidth: '100%'}} alt="PYTHON"/>
        </a>
          <CardBody>
            <CardTitle className="text-info">{courses[0].name}</CardTitle>
            <CardText>{courses[0].desc}</CardText>
            <Button className="text-uppercase" style={{ float: "right" }} color="primary" href={`/course/${slugify(courses[0].name)}`}>Læra {courses[0].name}</Button>
          </CardBody>
        </Card>
      </div>
      </Row>
      
      {/* PYTHON */}

      <Row className="mb-6">
        <div className="col-md-12" >
          <Card style={{/* minHeight: '100%' */}}>
          <a href={`/course/${slugify(courses[2].name)}`}>
          <img src={rantPic} style={{ maxWidth: '100%'}} alt="PYTHON"/>
          </a>
            <CardBody>
              <CardTitle className="text-info">{courses[2].name}</CardTitle>
              <CardText>{courses[2].desc}</CardText>
              <Button className="text-uppercase" style={{ float: "right" }} color="primary" href={`/course/${slugify(courses[2].name)}`}>Læra {courses[2].name}</Button>
            </CardBody>
          </Card>
        </div>
      </Row>

    {/* C++ */}
      <Row className="mb-8">
      <div className="col-md-12" >
        <Card style={{/* minHeight: '100%' */}}>
        <img src={cppPic} style={{ maxWidth: '100%', marginBottom: '1rem'}} alt="C++"/>
          <CardBody>
            <CardTitle>{courses[1].name}</CardTitle>
            <CardText>{courses[1].desc}</CardText>
            <Button className="text-uppercase" style={{ float: "right" }} color="primary" href={`/course/${slugify(courses[1].name)}`}>Læra þetta</Button>
          </CardBody>
        </Card>
      </div>
      </Row>

  </Layout>
)

export default CoursesPage
