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
          <form action="mailto:setlur.tm@gmail.com" method="post" encType="text/plain" style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', float:"left", textAlign:"left"}}>
            Name:<br></br>
            <input type="text" name="name" size="30" style={{float:"left", margin:"5px", marginTop:"10px", marginBottom:"10px"}}></input><br></br><br></br><br></br>
            Email:<br></br>
            <input type="text" name="mail" size="30" style={{float:"left", margin:"5px", marginTop:"10px", marginBottom:"10px"}}></input><br></br><br></br><br></br>
            Message:<br></br>
            <textarea name="message" rows="6" cols="50" style={{float:"left", margin:"5px", marginTop:"10px", marginBottom:"10px"}}></textarea><br></br>
            <input type="submit" value="Send" style={{float:"left", margin:"5px"}}></input>
            <input type="reset" value="Clear" style={{float:"left", margin:"5px"}}></input>
          </form>
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