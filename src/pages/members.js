import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Members = () => (
  <Layout>
    <SEO title="Members" />
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap');
      @import
      url('https://fonts.googleapis.com/css2?family=Elsie&display=swap');
    </style>
    <div class="members">
      <div class="row">
        <div class="savitha">
          <img
            src="https://i.imgur.com/h8fXeyc.jpg?1"
            alt="Savitha"
            class="image"
          ></img>
          <div class="info">
            <p>Savitha Setlur</p>
            <p class="officer">Coordinator</p>
            <p>Adult Toastmaster</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "15px" }}>
        <p class="title2">OUR MEMBERS</p>
      </div>

      <div class="row">
        <div class="sadhana">
          <img
            src="https://i.imgur.com/v7Hq4qm.png?1"
            alt="Sadhana"
            class="image"
          ></img>
          <div class="info">
            <p>Sadhana Tadepalli</p>
            <p class="officer">President</p>
            <p>Freshman</p>
            <p class="awards">Competent Communicator</p>
          </div>
        </div>

        <div class="sachit">
          <div class="info">
            <p>Sachit Ganotra</p>
            <p class="officer2">Webmaster</p>
            <p>Freshman</p>
          </div>
          <img
            src="https://i.imgur.com/A6J2t5f.jpg?2"
            alt="Sachit"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="shrish">
          <img
            src="https://i.imgur.com/Dh1k4nU.jpg?1"
            alt="Shrish"
            class="image"
          ></img>
          <div class="info">
            <p>Shrish Subbian</p>
            <p class="officer2">Secretary</p>
            <p>Sophomore</p>
          </div>
        </div>

        <div class="surabhi">
          <div class="info">
            <p>Surabhi Bhaskar</p>
            <p class="officer2">Treasurer</p>
            <p>Sophomore</p>
          </div>
          <img
            src="https://i.imgur.com/FpOzLl2.jpg?1"
            alt="Surabhi"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="akhila">
          <img
            src="https://i.imgur.com/G9h9Zdz.png?1"
            alt="Akhila"
            class="image"
          ></img>
          <div class="info">
            <p>Akhila Maganti</p>
            <p class="officer2">Sergeant-At-Arms</p>
            <p>Freshman</p>
          </div>
        </div>

        <div class="tanusha">
          <div class="info">
            <p>Tanusha Kolli</p>
            <p>8th Grade</p>
          </div>
          <img
            src="https://i.imgur.com/zZ3oah9.png?1"
            alt="Tanusha"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row"></div>

      <div class="row">
        <div class="varsha" class="other">
          <p>Varsha Kuchibotla</p>
          <p class="officer">Vice President of Public Relations</p>
          <p>Sophomore</p>
        </div>

        <div class="Madhav" class="other">
          <p>Madhav Raghu</p>
          <p class="officer2">Vice President of Membership</p>
          <p>Sophomore</p>
        </div>

        <div class="Naomi" class="other">
          <p>Naomi Mandar</p>
          <p class="officer2">Vice President of Education</p>
          <p>Junior</p>
        </div>

        <div class="Anisha" class="other">
          <p>Anisha Rayapudi</p>
          <p>Sophomore</p>
        </div>

        <div class="Ruchita" class="other">
          <p>Ruchita Deshmukh</p>
          <p>7th Grade</p>
        </div>

        <div class="Hasita" class="other">
          <p>Hasita Manda</p>
          <p>Junior</p>
        </div>

        <div class="Tarun" class="other">
          <p>Tarun Krishnaraj</p>
          <p>Freshman</p>
        </div>

        <div class="Kavya" class="other">
          <p>Kavya Gadamsetti</p>
          <p>Freshman</p>
        </div>

        <div class="Tarun Y" class="other">
          <p>Tarun Yadgirkar</p>
          <p>7th Grade</p>
        </div>
      </div>
    </div>

    <p>
      <br></br>
    </p>
    <p
      style={{
        color: "black",
        fontFamily:
          "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
      }}
    >
      created by anusri saraf {new Date().getFullYear()}
    </p>
  </Layout>
)

export default Members

