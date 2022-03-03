import React, { useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import "./../molecule-page.css"
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';
import BackImage from '../../static/example.jpg';

hljs.registerLanguage('xml', xml);

const PageSection = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Glassmorphism" description="Frosted glass decorating various parts" />
      <Hero title="Glassmorphism" desc="Frosted glass decorating various parts" />
      <Section sectionTitle="Example" />
      <section
        className="section"
        style={{background: `url(${BackImage})`}}
      >
        <div
          className="card size-medium glassmor"
          style={{height: '200px'}}
        />
      </section>
      <Section>
        <pre>
          <code className="language-html">
            {`<div class="card size-medium glassmor"></div>`}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default PageSection
