import React from 'react'
import { Link } from 'gatsby'

import "../style/posting-list.less"

type IPostingList = {
  node: {
    frontmatter: {
      date: string
      path: string
      title: string
      description: string | null;
      tags: string[]
    }
  }
}

const PostLink = ({ postingList }: { postingList: IPostingList[] }) => {
  const posting = postingList.map((posting, index) => (
    <Link className="posting-list__card"
      key={`${index}_${posting.node.frontmatter.title}`}
      to={ posting.node.frontmatter.path }
    >
      <h3 className="posting-list__top">
        <span className={ `posting-list__marking ${posting.node.frontmatter.tags[0].toLowerCase()}` }></span>
        <span className="posting-list__title">{ posting.node.frontmatter.title }</span>
      </h3>
      <p className="posting-list__date">{ posting.node.frontmatter.date }</p>
      <p className="posting-list__description">{ posting.node.frontmatter.description }</p>
      <p className="posting-list__tag-wrapper">
        { posting.node.frontmatter.tags.map(tag => (
          <span key={ `${posting.node.frontmatter.title}_${tag}` } className={ `posting-list__tag ${tag.toLowerCase()}` }>{ `#${tag}` }</span>
        )) }
      </p>
    </Link>
  ))
  return (
    <section className="posting-list">
      { posting }
    </section>
  )
}

export default PostLink
