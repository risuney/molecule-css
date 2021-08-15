import * as React from "react"
import PropTypes from "prop-types"

const IndexSectionDesc = ({ className, children }) => (
  <p className={`size-4 ${className}`}>{children}</p>
)

IndexSectionDesc.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default IndexSectionDesc
