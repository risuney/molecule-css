import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const FooterHeading = ({ to, title }) => (
  <Link to={to} className="size-footer-text text-heading">{title}</Link>
)

FooterHeading.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
}

export default FooterHeading