/*import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Members = () => (
  <Layout>
    <SEO title="Members" />
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap');
      @import
      url('https://fonts.googleapis.com/css2?family=Elsie&display=swap');
    </style>
    <div class="members">
      <div class="row">
        <div class="savitha">
          <img
            src="https://i.imgur.com/h8fXeyc.jpg?1"
            alt="Savitha"
            class="image"
          ></img>
          <div class="info">
            <p>Savitha Setlur</p>
            <p class="officer">Coordinator</p>
            <p>Adult Toastmaster</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "15px" }}>
        <p class="title2">OUR MEMBERS</p>
      </div>

      <div class="row">
        <div class="adithya">
          <img
            src="https://i.imgur.com/EJJvMw7m.jpg?1"
            alt="Adithya"
            class="image"
          ></img>
          <div class="info">
            <p>Adithya Krishnaraj</p>
            <p class="officer">President</p>
            <p>Senior</p>
            <p class="awards">
              Advanced Communicator Silver, Advanced Leader Bronze
            </p>
          </div>
        </div>

        <div class="sadhana">
          <div class="info">
            <p>Sadhana Tadepalli</p>
            <p class="officer">Vice President of Education</p>
            <p>Freshman</p>
            <p class="awards">Competent Communicator</p>
          </div>
          <img
            src="https://i.imgur.com/v7Hq4qm.png?1"
            alt="Sadhana"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="sohum">
          <img
            src="https://i.imgur.com/5nU1LJQ.jpg?1"
            alt="Sohum"
            class="image"
          ></img>
          <div class="info">
            <p>Sohum Tiwary</p>
            <p class="officer2">Vice President of Membership</p>
            <p>Senior</p>
          </div>
        </div>

        <div class="sri">
          <div class="info">
            <p>Anusri Saraf</p>
            <p class="officer2">Vice President of Public Relations</p>
            <p>Junior</p>
            <p class="awards">Advanced Communicator Bronze, Competent Leader</p>
          </div>
          <img
            src="https://i.imgur.com/CAGNphE.jpg?1"
            alt="Sri"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="akhila">
          <img
            src="https://i.imgur.com/G9h9Zdz.png?1"
            alt="Akhila"
            class="image"
          ></img>
          <div class="info">
            <p>Akhila Maganti</p>
            <p>Freshman</p>
          </div>
        </div>

        <div class="bharath">
          <div class="info">
            <p>Bharadwaj Sasikumar</p>
            <p>Senior</p>
            <p class="awards">Competent Leader</p>
          </div>
          <img
            src="https://i.imgur.com/aDB1meU.png?1"
            alt="Bharath"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="bhavesha">
          <img
            src="https://i.imgur.com/2B0Z37Z.jpg?1"
            alt="Bhavesha"
            class="image"
          ></img>
          <div class="info">
            <p>Bhavesha Sasikumar</p>
            <p>Senior</p>
            <p class="awards">Competent Leader</p>
          </div>
        </div>

        <div class="sachit">
          <div class="info">
            <p>Sachit Ganotra</p>
            <p>Freshman</p>
          </div>
          <img
            src="https://i.imgur.com/A6J2t5f.jpg?2"
            alt="Sachit"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="shrish">
          <img
            src="https://i.imgur.com/Dh1k4nU.jpg?1"
            alt="Shrish"
            class="image"
          ></img>
          <div class="info">
            <p>Shrish Subbian</p>
            <p>Sophomore</p>
          </div>
        </div>

        <div class="surabhi">
          <div class="info">
            <p>Surabhi Bhaskar</p>
            <p>Sophomore</p>
          </div>
          <img
            src="https://i.imgur.com/FpOzLl2.jpg?1"
            alt="Surabhi"
            class="image"
          ></img>
        </div>
      </div>

      <div class="row">
        <div class="tanusha">
          <img
            src="https://i.imgur.com/zZ3oah9.png?1"
            alt="Tanusha"
            class="image"
          ></img>
          <div class="info">
            <p>Tanusha Kolli</p>
            <p>8th Grade</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="varsha" class="other">
          <p>Varsha Kuchibotla</p>
          <p class="officer">Secretary</p>
          <p>Sophomore</p>
        </div>

        <div class="Anisha" class="other">
          <p>Anisha Rayapudi</p>
          <p>Sophomore</p>
        </div>

        <div class="Hasita" class="other">
          <p>Hasita Manda</p>
          <p>Junior</p>
        </div>

        <div class="Madhav" class="other">
          <p>Madhav Raghu</p>
          <p>Sophomore</p>
        </div>

        <div class="Tanusha" class="other">
          <p>Tarun Krishnaraj</p>
          <p>Freshman</p>
        </div>

        <div class="Yash" class="other">
          <p>Yash Tomar</p>
          <p>Sophomore</p>
        </div>
      </div>
    </div>

    <p>
      <br></br>
    </p>
    <p
      style={{
        color: "black",
        fontFamily:
          "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
      }}
    >
      created by anusri saraf {new Date().getFullYear()}
    </p>
  </Layout>
)

export default Members
*/
