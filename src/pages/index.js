import * as React from "react";
import 'normalize.css';
import Nav from "../components/Nav";
import styled from "styled-components";
import Hero from "../components/Hero";
import PurpleButton from "../components/PurpleButton";
import { StaticImage } from "gatsby-plugin-image"; 

const offerings = [
  {
    text: "Decoupling",
    description:
      "Calm your nervous system and reset the fight-or-flight response.",
  },
  {
    text: "Illumination",
    description:
      "Remove the imprints of past traumas and events, release the patterns that keep you locked in a cycle of disempowerment.",
  },
  {
    text: "Extraction",
    description:
      "Clear intrusive energies.",
  },
  {
    text: "Soul Retrieval",
    description:
      "Journey to recover the lost parts of your soul that fled in times of trauma and unsafety.",
  },
  {
    text: "Ancestral Constellation",
    description:
      "Work with your ancestors, on an energetic level, to find forgiveness and put them in right relation to yourself and each other.",
  },
]

const PageStyles = styled.html`
  margin: 0px;
  font-family: Skia, sans-serif, serif;
`

const Main = styled.main`
  margin: -60px 20px;
  padding-top: 60px;
  margin-bottom: 100px;

  a {
    color: #663399;
  }

  p, li {
    line-height: 1.5;
  }
  
  section:before {
    display: block;
    content: ' ';
    margin-top: -60px;
    height: 60px;
    visibility: hidden;
  }
`
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`
const ListSection = styled.section`
  text-align: left;
  ul {
    padding-left: 20px;
  }
  li {
    padding-top: 10px;
  }
`

const IndexPage = () => {
  return (
    <PageStyles>
      <Nav />
      <Main>
        <Hero />
        <Container>
          <section id="about">
            <h2>About Me</h2>
            <p>
              I am certified as a Master Practitioner of Energy Medicine by <a href="https://thefourwinds.com/">The Four Winds Society</a>, and I am honored to help others to find their 
              own path, to find healing, and to allow the boundless benevolence of Spirit to bring joy, peace, and fulfillment into their lives.
            </p>
            <FlexContainer>
              <StaticImage
                src="../images/headshot.png"
                alt="Kyle Whittemore"
                width={400}
              />
            </FlexContainer>
          </section>
          <section id="process">
            <h2>The Process</h2>
            <p>
              We begin with a free consultation where I offer a complementary decoupling, answer your questions, and allow you to determine if I am a good fit for you.
              If I am a good fit, we will ideally work together over multiple sessions to progressively clear your field, culminating in soul retrieval. I recommend about 
              four sessions before a soul retrieval, and thereafter on an on-going basis as desired.
            </p>
            <p>
              Each session entails a brief interview to identify the issue we will work with, the intervention(s), and a discussion to begin the process of integration. 
              Further integration happens after our session and I may suggest some 'homework' to facilitate the process.   
            </p>
            <p>
              Sessions should be scheduled one to two weeks apart allow each intervention to fully integrate. 
              I primarily offer my services via video conferencing, but in-person sessions are possible with additional 
              arrangements. 
            </p>
          </section>
          <section>
            <h2>Working Remotely</h2>
            <p>
            While your body might exist in the here and now, your luminous energy field is not bound by time or space. 
            Our fields are incredibly responsive to intent - both mine and yours - and intent is bound only by the imagination. 
            While we may meet via video conference, the work is done outside of time and space - where we are all one.
            If you live in southern New Hampshire or Maine, arrangements can be made for an in-person session at your home.
            </p>
          </section>
          <ListSection id="services">
            <h2>Core Services</h2>
            <ul>
              {offerings.map(offering => (
                <li key={offering.url}>
                  <b>{offering.text}</b><br/>{offering.description}
                </li>
              ))}
            </ul>
          </ListSection>
          <ListSection id="booking">
            <h2>Pricing and Scheduling</h2>
            <p>I offer my services on a <b>sliding scale</b>, if you are unable to pay the full amount please reach out to make other arrangements</p>
            <ul><b>
              <li>Initial consult with decoupling: free!</li>
              <li>Standalone Decoupling: <s>$50</s> $39 special!</li>
              <li>Standalone Illumination: <s>$100</s> $89 special!</li>
              <li>Standard Session (appx 1.5 hrs with integration): $125</li>
              <li>Soul Retrieval (appx 2.5 hours with integration): $200</li>
              </b></ul>
            <p>If you have questions, please email me at <a href="MAILTO: kyle@intrepidvibrations.com">kyle@intrepidvibrations.com</a></p>
            <a href="https://app.acuityscheduling.com/schedule.php?owner=31368049">
                <PurpleButton 
                  text={"Book Now"}
                />
            </a>
          </ListSection>
        </Container>
      </Main>
    </PageStyles>
  )
}

export default IndexPage

export const Head = () => <title>Intrepid Vibrations | Home</title>
