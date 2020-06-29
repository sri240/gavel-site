// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Register = (props: PageProps) => (
  <Layout>
    <SEO title="Register" />
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCK1T7vNnN62HaRiHF_IeXsJqucONeR_JbGztJSenWY6cXSQ/viewform?embedded=true" frameBorder="0" width="100%" height="520" style={{marginTop:"160px"}}>Loading…</iframe>
    <p><br></br></p>
      <p style = {{
          color: "black",
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
        }}>
         created by anusri saraf {new Date().getFullYear()}
        </p>
  </Layout>
)

export default Register
