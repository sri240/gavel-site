// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Register = () => (
  <Layout>
    <SEO title="Register" />
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap');
    </style>

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCK1T7vNnN62HaRiHF_IeXsJqucONeR_JbGztJSenWY6cXSQ/viewform?embedded=true" frameBorder="0" width="100%" height="520" style={{marginTop:"160px"}}>Loading…</iframe>
    <div class="reginfo" style={{background:'#a13545', padding:"15px"}}><p class="title">INDUCTION PROCESS</p>
        <p class="filler" style={{lineHeight:"40px"}}>STEP 1: Fill out the form. <br></br>
        STEP 2: Once we let you know that you have been accepted, contact Savitha Setlur to obtain your manuals.<br></br>
        STEP 3: Contact the Vice President of Membership (Sohum Tiwary) to get added to the Google Group and WhatsApp group chat for communication.<br></br>
        STEP 4: Once you are added to the google group, please send an email listing your goals for the Gavel Club to the google group. Under the recipients section, type “Gavel Club” and press enter. <br></br>
        ON OUR END: You will be added to the Google Group and WhatsApp chat for club communications and access to the Roles Sign Up Sheet. You will have received your manuals and will be added to the active members list so that you may receive points.</p></div>
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
