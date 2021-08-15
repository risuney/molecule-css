import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import ColorsTr from "../../components/atoms/colors_tr"
import ColorData from "../../static/colors.json"
import "./../molecule-page.css"

const data = ColorData

const Colors = () => (
  <Layout>
    <Seo title="Colors" description="Colors that apply to all" />
    <Hero title="Colors" desc="Colors that apply to all" />
    <Section sectionTitle="Colors">
      <table className="table size-width-full text-center">
        <thead>
          <tr>
            <th>Color name</th>
            <th>Sample</th>
            <th>HEX</th>
            <th>RGB</th>
            <th>Variable</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) =>
            <ColorsTr
              colorName={data.colorName}
              rgb={data.rgb}
              hex={data.hex}
              variable={data.variable}
            />
          )}
        </tbody>
      </table>
    </Section>
  </Layout>
)

export default Colors
