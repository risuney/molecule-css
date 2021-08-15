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

const Textarea = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Textarea" description="Textarea and its contents" />
      <Hero title="Textarea" desc="Textarea and its contents" />
      <Section sectionTitle="Normal textarea">
        <textarea cols="35" rows="3" className="textarea" placeholder="Normal" />
        <pre>
          <code className="language-html">{`<textarea cols="35" rows="3" class="textarea" placeholder="Normal"></textarea>`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Border colors">
        <textarea cols="28" rows="2" className="textarea bor-primary" placeholder="Primary" />
        <textarea cols="28" rows="2" className="textarea bor-sakura" placeholder="Sakura" />
        <textarea cols="28" rows="2" className="textarea bor-beni" placeholder="Beni" />
        <textarea cols="28" rows="2" className="textarea bor-orange" placeholder="Orange" />
        <textarea cols="28" rows="2" className="textarea bor-cobalt" placeholder="Cobalt" />
        <textarea cols="28" rows="2" className="textarea bor-danger" placeholder="Danger" />
        <textarea cols="28" rows="2" className="textarea bor-warning" placeholder="Warning" />
        <textarea cols="28" rows="2" className="textarea bor-purple" placeholder="Purple" />
        <textarea cols="28" rows="2" className="textarea bor-info" placeholder="Info" />
        <textarea cols="28" rows="2" className="textarea bor-light" placeholder="Light" />
        <textarea cols="28" rows="2" className="textarea bor-dark" placeholder="Dark" />
        <textarea cols="28" rows="2" className="textarea bor-black" placeholder="Black" />
        <pre>
          <code className="language-html">
            {`
<textarea cols="28" rows="2" class="textarea bor-primary" placeholder="Primary"></textarea>
<textarea cols="28" rows="2" class="textarea bor-sakura" placeholder="Sakura"></textarea>
<textarea cols="28" rows="2" class="textarea bor-beni" placeholder="Beni"></textarea>
<textarea cols="28" rows="2" class="textarea bor-orange" placeholder="Orange"></textarea>
<textarea cols="28" rows="2" class="textarea bor-cobalt" placeholder="Cobalt"></textarea>
<textarea cols="28" rows="2" class="textarea bor-danger" placeholder="Danger"></textarea>
<textarea cols="28" rows="2" class="textarea bor-warning" placeholder="Warning"></textarea>
<textarea cols="28" rows="2" class="textarea bor-purple" placeholder="Purple"></textarea>
<textarea cols="28" rows="2" class="textarea bor-info" placeholder="Info"></textarea>
<textarea cols="28" rows="2" class="textarea bor-light" placeholder="Light"></textarea>
<textarea cols="28" rows="2" class="textarea bor-dark" placeholder="Dark"></textarea>
<textarea cols="28" rows="2" class="textarea bor-black" placeholder="Black"></textarea>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Sizes">
        <textarea cols="30" rows="2" className="textarea size-small" placeholder="Small" />
        <textarea cols="30" rows="2" className="textarea" placeholder="Normal" />
        <textarea cols="30" rows="2" className="textarea size-large" placeholder="Large" />
        <textarea cols="30" rows="2" className="textarea size-big-big" placeholder="Big Big" />
        <pre>
          <code className="language-html">
            {`
<textarea cols="30" rows="2" class="textarea size-small" placeholder="Small"></textarea>
<textarea cols="30" rows="2" class="textarea" placeholder="Normal"></textarea>
<textarea cols="30" rows="2" class="textarea size-large" placeholder="Large"></textarea>
<textarea cols="30" rows="2" class="textarea size-big-big" placeholder="Big Big"></textarea>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="No resize">
        <textarea cols="35" rows="3" className="textarea no-resize" placeholder="No resize" />
        <pre>
          <code className="language-html">{`<textarea cols="35" rows="3" class="textarea no-resize" placeholder="No resize"></textarea>`}</code>
        </pre>
      </Section>
    </Layout>
  )
}

export default Textarea
