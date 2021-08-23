import React from "react"
import Modal from "react-modal"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import LogoDetail from "../static/logo/logo_detail.svg"
import "./molecule-page.css"

Modal.setAppElement('#___gatsby')

const Lisence = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Layout>
      <Seo title="LICENCE" description="About Molecule CSS LICENCE and logo download" />
      <Hero title="LISENCE" desc="About Molecule CSS LICENCE and logo download" />
      <section className="section">
        <p className="size-4">Molecule CSS is <span className="text-bold">MIT</span> licensed</p>
        <p>Please use according to the MIT License.</p><br/>
        <button className="btn bg-info round border" onClick={() => openModal()}>See LISENCE</button>
        <Modal
          className="react-modal"
          isOpen={modalIsOpen}
          onRequestClose={() => closeModal()}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-bg modal"
        >
          <div className="modal-content">
            <a href="https://github.com/risuney/molecule-css/blob/main/LICENSE" className="size-3">LISENCE</a><br/>
            <p>MIT License</p><br/>
            <p>Copyright (c) 2021 Risuney</p>
            <p>Permission is hereby granted, free of charge, to any person obtaining a copy<br/>
            of this software and associated documentation files (the "Software"), to deal<br/>
            in the Software without restriction, including without limitation the rights<br/>
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>
            copies of the Software, and to permit persons to whom the Software is<br/>
            furnished to do so, subject to the following conditions:</p><br/>
            <p>The above copyright notice and this permission notice shall be included in all<br/>
            copies or substantial portions of the Software.</p><br/>
            <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br/>
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br/>
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br/>
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br/>
            SOFTWARE.</p>
          </div>
        </Modal>
      </section>
      <Section sectionTitle="Download logos">
        <a
          href="https://github.com/risuney/molecule-css/releases/download/v1.0.9/molecule-css-logo.zip"
          className="btn round bg-info"
        >
          Download (zip - 85.292kB)
        </a>
      </Section>
      <Section sectionTitle="About logo">
        <p>The logo mark is #c22047, the text is #5e5e5e, and the font is Helvetica Neue Bold.</p>
        <img src={LogoDetail} alt="Logo details" />
      </Section>
    </Layout>
  )
}

export default Lisence
