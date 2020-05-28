import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap');
    </style>

    <p><br></br><br></br><br></br><br></br></p>
    <div class='zoom'>
    <p style = {{
      borderLeft: '5px solid orange',
      padding: '10px',
      marginRight: '40px',
      fontStyle: 'italic',
      marginTop: '-5px'
    }}>Agreeing to give a speech is pretty easy. You get up onto that stage, and that's when it becomes difficult. Palms sweating, 
      arms trembling, all the key points of your speech going on vacation. We have all been there. Like they say, practice makes 
      perfect. We may not reach perfection any time soon, but it's never too early to start. Public speaking is not just a skill, 
      but it is a journey. We all start somewhere. No one starts speaking like a professional on Day 1. It is expected that you 
      will mess up, you will make mistakes, but also that you will learn from those mistakes.</p></div>

    <div class='zoom'>
    <p style = {{fontSize: '25px', 
      lineHeight: '32px', 
      textAlign:'right',
      borderRight: '5px solid #f75445', 
      padding: '10px'}}>
      A Gavel Club is a youth run club affiliated with Toastmasters International. In this club, we work towards becoming better 
      speakers and leaders while helping each other.</p></div>

      <div class='zoom' style = {{marginBottom:"20px"}}>
      <div class = "toast" style = {{float:"left",width: "300px",marginRight:'30px'}}>
      <Image></Image></div>
      <div style={{height:'300px'}}>
        <p style = {{textAlign:'center', fontSize: '25px', marginBottom: '13px'}}>
          TOASTMASTERS INTERNATIONAL MISSION </p>
          <p style={{fontStyle:'italic', fontSize: '50px', textAlign:'center', lineHeight: '44px', color:'rgb(23,23,70)'}}>
          "We empower individuals to become more effective communicators and leaders."
        </p>
        </div>
      </div>

      <div class='zoomie' style={{background:'#761b28'}}>
        <div style={{padding: '15px'}}>
          <p style={{fontWeight: 'bold', fontSize: '32px', color:"white", float:'left', marginRight: '7px', marginTop:'12px'}}>WHEN:</p>
          <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', clear:'all', marginTop:'12px'}}>Sunday, 9:00 AM - 11:30 AM</p>
          <p style={{fontWeight: 'bold', fontSize: '32px', color:"white", float:'left', marginRight: '7px'}}>WHERE:</p>
          <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter'}}>1232 Arrowhead Avenue, Livermore, CA</p>
          <p style={{fontWeight: 'bold', fontSize: '32px', color:"white", float:'left', marginRight: '7px', marginTop:'3px'}}>PREREQUISITES:</p>
          <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>Open to 6-12th graders, must have completed Toastmasters 
          Youth Leadership Program</p>
          <p style={{fontWeight: 'bold', fontSize: '32px', color:"white", float:'left', marginRight: '7px'}}>CONTACT:</p>
          <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter'}}>setlur.tm@gmail.com</p>
        </div>
      </div>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScCK1T7vNnN62HaRiHF_IeXsJqucONeR_JbGztJSenWY6cXSQ/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer">
      <div class="zoomie" style={{background:'#feeb83', marginTop:'0px'}}>
        <p style={{fontSize: '35px', color:'#761b28', fontWeight:'bold', clear:'all', textAlign:'center',marginBottom:'0px',padding:'17px',textDecorationColor:'#761b28'}}>REGISTER NOW</p>
      </div>
      </a>
      <div class='info' style={{background:'#a13545'}}>
      <div style={{padding: '15px'}}>
        <p style = {{fontWeight: 'bold', 
        fontSize: '35px', 
        color:"white"}}> See the <a href="https://docs.google.com/document/d/1s7CA1VP9IbH5eJ04d2lRe06iUi06YTjNGQjvgutPOFg/edit?usp=sharing" target='_blank' rel="noopener noreferrer" style={{fontWeight: 'bold', 
        fontSize: '35px', 
        color:"white"}}>Sample Agenda</a>
           </p>
           <p style={{fontWeight: 'bold', fontSize: '32px', color:"white"}}>HOW IT WORKS</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>Upon joining the club, each member is given a manual that contains 
        projects that will enhance their speaking and leadership abilities. Officers approve their progress in the manuals, and they receive awards upon completion, 
        and proceed to more advanced manuals and projects.</p>
        <p style={{fontWeight: 'bold', fontSize: '32px', color:"white"}}>ROLES</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>TOASTMASTER: each meeting has a toastmaster to conduct the meeting, 
        calling up speakers and such</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>GRAMMARIAN: chooses word of the day, keeps track of 
        good and bad uses of grammar throughout the meeting as well as uses of the word of the day</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>AH-COUNTER: keeps track of the filler words and 
        frequency at which they are used for each speaking member</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>TIMER: ensures meeting is proceeding in accordance 
        with the agenda; notifies speakers when they are within the acceptable time limits while they are onstage</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>SPEAKER: presents a speech in accordance with the project 
        in their manual on an appropriate topic</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>EVALUATOR: evaluates the speaker according to the standards in their 
        manual; fills out the evaluation report and presents a report at the end of the meeting</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>TABLE TOPICS MASTER: prepares questions to ask members and calls them 
        up for 1-2 minute impromptu speeches on the topic</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>GENERAL EVALUATOR: evaluates the 
        entire meeting and calls for evaluators and functionary reports</p>
        <p style={{fontWeight: 'bold', fontSize: '32px', color:"white"}}>OFFICERS</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>Every six months, our club holds an election to determine our officers.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>PRESIDENT: The president is the leader of the club, and picks up any of the 
        jobs that other officers aren't doing. They are responsible for the club running smoothly.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>VP OF EDUCATION: This officer keeps track of everyone's progress in their 
        manuals, and and helps anyone who needs assistance progressing.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>VP OF MEMBERSHIP: The VP of Membership is responsible for ensuring members 
        are keeping up with attendance and commitment, as well as determining whether members should be added or removed.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>VP OF PUBLIC RELATIONS: This officer manages all of the PR of the club, 
        including YLP outreaches and online presence.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>SECRETARY: The secretary is responsible for taking and sending out detailed 
        meeting notes at every meeting.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>SERGEANT AT ARMS: This role involves preparing the meeting room beforehand, 
        including making reservations and setting up tables and chairs.</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>WEBMASTER: The webmaster maintains the website and any other technological 
        necessities.</p>
        <p style={{fontWeight: 'bold', fontSize: '32px', color:"white"}}>WHAT ELSE?</p>
        <p style={{fontSize: '32px', color:'#feeb83', fontWeight:'lighter', lineHeight:'34px'}}>As an active Gavel Club in the Bay Area, we participate in
        inter-gavel club competitions for prizes. We get the opportunity to interact with adult Toastmasters as well. Our meetings are the primary focus of the club, 
        but the club also encourages responsibility, commitment, and the initiative to give back to those who help you along the way.</p>
      </div>
      </div>
      {/*<div class='info' style={{background:'#d15c6d'}}>
        <div style={{padding: '15px'}}>
          <p style={{fontWeight: 'bold', fontSize: '32px', color:"white", marginRight: '7px', marginTop:'12px', textAlign:'center'}}>OUR MEMBERS</p>
        </div>
  </div>*/}
      <p><br></br></p>
      <p style = {{
          color: "black",
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
        }}>
         created by anusri saraf {new Date().getFullYear()}
        </p>
  </Layout>
)

export default IndexPage