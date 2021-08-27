import React, { useEffect } from "react"
import { Link } from "gatsby"
import { TwitterTimelineEmbed } from "react-twitter-embed"
// components
import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexSectionTitle from "../components/atoms/index_section_title"
import IndexSectionDesc from "../components/atoms/index_section_desc"
// images
import LogoWhite from "../static/logo/logo-mark-white-page.svg"
import Screen from "../static/screen-responsive.svg"
import Timeline from "../static/twitter_timeline.svg"
import Logo from "../static/logo/logo.svg"
// css
import "./molecule-page.css"
import "./index.css"
// highlight.js
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);

const IndexPage = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Home" description="CSS like a molecule" type="website" />
      <div className="hero hero-index bg-beni-other">
        <div className="hero-body">
          <div className="hero-body-text">
            <p className="size-1"><span className="text-bold">Simple</span> and <span className="text-bold">modern</span> CSS framework</p>
            <IndexSectionDesc className="text-sakura">
              Molecule CSS, which combines various parts to create a site, is like a <span className="text-bold text-white">molecule</span>. It's very <span className="text-bold text-white">easy</span> and <span className="text-bold text-white">quick</span> to create a site.
            </IndexSectionDesc>
            <div className="home-btns">
              <Link to="/overview/start" className="btn text-beni-other bg-white round large">Get started</Link>
              <Link to="/docs/" className="btn bg-beni-other round large border">Read document</Link>
            </div>
          </div>
          <div className="img-overlay"></div>
          <img src={LogoWhite} alt="Overlay Logo" className="hero-body-logo" />
        </div>
      </div>
      <section className="webpage-section" id="responsive-d">
        <div className="section-text responsive-d">
          <IndexSectionTitle>
            Not only <span className="text-beni-other text-bold">desktop</span> but also <span className="text-beni-other text-bold">mobile</span>
          </IndexSectionTitle>
          <IndexSectionDesc className="section-desc">
            Molecule CSS makes it easy to bring <span className="text-bold">responsive</span> design to your site to create a site that's suitable for both <span className="text-bold">mobile</span> and <span className="text-bold">desktop</span>.
          </IndexSectionDesc>
        </div>
        <div className="section-media responsive-d">
          <img src={Screen} alt=""/>
        </div>
      </section>
      <section className="webpage-section" id="no-js">
        <IndexSectionTitle className="text-center">
          <span className="text-beni-other text-bold">No JavaScript</span> required
        </IndexSectionTitle>
        <pre className="index">
          <code>&lt;link rel="stylesheet" href="https://unpkg.com/molecule-css@latest/css/molecule.min.css"&gt;</code>
        </pre>
        <IndexSectionDesc className="text-center">
          That's all the code you need. No JavaScript required. You don't have to worry about using <span className="text-bold">React, Vue.js, etc</span>.
        </IndexSectionDesc>
      </section>
      <section className="webpage-section" id="twitter">
        <div className="section-text twitter">
          <IndexSectionTitle>
            Molecule CSS <span className="text-twitter text-bold">Twitter</span>. Lots of the <span className="text-twitter text-bold">latest information</span> there.
          </IndexSectionTitle>
          <IndexSectionDesc className="section-desc">
            You can send <span className="text-bold">messages</span> to it about <span className="text-bold">bugs</span> and <span className="text-bold">features</span> you want to add.
          </IndexSectionDesc>
          <a href="https://twitter.com/MoleculeCSS" className="btn bg-info round large">Go Twitter</a>
        </div>
        <div className="section-media twitter">
          <img src={Timeline} alt="timeline_background" className="twitter-timeline_background" />
          <div className="timeline-area">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="MoleculeCSS"
            options={{height: 570, width: 430}}
            className="twitter-timeline"
            />
          </div>
        </div>
      </section>
      <section className="webpage-section" id="license">
        <div className="section-media license">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="section-text license">
          <IndexSectionTitle>
            Molecule CSS is <span className="text-beni-other text-bold">MIT</span> licensed
          </IndexSectionTitle>
          <IndexSectionDesc className="section-desc">
            In addition to the <span className="text-bold">package</span>, please see <Link to="/404">this page</Link> for <span className="text-bold">logos</span> etc.
          </IndexSectionDesc>
          <Link to="/licence" className="btn bg-info light round">Read LICENSE</Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
