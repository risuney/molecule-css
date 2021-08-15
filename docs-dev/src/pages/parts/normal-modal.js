import React, { useEffect } from "react"
import Modal from "react-modal";
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import "./../molecule-page.css"
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

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
      <Seo title="Modal" description="Modal that can contain various parts" />
      <Hero title="Modal" desc="Modal that can contain various parts" />
      <Section sectionTitle="Content only">
        <button className="btn bg-info round border" onClick={() => handleOpenModal(0)}>Indicate</button>
        <Modal
          className="react-modal"
          isOpen={(modalIsOpen === 0)}
          onRequestClose={() => handleCloseModal()}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-bg modal"
        >
          <div className="modal-content">
            <h2 className="size-3">Content only</h2>
            <p>A number of molecules create wonderful substances. I want to be such a thing.</p>
          </div>
        </Modal>
        <pre>
          <code className="language-html">
            {`
<div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-content">
    <h2 class="size-3">Content only</h2>
    <p>A number of molecules create wonderful substances. I want to be such a thing.</p>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Header & Footer">
        <button className="btn bg-info round border" onClick={() => handleOpenModal(1)}>Indicate</button>
        <Modal
          className="react-modal"
          isOpen={(modalIsOpen === 1)}
          onRequestClose={() => handleCloseModal()}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-bg modal"
        >
          <div className="modal-card">
            <header>
              <p className="modal-title">Modal Title</p>
            </header>
            <div className="modal-body">
              Contents
            </div>
            <footer>
              <button className="btn bg-info border round">All right</button>
              <button className="btn bg-danger border round" onClick={() => handleCloseModal()}>Cancel</button>
            </footer>
          </div>
        </Modal>
        <pre>
          <code className="language-html">
            {`
<div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-card">
    <header>
      <p class="modal-title">Modal Title</p>
    </header>
    <div class="modal-body">
      Contents
    </div>
    <footer>
      <button class="btn bg-info border round">All right</button>
      <button class="btn bg-danger border round" id="cancel">Cancel</button>
    </footer>
  </div>
</div>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Attention">
        <p>Molecule does not include JavaScript. Please prepare by yourself.</p><br/>
      </Section>
    </Layout>
  )
}

export default PageModal
