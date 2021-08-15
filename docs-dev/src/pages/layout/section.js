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

const PageSection = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Section" description="Optimal region for fitting various parts" />
      <Hero title="Section" desc="Optimal region for fitting various parts" />
      <Section sectionTitle="Normal section" />
      <section className="section bg-light">
        <p className="size-3">Normal</p>
      </section>
      <Section>
        <pre>
          <code className="language-html">
            {`
<section class="section bg-light">
  <p class="size-3">Normal</p>
  <p>* Colored for easy understanding</p>
</section>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Size" />
      <section className="section bg-light size-large">
        <p className="size-3">Large section</p>
      </section>
      <Section>
        <pre>
          <code className="language-html">
            {`
<section class="section bg-light size-large">
  <p class="size-3">Large section</p>
</section>

            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default PageSection
