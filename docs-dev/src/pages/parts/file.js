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

const File = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="File" description="File input and its contents" />
      <Hero title="File" desc="File input and its contents" />
      <Section>
        <label for="file" className="file">
          <span>Choose a file…</span>
          <input type="file" id="file" className="file-input" />
        </label>
        <pre>
          <code className="language-html">
            {`
<label for="file" class="file">
  <span>Choose a file…</span>
  <input type="file" id="file" class="file-input">
</label>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default File
