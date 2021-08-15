import React, { useEffect } from "react"
import Modal from "react-modal";
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import ExImg from "../../static/image.png"
import ExVideo from "../../static/video.mp4"
import { VideoTag } from "react-video-tag"
import "./../molecule-page.css"
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('xml', xml);

Modal.setAppElement("#___gatsby");

const PageModal = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  })

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = (num) => {
    setIsOpen(num)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Layout>
      <Seo title="Visual Modal" description="Modal for visual" />
      <Hero title="Visual Modal" desc="Modal for visual" />
      <Section sectionTitle="Normal">
        <button className="btn bg-info round border" onClick={() => handleOpenModal(0)}>Indicate</button>
        <Modal
          className="react-modal"
          isOpen={(modalIsOpen === 0)}
          onRequestClose={() => handleCloseModal()}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-bg modal"
        >
          <div className="modal-visual">
            <img src={ExImg} alt="Example" />
          </div>
        </Modal>
        <pre>
          <code className="language-html">
            {`
<div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-visual">
    <img src="">
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Rounded corners">
        <button className="btn bg-info round border" onClick={() => handleOpenModal(1)}>Indicate</button>
        <Modal
          className="react-modal"
          isOpen={(modalIsOpen === 1)}
          onRequestClose={() => handleCloseModal()}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-bg modal"
        >
          <div className="modal-visual radius">
            <img src={ExImg} alt="Example" />
          </div>
        </Modal>
        <pre>
          <code className="language-html">
            {`
<div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-visual radius">
    <img src="">
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Video">
        <button className="btn bg-info round border" onClick={() => handleOpenModal(2)}>Indicate</button>
        <Modal
          className="react-modal"
          isOpen={(modalIsOpen === 2)}
          onRequestClose={() => handleCloseModal()}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-bg modal"
        >
          <div className="modal-visual">
            <VideoTag muted autoPlay loop src={ExVideo} />
          </div>
        </Modal>
        <pre>
          <code className="language-html">
            {`
<div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-visual radius">
    <video src=""></video>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Attention">
        <p>Since the maximum size is 100% on smartphones, it is recommended to place a screen hide button.<br/>Please control with JavaScript.</p>
      </Section>
    </Layout>
  )
}

export default PageModal
