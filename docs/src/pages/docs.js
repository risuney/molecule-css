import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import LinkCard from "../components/atoms/linkcard"
import Data from "../static/linkcard.json"
import "./molecule-page.css"

const card = Data.docs

const Docs = () => (
  <Layout>
    <Seo title="Document" description="We can help you. The basic source code etc. are posted here." />
    <Hero title="Document" desc="We can help you. The basic source code etc. are posted here." />
    <section className="section">
      <div className="cards-link">
        {card.map((card) =>
          <LinkCard
            to={card.to}
            title={card.title}
            desc={card.desc}
          />
        )}
      </div>
    </section>
  </Layout>
)

export default Docs
