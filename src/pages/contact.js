import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Elsie&display=swap');
    </style>
    <div class="contact" style={{background:"#c46876", textAlign:"center",marginTop:"160px", padding:"15px", paddingBottom:"1px"}}>
          <p style={{fontWeight: 'bold', fontSize: '32px', color:"white", float:'left', marginRight: '7px'}}>CONTACT:</p>
          <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter'}}>setlur.tm@gmail.com</p>
          <img src="https://i.imgur.com/gyq51Gw.png" alt="Thank you."></img>
      </div>
      <p><br></br></p>
      <p style = {{
          color: "black",
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
        }}>
         created by anusri saraf {new Date().getFullYear()}
        </p>
  </Layout>
)

export default Contact