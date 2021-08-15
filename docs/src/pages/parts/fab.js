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

const Fab = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="FAB" description="Floating action button" />
      <Hero title="FAB" desc="Floating action button" />
      <button className="fab bg-white right bottom"><span className="material-icons">add</span></button>
      <Section sectionTitle="FAB">
        <p>It is in the bottom right</p><br/>
        <pre>
          <code className="language-html">{`<button class="fab bg-white right bottom"><span class="material-icons">add</span></button>`}</code>
        </pre>
      </Section>
    </Layout>
  )
}

export default Fab
