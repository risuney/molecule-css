import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import LinkCard from "../../components/atoms/linkcard"
import Data from "../../static/linkcard.json"
import "./../molecule-page.css"

const card = Data.layout

const Region = () => (
  <Layout>
    <Seo title="Layout" description="Important layouts that make up the page" />
    <Hero title="Layout" desc="Important layouts that make up the page" />
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

export default Region
