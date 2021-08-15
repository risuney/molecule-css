import * as React from "react"
import PropTypes from "prop-types"

const Code = ({ lang, children }) => (
  <pre>
    <code class={`language-${lang}`}>
      {children}
    </code>
  </pre>
)

Code.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Code
