import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkCard = ({ to, title, desc }) => (
  <Link to={to} className="card page">
    <p className="size-3 text-bold">{title}</p>
    <p>{desc}</p>
  </Link>
)

LinkCard.propTypes = {
  to: PropTypes.array,
  title: PropTypes.array,
  desc: PropTypes.array
}

export default LinkCard
