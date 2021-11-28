import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const MenuText = ({ to, option, icon, iconColor, children }) => (
  <Link to={to} className={`text-text size-4 ${option}`}>
    <span className={`material-icons text-${iconColor} side-by-side`}>{icon}</span>
    {children}
  </Link>
)

MenuText.propTypes = {
  to: PropTypes.string,
  option: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default MenuText
