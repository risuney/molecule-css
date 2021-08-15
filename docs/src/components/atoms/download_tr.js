import * as React from "react"
import PropTypes from "prop-types"

const TrDownload = ({ v }) => (
  <tr>
    <td>v{v}</td>
    <td><a href={`https://github.com/risuney/molecule-css/releases/download/v${v}/molecule-css-${v}.zip`}>molecule-css-{v}.zip</a></td>
    <td><a href={`https://registry.npmjs.org/molecule-css/-/molecule-css-${v}.tgz`}>molecule-css-{v}.tgz</a></td>
  </tr>
)

TrDownload.propTypes = {
  v: PropTypes.string,
}

export default TrDownload
