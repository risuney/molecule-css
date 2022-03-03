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

const PageHero = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Hero" description="The most prominent region on the page" />
      <Hero title="Hero" desc="The most prominent region on the page" />
      <Section sectionTitle="Normal hero" />
      <div className="hero">
        <div className="hero-body">
          <p className="size-3">Normal hero</p>
        </div>
      </div>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="hero">
  <div class="hero-body">
    <p class="size-3">Normal hero</p>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Colors">
        <p>Can be set like any other color</p>
        <p className="size-4">Example</p>
      </Section>
      <div className="hero bg-sakura">
        <div className="hero-body">
          <p className="size-3">Color: Sakura</p>
        </div>
      </div>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="hero bg-sakura">
  <div class="hero-body">
    <p class="size-3">Color: Sakura</p>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Visual">
        <p>Images and videos can be the background</p>
      </Section>
      <div className="hero bg-visual">
        <div className="hero-body">
          <h3 className="size-3">Visual</h3>
          <p>It's so beautiful</p>
        </div>
        <div className="hero-visual-overlay" />
        <img src={ExImg} className="hero-visual" alt="ExampleImage" />
      </div>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="hero bg-visual">
  <div class="hero-body">
    <h3 class="size-3">Visual</h3>
    <p>It's so beautiful</p>
  </div>
  <div class="hero-visual-overlay"></div>
  <img src="" class="hero-visual">
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Header" />
      <div className="hero bg-light has-header">
        <header className="header hero-header">
          <div className="header-contents">
            <div className="header-title">
              <h4 className="size-4 header-item">Molecule</h4>
            </div>
            <nav className="nav">
              <p className="header-item bg-header-item text-text">Docs</p>
              <p className="header-item bg-header-item text-text">About</p>
            </nav>
          </div>
        </header>
        <div className="hero-body">
          <h3 className="size-3">Hero has header</h3>
        </div>
      </div>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="hero bg-light has-header">
  <header class="header hero-header">
    <div class="header-contents">
      <div class="header-title">
        <h4 class="size-4 header-item">Molecule</h4>
      </div>
      <nav class="nav">
        <a class="header-item bg-header-item text-text">Docs</a>
        <a class="header-item bg-header-item text-text">About</a>
      </nav>
    </div>
  </header>
  <div class="hero-body">
    <h3 class="size-3">Hero has header</h3>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Sizes" />
      <div className="hero size-large bg-light">
        <div className="hero-body">
          <p className="size-3">Large</p>
        </div>
      </div>
      <div className="hero size-full-height bg-warning">
        <div className="hero-body">
          <p className="size-3">Full height</p>
        </div>
      </div>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="hero size-large bg-light">
  <div class="hero-body">
    <p class="size-3">Large</p>
  </div>
</div>

<div class="hero size-full-height bg-warning">
  <div class="hero-body">
    <p class="size-3">Full height</p>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Center" />
      <div className="hero bg-light center">
        <div className="hero-body">
          <p className="size-3">Center</p>
        </div>
      </div>
      <Section>
        <pre>
          <code className="language-html">
            {`
<div class="hero bg-light center">
  <div class="hero-body">
    <p class="size-3">Center</p>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default PageHero
