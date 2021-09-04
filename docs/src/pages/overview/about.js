import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Section from "../../components/section"
import "./../molecule-page.css"

const About = () => (
  <Layout>
    <Seo title="About" description="About MoleculeCSS" />
    <Hero title="About" desc="About MoleculeCSS" />
    <Section sectionTitle="What is MoleculeCSS ?">
      <p>Molecule CSS is a modern and simple design CSS framework created by risuney.</p><br/>
      <p>Like Walt Disney's words "Disneyland will never be completed.", Molecule CSS will never be completed. As time goes on, the frequency of feature updates and additions may decrease, but I would like to continue to create the framework that people around the world seek. The site design will change as the times progress. Moleucle CSS will respond to such trends with major updates.</p><br/>
      <p>In conclusion, Molecule CSS is an eternally unfinished and modern CSS framework.</p>
    </Section>
    <Section sectionTitle="Why is MoleculeCSS free?">
      <p>This is because it was created by risuney, the developer of Molecule CSS, to kill time.</p>
      <p>You don't need any money. If you want to pay, please donate to a donation organization. Rather, I would like to give it to everyone who has spent the money (although I will not pay it). If you use Molecule CSS from now on, it will be permanently free.</p>
    </Section>
    <Section sectionTitle="Who is risuney?">
      <p>risuney is the developer of Molecule CSS. I am Japanese living in Japan and speaks Japanese. I can speak a little English. Details are written on <a href="https://risuney.github.io/">this site.</a></p>
      <a href="https://risuney.github.io/" target="_blank" rel="noopener noreferrer">
        <img src="https://pbs.twimg.com/media/E-bE8J6VIAgSf3C?format=jpg" alt="website" class="risuney-website-link"/>
      </a>
    </Section>
  </Layout>
)

export default About
