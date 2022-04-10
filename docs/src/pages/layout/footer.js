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

const PageFooter = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Footer" description="Footer where you can write what you need" />
      <Hero title="Footer" desc="Footer where you can write what you need" />
      <Section sectionTitle="Footer(nav)" />
      <footer className="footer bg-light">
        <nav className="nav">
          <div className="footer-column">
            <p className="size-footer-text text-heading">Foo</p>
            <p className="size-footer-text">I</p>
            <p className="size-footer-text">Have</p>
            <p className="size-footer-text">A</p>
            <p className="size-footer-text">Pen</p>
          </div>
          <div className="footer-column">
            <p className="size-footer-text text-heading">Bar</p>
            <p className="size-footer-text">I</p>
            <p className="size-footer-text">Have</p>
            <p className="size-footer-text">An</p>
            <p className="size-footer-text">Apple</p>
          </div>
          <div className="footer-column">
            <p className="size-footer-text text-heading">A113</p>
            <p className="size-footer-text">Oh</p>
            <p className="size-footer-text">Apple</p>
            <p className="size-footer-text">Pen</p>
          </div>
        </nav>
      </footer>
      <Section>
        <pre>
          <code className="language-html">
            {`
<footer class="footer bg-light">
  <nav class="nav">
    <div class="footer-column">
      <a class="size-footer-text text-heading">Foo</a>
      <a class="size-footer-text">I</a>
      <a class="size-footer-text">Have</a>
      <a class="size-footer-text">A</a>
      <a class="size-footer-text">Pen</a>
    </div>
    <div class="footer-column">
      <a class="size-footer-text text-heading">Bar</a>
      <a class="size-footer-text">I</a>
      <a class="size-footer-text">Have</a>
      <a class="size-footer-text">An</a>
      <a class="size-footer-text">Apple</a>
    </div>
    <div class="footer-column">
      <a class="size-footer-text text-heading">A113</a>
      <a class="size-footer-text">Oh</a>
      <a class="size-footer-text">Apple</a>
      <a class="size-footer-text">Pen</a>
    </div>
  </nav>
</footer>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Footer(copyright)" />
      <footer className="footer bg-light">
        <p className="size-footer-text footer-copy-right text-center">Copyright © 20xx You All rights reserved.</p>
      </footer>
      <Section>
        <pre>
          <code className="language-html">
            {`
<footer class="footer bg-light">
  <p class="size-footer-text footer-copy-right text-center">Copyright © 20xx You All rights reserved.</p>
</footer>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default PageFooter
