import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import LinkCard from "../../components/atoms/linkcard"
import Data from "../../static/linkcard.json"
import "./../molecule-page.css"

const card = Data.overview

const Overview = () => (
  <Layout>
    <Seo title="Overview" description="Basic functions and usage" />
    <Hero title="Overview" desc="Basic functions and usage" />
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

export default Overview
