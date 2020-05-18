// Skipta um nafn á þessum file...eða hinum sem heitir það sama!

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import courses from "../utils/coursesDescription"
import { Row, Card, CardTitle, CardBody, CardText, Button } from "reactstrap"
import { slugify } from "../utils/utilFuncs"

// Myndir fyrir seríur
import pythonBasicsThumb from "../images/courseThumbs/pythonBasicsThumb.jpg"
import cppBasicsThumb from "../images/courseThumbs/cppBasicsThumb.png"

const pythonBasics = 0
const cppBasics = 1
const pythonProjects = 2
const cppProjects = 3

/*
 * Já, þetta er harðkóðað í drasl!
 * Það er því að...uuu....útaf ástæðum!!
 */

const CoursesPage = () => (
  <Layout pageTitle="Seríur">
    <SEO title="Seríur" keywords={[`/*WHAT TO PUT HERE!!?*/`]} />
    
    {/* PYTHON */}
    <Card className="border-color">
      <a href={`/course/${slugify(courses[pythonBasics].name)}`}>
        <img src={pythonBasicsThumb} style={{ maxWidth: "100%" }} alt="PYTHON" />
      </a>
      <CardBody>
        <Link to={`/course/${slugify(courses[pythonBasics].name)}`}>{courses[pythonBasics].name}</Link>
        <CardText>{courses[0].description}</CardText>
        <Link
          to={`/course/${slugify(courses[pythonBasics].name)}`}
          className="btn btn-outline-primary float-right"
        >
          Skoða þetta
        </Link>
      </CardBody>
    </Card>

{/* C++ Basics */}
    <Card>
      <a href={`/course/${slugify(courses[cppBasics].name)}`}>
        <img src={cppBasicsThumb} style={{ maxWidth: "100%" }} alt="PYTHON" />
      </a>
      <CardBody>
        <Link to={`/course/${slugify(courses[cppBasics].name)}`}>{courses[cppBasics].name}</Link>
        <CardText>{courses[0].description}</CardText>
        <Link
          to={`/course/${slugify(courses[cppBasics].name)}`}
          className="btn btn-outline-primary float-right"
        >
          Skoða þetta
        </Link>
      </CardBody>
    </Card>

  </Layout>
)

export default CoursesPage
