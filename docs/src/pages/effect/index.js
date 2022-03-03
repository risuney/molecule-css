import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import LinkCard from "../../components/atoms/linkcard"
import Data from "../../static/linkcard.json"
import "./../molecule-page.css"

const card = Data.effect

const Effect = () => (
  <Layout>
    <Seo title="Effects" description="Effects that make MoleculeCSS even more useful" />
    <Hero title="Effects" desc="Effects that make MoleculeCSS even more useful" />
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

export default Effect
