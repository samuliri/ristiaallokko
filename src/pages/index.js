import React from "react";

import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import titleSVG from "../images/otsikko.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Exhibition" />
    <div
      style={{
        display: `flow-root`,
        fontFamily: `Portland-Bold`,
        textTransform: `uppercase`
      }}
    >
      <div
        className={`wave`}
        style={{ float: `right`, letterSpacing: `0.05em` }}
      >
        <p style={{ marginBottom: `0.1rem` }}>Lapinlahti Hospital Area</p>
        <p>10-26 April</p>
      </div>
    </div>
    <p
      style={{
        marginTop: `2rem`,
        marginBottom: `3rem`,
        textTransform: `uppercase`,
        letterSpacing: `0.1em`
      }}
    >
      Aalto Media Lab Spring Exhibition
    </p>
    <h1 style={{ display: `none` }}>Ristiaallokko</h1>
    <div style={{ maxWidth: `500px`, marginBottom: `2rem` }}>
      <img src={titleSVG} alt="Ristiaallokko" />
    </div>
    <div style={{ maxWidth: `40rem`, margin: `auto` }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vitae nunc pretium, malesuada mauris sed, sodales urna. Nunc ac
        tristique lacus, ac ornare nunc. Aenean faucibus orci et ex sodales, et
        suscipit felis placerat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque in tristique orci, ac mollis risus.
        Curabitur vel purus mi. Proin accumsan quam non imperdiet suscipit.
        Nullam scelerisque nunc ac metus pellentesque semper. Sed a ante
        dapibus, rhoncus ante ac, commodo odio. Curabitur ut sem at lacus
        aliquet convallis. Sed congue tincidunt dolor vitae imperdiet. Sed sit
        amet gravida purus. Mauris at dolor fermentum, auctor est a, dignissim
        dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
        at mauris sagittis, porttitor sapien in, semper enim.
      </p>
      <h2>Otsikko</h2>
      <p>
        Ut non condimentum mi, quis auctor mi. Aenean leo nisl, scelerisque vel
        luctus nec, tristique sit amet magna. Integer mollis sapien eget orci
        tincidunt tincidunt. In sed imperdiet ante, ut suscipit elit. Nullam
        facilisis est sit amet velit volutpat lacinia et id purus. Nullam
        pretium, metus at mattis porta, elit augue vehicula augue, in iaculis
        erat ante eget enim. Sed mattis vitae nisl in dapibus. Nunc quis augue
        sit amet magna dapibus facilisis.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
