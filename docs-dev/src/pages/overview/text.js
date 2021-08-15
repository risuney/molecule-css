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

const Start = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Text" description="Basic text type of page" />
      <Hero title="Text" desc="Basic text type of page" />
      <Section sectionTitle="Sizes">
        <h1 className="size-1">Size 1</h1>
        <h2 className="size-2">Size 2</h2>
        <h3 className="size-3">Size 3</h3>
        <h4 className="size-4">Size 4</h4>
        <h5 className="size-5">Size 5</h5>
        <h6 className="size-6">Size 6</h6>
        <br/>
        <pre>
          <code className="language-html">
            {`
<h1 class="size-1">Size 1</h1>
<h2 class="size-2">Size 2</h2>
<h3 class="size-3">Size 3</h3>
<h4 class="size-4">Size 4</h4>
<h5 class="size-5">Size 5</h5>
<h6 class="size-6">Size 6</h6>
            `}
          </code>
        </pre><br/>
        <p>Size5 is 1rem(16px)</p>
      </Section>
      <Section sectionTitle="Colors">
        <p className="size-4 text-primary">Primary</p>
        <p className="size-4 text-sakura">Sakura</p>
        <p className="size-4 text-beni">Beni</p>
        <p className="size-4 text-orange">Orange</p>
        <p className="size-4 text-cobalt">Cobalt</p>
        <p className="size-4 text-danger">Danger</p>
        <p className="size-4 text-warning">Warning</p>
        <p className="size-4 text-purple">Purple</p>
        <p className="size-4 text-info">Info</p>
        <p className="size-4 text-light">Light</p>
        <p className="size-4 text-dark">Dark</p>
        <p className="size-4 text-black">Black</p>
      </Section>
      <Section sectionTitle="Marker">
        <p className="size-4">CSS like <span className="text-marker">a molecule</span></p><br/>
        <pre>
          <code className="language-html">{`<p class="size-4">CSS like <span class="text-marker">a molecule</span></p>`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Font style">
        <p className="size-4 text-bold">Bold</p>
        <p className="size-4 text-serif">Serif</p>
        <p className="size-4 text-italic">Italic</p>
        <pre>
          <code className="language-html">
            {`
<p class="size-4 text-bold">Bold</p>
<p class="size-4 text-serif">Serif</p>
<p class="size-4 text-italic">Italic</p>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default Start
