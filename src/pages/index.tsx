import React from "react"
import { graphql } from "gatsby"
import { RecoilRoot } from 'recoil'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostingList from "../components/posting-list"
import TagFilter from "../components/tag-filter"
import "../style/home.less"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data

  return (
    <RecoilRoot>
    <Layout location="/">
      <SEO title="Posting" />
      <section className="home">
        <TagFilter />
        <PostingList postingList={ edges } />
      </section>
    </Layout>
    </RecoilRoot>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            description
            tags
          }
        }
      }
    }
  }
`