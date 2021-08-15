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

const Input = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Input" description="Input and its contents" />
      <Hero title="Input" desc="Input and its contents" />
      <Section sectionTitle="Normal input">
        <input type="text" className="input" placeholder="Normal" />
        <pre>
          <code className="language-html">{`<input type="text" class="input" placeholder="Normal">`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Border colors">
        <input type="text" className="input bor-primary" placeholder="Primary" />
        <input type="text" className="input bor-sakura" placeholder="Sakura" />
        <input type="text" className="input bor-beni" placeholder="Beni" />
        <input type="text" className="input bor-orange" placeholder="Orange" />
        <input type="text" className="input bor-cobalt" placeholder="Cobalt" />
        <input type="text" className="input bor-danger" placeholder="Danger" />
        <input type="text" className="input bor-warning" placeholder="Warning" />
        <input type="text" className="input bor-purple" placeholder="Purple" />
        <input type="text" className="input bor-info" placeholder="Info" />
        <input type="text" className="input bor-light" placeholder="Light" />
        <input type="text" className="input bor-dark" placeholder="Dark" />
        <input type="text" className="input bor-black" placeholder="Black" />
        <pre>
          <code className="language-html">
            {`
<input type="text" class="input bor-primary" placeholder="Primary">
<input type="text" class="input bor-sakura" placeholder="Sakura">
<input type="text" class="input bor-beni" placeholder="Beni">
<input type="text" class="input bor-orange" placeholder="Orange">
<input type="text" class="input bor-cobalt" placeholder="Cobalt">
<input type="text" class="input bor-danger" placeholder="Danger">
<input type="text" class="input bor-warning" placeholder="Warning">
<input type="text" class="input bor-purple" placeholder="Purple">
<input type="text" class="input bor-info" placeholder="Info">
<input type="text" class="input bor-light" placeholder="Light">
<input type="text" class="input bor-dark" placeholder="Dark">
<input type="text" class="input bor-black" placeholder="Black">
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Round">
        <input type="text" className="input round" placeholder="Round" />
        <pre>
          <code className="language-html">{`<input type="text" class="input round" placeholder="Round">`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Sizes">
        <input type="text" className="input size-small" placeholder="Small" />
        <input type="text" className="input" placeholder="Normal" />
        <input type="text" className="input size-large" placeholder="Large" />
        <input type="text" className="input size-big-big" placeholder="Big Big" />
        <pre>
          <code className="language-html">
            {`
<input type="text" class="input size-small" placeholder="Small">
<input type="text" class="input" placeholder="Normal">
<input type="text" class="input size-large" placeholder="Large">
<input type="text" class="input size-big-big" placeholder="Big Big">
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default Input
