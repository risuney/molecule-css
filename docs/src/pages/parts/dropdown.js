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

const Dropdown = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Dropdown" description="A dropdown that allows you to view the list" />
      <Hero title="Dropdown" desc="A dropdown that allows you to view the list" />
      <Section sectionTitle="Normal Dropdown">
        <div className="dropdown">
          <button className="btn dropdown-toggle">Down</button>
          <div className="dropdown-menu bg-white">
            <p className="dropdown-item text-text">Foo</p>
            <p className="dropdown-item text-text">Bar</p>
          </div>
        </div>
        <pre>
          <code className="language-html">
            {`
<div class="dropdown">
  <button class="btn dropdown-toggle">Down</button>
  <div class="dropdown-menu bg-white">
    <a href="" class="dropdown-item text-text">Foo</a>
    <a href="" class="dropdown-item text-text">Bar</a>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Border menu">
        <div className="dropdown">
          <button className="btn dropdown-toggle">Down</button>
          <div className="dropdown-menu bg-white border">
            <p className="dropdown-item text-text">Foo</p>
            <p className="dropdown-item text-text">Bar</p>
          </div>
        </div>
        <pre>
          <code className="language-html">
            {`
<div class="dropdown">
  <button class="btn dropdown-toggle">Down</button>
  <div class="dropdown-menu bg-white border">
    <a href="" class="dropdown-item text-text">Foo</a>
    <a href="" class="dropdown-item text-text">Bar</a>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Hover to be active">
        <p>This method is best for mobile.</p><br/>
        <div className="dropdown hover-active">
          <button className="btn dropdown-toggle">Down</button>
          <div className="dropdown-menu bg-white">
            <p className="dropdown-item text-text">Foo</p>
            <p className="dropdown-item text-text">Bar</p>
          </div>
        </div>
        <pre>
          <code className="language-html">
            {`
<div class="dropdown hover-active">
  <button class="btn dropdown-toggle">Down</button>
  <div class="dropdown-menu bg-white">
    <a href="" class="dropdown-item text-text">Foo</a>
    <a href="" class="dropdown-item text-text">Bar</a>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Active">
        <p>This method is best for clicking to view.<br/>Please use JavaScript.</p><br/>
        <div className="dropdown active">
          <button className="btn dropdown-toggle">Down</button>
          <div className="dropdown-menu bg-white">
            <p className="dropdown-item text-text">Foo</p>
            <p className="dropdown-item text-text">Bar</p>
          </div>
        </div><br/><br/>
        <pre>
          <code className="language-html">
            {`
<div class="dropdown active">
  <button class="btn dropdown-toggle">Down</button>
  <div class="dropdown-menu bg-white">
    <a href="" class="dropdown-item text-text">Foo</a>
    <a href="" class="dropdown-item text-text">Bar</a>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default Dropdown
