import React from "react"
import { Link } from "gatsby"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../utils/utilFuncs"

const Post = ({ title, course, slug, date, body, fluid, tags }) => {
  return (
    <Card className="border-color">
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={slug}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> - {` `}
          <span className="text-info">{course}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary" className="text-uppercase">
                    {tag}
                  </Badge>
                  {/*Or secondary...or something...? */}
                </Link>
              </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-right">
          Skoða þetta
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
