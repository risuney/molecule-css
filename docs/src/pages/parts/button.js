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

const PageSection = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Button" description="Buttons with abundant options" />
      <Hero title="Button" desc="Buttons with abundant options" />
      <Section sectionTitle="Normal button">
        <button className="btn">Normal</button>
        <pre>
          <code className="language-html">{`<button class="btn">Normal</button>`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Colors">
        <button className="btn bg-primary">primary</button>
        <button className="btn bg-sakura">sakura</button>
        <button className="btn bg-beni">beni</button>
        <button className="btn bg-orange">orange</button>
        <button className="btn bg-cobalt">cobalt</button>
        <button className="btn bg-danger">danger</button>
        <button className="btn bg-warning">warning</button>
        <button className="btn bg-purple">purple</button>
        <button className="btn bg-info">info</button>
        <button className="btn bg-light">light</button>
        <button className="btn bg-dark">dark</button>
        <button className="btn bg-black">black</button>
        <pre>
          <code className="language-html">
            {`
<button class="btn bg-primary">primary</button>
<button class="btn bg-sakura">sakura</button>
<button class="btn bg-beni">beni</button>
<button class="btn bg-orange">orange</button>
<button class="btn bg-cobalt">cobalt</button>
<button class="btn bg-danger">danger</button>
<button class="btn bg-warning">warning</button>
<button class="btn bg-purple">purple</button>
<button class="btn bg-info">info</button>
<button class="btn bg-light">light</button>
<button class="btn bg-dark">dark</button>
<button class="btn bg-black">black</button>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Round">
        <button className="btn round">Round</button>
        <pre>
          <code className="language-html">{`<button class="btn round">Round</button>`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Border">
        <button className="btn border bg-info">Border</button>
        <pre>
          <code className="language-html">{`<button class="btn border bg-info">Border</button>`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Light">
        <button className="btn light bg-info">Light</button>
        <pre>
          <code className="language-html">{`<button class="btn light bg-info">Light</button>`}</code>
        </pre>
      </Section>
      <Section sectionTitle="Sizes">
        <button className="btn small">Small</button>
        <button className="btn">Normal</button>
        <button className="btn size-large">Large</button>
        <button className="btn size-big-big">Big Big</button>
        <button className="btn size-width-full">100% width</button>
        <pre>
          <code className="language-html">
            {`
<button class="btn small">Small</button>
<button class="btn">Normal</button>
<button class="btn size-large">Large</button>
<button class="btn size-big-big">Big Big</button>
<button class="btn size-width-full">100% width</button>
            `}
          </code>
        </pre>
      </Section>
    </Layout>
  )
}

export default PageSection
