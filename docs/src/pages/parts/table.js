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

const Table = () => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });
  return (
    <Layout>
      <Seo title="Table" description="Modern and simple table" />
      <Hero title="Table" desc="Modern and simple table" />
      <Section sectionTitle="Normal table">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Following</th>
              <th>Follower</th>
              <th>Tweet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3/10/23</td>
              <td>56</td>
              <td>23</td>
              <td>245</td>
            </tr>
            <tr>
              <td>3/11/23</td>
              <td>62</td>
              <td>31</td>
              <td>267</td>
            </tr>
            <tr>
              <td>3/12/23</td>
              <td>67</td>
              <td>51</td>
              <td>335</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <pre>
          <code className="language-html">
            {`
<table class="table">
  <thead>
    <tr>
      <th>data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
    </tr>
  </tbody>
</table>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Stripe">
        <table className="table stripe">
          <thead>
            <tr>
              <th>Date</th>
              <th>Following</th>
              <th>Follower</th>
              <th>Tweet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3/13/23</td>
              <td>69</td>
              <td>50</td>
              <td>346</td>
            </tr>
            <tr>
              <td>3/14/23</td>
              <td>71</td>
              <td>56</td>
              <td>372</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <pre>
          <code className="language-html">
            {`
<table class="table stripe">
  <thead>
    <tr>
      <th>data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
    </tr>
  </tbody>
</table>
            `}
          </code>
        </pre>
      </Section>
      <Section sectionTitle="Text align">
        <p className="size-4">Center</p>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Date</th>
              <th>Following</th>
              <th>Follower</th>
              <th>Tweet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3/15/23</td>
              <td>84</td>
              <td>63</td>
              <td>373</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p className="size-4">Right</p>
        <table className="table text-right">
          <thead>
            <tr>
              <th>Date</th>
              <th>Following</th>
              <th>Follower</th>
              <th>Tweet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3/16/23</td>
              <td>85</td>
              <td>68</td>
              <td>386</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </Layout>
  )
}

export default Table
