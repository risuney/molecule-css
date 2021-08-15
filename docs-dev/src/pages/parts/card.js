import React, { useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import ExImg from "../../static/image.png"
import "./../molecule-page.css"
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);

const Card = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Card" description="Parts that flexibly deform" />
      <Hero title="Card" desc="Parts that flexibly deform" />
      <Section sectionTitle="Side by side">
      <div className="cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
      </div>
      <pre>
        <code className="language-html">
          {`
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
          `}
        </code>
      </pre>
      </Section>
      <Section sectionTitle="Sizes">
        <div className="card size-small">Small</div>
        <div className="card size-medium">Medium</div>
        <div className="card size-large">Large</div>
        <pre>
          <code className="language-html">
            {`
<div class="card size-small">Small</div>
<div class="card size-medium">Medium</div>
<div class="card size-large">Large</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Visual card">
        <div className="card size-medium has-visual">
          <div className="card-visual">
            <img src={ExImg} alt="Example" />
          </div>
          <div className="card-body">
            <p className="size-4">Visual card</p>
            <p>This is visual card</p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Card
