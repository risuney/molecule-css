import React, { useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import "./../molecule-page.css"
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);

const Center = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Center" description="Center layout with various uses" />
      <Hero title="Center" desc="Center layout with various uses" />
      <Section sectionTitle="Center">
        <div className="center-box">
          <p className="size-3">Hello Space</p>
        </div>
        <pre>
          <code className="language-html">
            {`
<div className="center-box">
  <p className="size-3">Hello Space</p>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Options">
        <table className="table stripe text-center size-width-full">
          <thead>
            <tr>
              <th>Options</th>
              <th>class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>top center</td><td>.center-box.top</td>
            </tr>
            <tr>
              <td>center</td><td>.cente-box</td>
            </tr>
            <tr>
              <td>bottom center</td><td>.center-box.bottom</td>
            </tr>
            <tr>
              <td>full screen</td><td>.center-box.full-window</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </Layout>
  )
}

export default Center
