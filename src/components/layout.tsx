import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useRecoilState } from 'recoil'
import { recoil_open } from '../recoil/side-toggle'
import PropTypes from "prop-types"

import SideMenu from "./side-menu"
import "../style/reset.less"
import "../style/utill.less"

const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = useRecoilState(recoil_open);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `)
  return (
    <>
      <SideMenu siteData={ data.site.siteMetadata } location={ location || '' } />
      <main className={ `content ${isOpen ? 'open' : ''}` }>{ children }</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
