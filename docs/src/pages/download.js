import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import TrDownload from "../components/atoms/download_tr"
import "./molecule-page.css"

const Download = () => (
  <Layout>
    <Seo title="Download" description="You can download the version published in the past" />
    <Hero title="Download" desc="You can download the version published in the past" />
    <section className="section">
      <table className="table stripe size-width-full text-center">
        <thead>
          <tr>
            <th>Version</th>
            <th>zip</th>
            <th>tgz</th>
          </tr>
        </thead>
        <tbody>
          <TrDownload v="1.1.1" />
          <TrDownload v="1.1.0" />
          <TrDownload v="1.0.11" />
          <TrDownload v="1.0.10" />
          <TrDownload v="1.0.9" />
          <TrDownload v="1.0.8" />
          <TrDownload v="1.0.7" />
          <TrDownload v="1.0.6" />
          <TrDownload v="1.0.5" />
          <TrDownload v="1.0.4" />
          <TrDownload v="1.0.3" />
          <TrDownload v="1.0.2" />
          <TrDownload v="1.0.1" />
          <TrDownload v="1.0.0" />
        </tbody>
      </table>
    </section>
  </Layout>
)

export default Download
