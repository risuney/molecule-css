import * as React from "react"
import Modal from "react-modal";
import { Link } from "gatsby"
import HeaderMenu from "./header-menu"
import Logo from "../static/logo/logo.svg"
import Twitter from "../static/twitter-logo.svg"
import GitHub from "../static/GitHub-Mark.png"
import YouTube from "../static/youtube_social_red_circle.svg"

Modal.setAppElement("#___gatsby");

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <header className="header">
      <div className="header-contents">
        <div className="header-title">
          <Link to="/">
            <img src={Logo} className="header-item header-logo" alt="Logo" />
          </Link>
        </div>
        <nav className="nav nav-header">
          <div className="nav-content">
            <Link to="/docs" className="header-item bg-header-item text-text size-4"><span className="material-icons text-orange">description</span>Document</Link>
            <Link to="/overview/start" className="header-item bg-header-item text-text size-4"><span className="material-icons text-info">play_arrow</span>Start</Link>
          </div>
          <div className="nav-content">
            <a href="https://github.com/risuney/molecule-css" className="accounts" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://twitter.com/MoleculeCSS" className="accounts" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/channel/UCjtWaC01UXKRvnJ8zO0CzAw" className="accounts" target="_blank" rel="noopener noreferrer">
              <img src={YouTube} alt="YouTube" />
            </a>
          </div>
        </nav>
        <span class="material-icons open-menu" onClick={() => openModal()}>menu</span>
      </div>
      <Modal
        className="react-modal"
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        overlayClassName="header-menu-ol"
      >
        <HeaderMenu close={() => closeModal()} />
      </Modal>
    </header>
  )
}

export default Header
