import * as React from "react"
import PropTypes from "prop-types"

const Hero = ({ title, desc, children }) => (
  <div className="hero">
    <div className="hero-body">
      <p className="size-1">{title}</p>
      <p className="size-4">{desc}</p>
      {children}
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Hero
