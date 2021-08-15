import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import "./../molecule-page.css"
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);

const Start = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Start" description="How to get started" />
      <Hero title="Start" desc="How to get started" />
      <Section sectionTitle="npm">
        <pre>
          <code>npm install molecule-css</code>
        </pre>
      </Section>
      <Section sectionTitle="CDN (UNPKG)">
        <pre>
          <code className="language-html">{`<link rel="stylesheet" href="https://unpkg.com/molecule-css@latest/css/molecule.min.css">`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Basic html">
        <pre>
          <code className="language-html">
            {`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="https://unpkg.com/molecule-css@latest/css/molecule.min.css">
  </head>
  <body>
    <!-- Contents -->
  </body>
</html>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Download package">
        <Link to="/download/" className="btn bg-info border round size-large">Go DownloadPage</Link>
      </Section>
    </Layout>
  )
}

export default Start
