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

const PageHeader = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Header" description="Modern and simple header" />
      <Hero title="Header" desc="Modern and simple header" />
      <Section sectionTitle="Normal header" />
      <header className="header">
        <div className="header-contents">
          <div className="header-title">
            <h1 className="size-3 header-item">Molecule</h1>
          </div>
          <nav className="nav">
            <p className="header-item bg-header-item text-text size-4">Document</p>
            <p className="header-item bg-header-item text-text size-4">About</p>
          </nav>
        </div>
      </header>
      <Section>
        <pre>
          <code className="language-html">
            {`
<header class="header">
  <div class="header-contents">
    <div class="header-title">
      <h1 class="size-3 header-item">Molecule</h1>
    </div>
    <nav class="nav">
      <a class="header-item bg-header-item text-text size-4">Document</a>
      <a class="header-item bg-header-item text-text size-4">About</a>
    </nav>
  </div>
</header>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Fixed">
        <pre>
          <code className="language-html">
            {`
<body class="header-fixed">

<header class="header fixed">
  <div class="header-contents">
    <div class="header-title"></div>
    <nav class="nav"></nav>
  </div>
</header>
            `}
          </code>
        </pre>
        <p className="size-4">Only if not mobile</p>
        <pre>
          <code className="language-html">
            {`
<body class="header-fixed not-mobile">

<header class="header fixed not-mobile">
  <div class="header-contents">
    <div class="header-title"></div>
    <nav class="nav"></nav>
  </div>
</header>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default PageHeader
