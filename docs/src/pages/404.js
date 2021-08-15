import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./molecule-page.css"
import "./index.css"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Not found" />
    <div className="hero hero-index bg-sakura center">
      <div className="hero-body">
        <p className="size-1">404 Not Found</p>
        <br/>
        <p className="size-4">But don't worry. Anyone can make mistakes. Let's find it again!</p>
        <p className="size-4">Please click here to go to <Link to="/">the site top </Link>.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
