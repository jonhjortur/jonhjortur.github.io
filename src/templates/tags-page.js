import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Badge, Col } from "reactstrap"
import { slugify } from "../utils/utilFuncs"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="Some tags">
      <SEO
        title="All tags"
        keywords={["tags", "topics", "efnisatriði", "subjects"]}
      />
      {/*Ég á alveg örugglega eftir að nenna að færa þessa inline-styles seinna. Já já, ekki spurning! Humm!! */}
        <ul style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          {tags.map(tag => (
            <li key={tag} style={{ margin: "5px"}}>
              <Button style={{fontSize: "26px"}} color="primary" href={`/tag/${slugify(tag)}`}>
                {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
              </Button>
            </li>
          ))}
        </ul>
    </Layout>
  )
}

export default tagsPage
