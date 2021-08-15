import * as React from "react"
import PropTypes from "prop-types"

const IndexSectionTitle = ({ className, children }) => (
  <p className={`size-2 ${className}`}>{children}</p>
)

IndexSectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default IndexSectionTitle
