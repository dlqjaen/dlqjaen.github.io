import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from './layout'
import SEO from "./seo"
import '../style/posting.less'

type IPosting = {
  markdownRemark: {
    html: string
    frontmatter: {
      date: string
      path: string
      title: string
      description: string
      tags: string[]
    }
  }
}

const Posting: React.FC<PageProps<IPosting>> = ({ data }) => {
  const { markdownRemark: { frontmatter, html } } = data

  return (
    <Layout location="/posting">
      <SEO title={ frontmatter.title } description={ frontmatter.description } />
      <section className="posting">
        <h1 className="posting__title">
          <span>{ frontmatter.title }</span>
          <span className="posting__date">{ frontmatter.date }</span>
        </h1>
        <p className="posting__tag-wrapper">
        { frontmatter.tags.map(tag => (
          <span key={ `${frontmatter.title}_${tag}` } className={ `posting__tag ${tag.toLowerCase()}` }>{ `#${tag}` }</span>
        )) }
      </p>
        <article className="posting__content" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export default Posting

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        description
        tags
      }
    }
  }
`