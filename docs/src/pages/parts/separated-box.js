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

const PageModal = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  })
  return (
    <Layout>
      <Seo title="Separated box" description="Separated box that can be used in various ways" />
      <Hero title="Separated box" desc="Separated box that can be used in various ways" />
      <Section sectionTitle="Basic">
        <div className="separated">
          <div className="separated-cell">Cell 1</div>
          <div className="separated-cell">Cell 2</div>
          <div className="separated-cell">Cell 3</div>
        </div><br/>
        <pre>
          <code className="language-html">
            {`
<div class="separated">
  <div class="separated-cell">Cell 1</div>
  <div class="separated-cell">Cell 2</div>
  <div class="separated-cell">Cell 3</div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Options">
        <table className="table stripe text-center size-width-full">
          <thead>
            <tr>
              <th>Options</th>
              <th>class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background color (box)</td>
              <td>.separated.bg-*</td>
            </tr>
            <tr>
              <td>Background color (cell)</td>
              <td>.separated-cell.bg-*</td>
            </tr>
            <tr>
              <td>Size (small)</td>
              <td>.separated-cell.size-small</td>
            </tr>
            <tr>
              <td>Size (medium)</td>
              <td>.separated-cell.size-medium</td>
            </tr>
            <tr>
              <td>Size (large)</td>
              <td>.separated-cell.size-large</td>
            </tr>
            <tr>
              <td>Action (hover, focus)</td>
              <td>.separated.hover</td>
            </tr>
            <tr>
              <td>Centered text</td>
              <td>.separated.center</td>
            </tr>
            <tr>
              <td>Column</td>
              <td>.separated.column</td>
            </tr>
            <tr>
              <td>Border (box)</td>
              <td>.separated.border</td>
            </tr>
          </tbody>
        </table><br/>
        <p className="size-4">Example</p><br/>
        <div className="separated border center hover">
          <div className="separated-cell bg-warning">Cell 1</div>
          <div className="separated-cell bg-light">Cell 2</div>
          <div className="separated-cell">Cell 3</div>
        </div><br/>
      </Section>
    </Layout>
  )
}

export default PageModal
