import React from "react"
import { useRecoilState } from 'recoil'
import { recoil_open } from '../recoil/side-toggle'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "../style/side-menu.less"

const SideMenu = ({ siteData, location }) => {
  const imgData = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const menuList = [
    {name: '📒 Posting', url: '/', active: ['/', '/posting']}
  ]
  const menuElements = menuList.map( v => (
    <li key={ v.name }>
      <Link className={ v.active.some(a => a === location) ? 'side-menu__link active' : 'side-menu__link' }
        to={ v.url }
      >{ v.name }</Link>
    </li>
  ))
  const [isOpen, setIsOpen] = useRecoilState(recoil_open);
  function onSideMenuToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <aside className={ `side-menu ${isOpen ? 'open' : ''}` }>
      <article className="side-menu__profile">
        <Img className="side-menu__img" fluid={imgData.placeholderImage.childImageSharp.fluid } />
        <h3 className="side-menu__name">{ siteData.author }</h3>
        <a className="side-menu__email" href={ `mailto: ${siteData.email}` }>{ siteData.email }</a>
        <p>
          <a className="side-menu__tag" rel="noopener noreferrer" target="_blank" href="https://github.com/dlqjaen">Github</a>
          <a className="side-menu__tag" rel="noopener noreferrer" target="_blank" href="https://www.hackerrank.com/a01055255417">Hackerrank</a>
          <a className="side-menu__tag" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/dlqjaen/">Instagram</a>
          <a className="side-menu__tag" rel="noopener noreferrer" target="_blank" href="https://flitto.com">Flitto</a>
        </p>
      </article>
      <ul className="side-menu__menu">
        { menuElements }
      </ul>
      <article className="side-menu__production-period">
        <p>© 2020 - { new Date().getFullYear() } Built width Gatsby</p>
        <p>Edited by { siteData.author }</p>
      </article>
      <button className="side-menu__toggle" onClick={ onSideMenuToggle }>
        { isOpen ? '📕' : '📖' }
      </button>
    </aside>
  )
}

export default SideMenu