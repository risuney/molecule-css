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

const Neumor = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Neumorphism" description="Decorate parts in a modern way" />
      <Hero title="Neumorphism" desc="Decorate parts in a modern way" />
      <Section sectionTitle="Example" />
      <Section className="bg-info">
        <button className="btn neumor round">Neu</button>
      </Section>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="bg-info">
  <button class="btn neumor round">Neu</button>
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
              <td>nomal</td><td>.neumor</td>
            </tr>
            <tr>
              <td>inset</td><td>.neumor.inset</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </Layout>
  )
}

export default Neumor
