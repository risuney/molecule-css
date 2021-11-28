import * as React from "react"
import FooterHeading from "./atoms/footerheading"
import FooterText from "./atoms/footertext"
import Data from "../static/linkcard.json"

const overview = Data.overview
const layout = Data.layout
const parts = Data.parts

const Footer = () => (
  <footer className="footer">
    <p className="footer-top-text">risuney is Japanese. So I can't English well. If you think the sentence is strange, please <a href="https://twitter.com/MoleculeCSS">send me a Message</a>.</p>
    <nav className="nav">
      <div className="footer-column">
        <FooterHeading to="/overview" title="Overview" />
        {overview.map((overview) =>
          <FooterText
            to={overview.to}
            title={overview.title}
          />
        )}
      </div>
      <div className="footer-column">
        <FooterHeading to="/layout" title="Layout" />
        {layout.map((layout) =>
          <FooterText
          to={layout.to}
          title={layout.title}
          />
        )}
      </div>
      <div className="footer-column">
        <FooterHeading to="/parts" title="Parts" />
        {parts.map((parts) =>
          <FooterText
            to={parts.to}
            title={parts.title}
          />
        )}
      </div>
    </nav>
    <p className="size-footer-text footer-copy-right text-center">Copyright © {new Date().getFullYear()} risuney All rights reserved.</p>
  </footer>
)

export default Footer
