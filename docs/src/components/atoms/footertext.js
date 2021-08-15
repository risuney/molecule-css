import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const FooterText = ({ to, title }) => (
  <Link to={to} className="size-footer-text">{title}</Link>
)

FooterText.propTypes = {
  to: PropTypes.array,
  title: PropTypes.array
}

export default FooterText
