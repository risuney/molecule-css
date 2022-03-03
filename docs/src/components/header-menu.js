import * as React from "react"
import PropTypes from "prop-types"
import MenuText from "./atoms/menu-text"
import Twitter from "../static/twitter-logo.svg"
import GitHub from "../static/GitHub-Mark.png"
import YouTube from "../static/youtube_social_red_circle.svg"

const HeaderMenu = ({ close }) => (
  <div className="menu">
    <div className="menu-header">
      <span className="size-3 text-bold">Menu</span>
      <span className="bg-light icon-cancel material-icons" onClick={close}>clear</span>
    </div>
    <div className="menu-contents">
      <MenuText to="/docs/" option="text-bold" icon="description" iconColor="orange">Document</MenuText>
      <MenuText to="/overview/" icon="plagiarism" iconColor="info">Overview</MenuText>
      <MenuText to="/layout/" icon="dashboard" iconColor="warning">Layout</MenuText>
      <MenuText to="/parts/" icon="extension" iconColor="primary">Parts</MenuText>
      <MenuText to="/effect/" icon="auto_awesome" iconColor="purple">Effects</MenuText>
      <hr style={{width: '100vw', position: 'relative', left: '-24px'}}/>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <a href="https://github.com/risuney/molecule-css" className="menu-accounts" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href="https://twitter.com/MoleculeCSS" className="menu-accounts" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UCjtWaC01UXKRvnJ8zO0CzAw" className="menu-accounts" target="_blank" rel="noopener noreferrer">
          <img src={YouTube} alt="YouTube" />
        </a>
      </div>
    </div>
  </div>
)

HeaderMenu.propTypes = {
  close: PropTypes.func
}

export default HeaderMenu
