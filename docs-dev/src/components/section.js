import * as React from "react"
import PropTypes from "prop-types"

const Section = ({ sectionTitle, children }) => (
  <section className="section">
    <h2 className="size-3 heading">{sectionTitle}</h2>
    {children}
  </section>
)

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section
