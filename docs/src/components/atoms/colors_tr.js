import * as React from "react"
import PropTypes from "prop-types"

const ColorsTr = ({ colorName, hex, rgb, variable }) => (
  <tr>
    <td>{colorName}</td>
    <td className={`bg-${variable}`}></td>
    <td>{hex}</td>
    <td>{rgb}</td>
    <td>{`$${variable}`}</td>
  </tr>
)

ColorsTr.propTypes = {
  colorName: PropTypes.array,
  hex: PropTypes.array,
  rgb: PropTypes.array,
  variable: PropTypes.array
}

export default ColorsTr
