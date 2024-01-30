import * as React from "react";
import 'normalize.css';
import Nav from "../components/Nav";
import styled from "styled-components";
import Button from "../components/Button";

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
  max-width: 800px;
  margin: -60px 20px;
  padding-top: 60px;

  section:before {
    display: block;
    content: ' ';
    margin-top: -60px;
    height: 60px;
    visibility: hidden;
  }
`

const Hero = styled.header`
  background-color: #663399;
  margin: 0px -20px 20px -20px;
  height: calc(100vh - 57px);
  min-height: 190px;
  position: relative;
`
const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-35%, -50%);
  text-align: left;
  color: white;
  h1 {
    margin-top: 0px;
  }
  p {
    margin-bottom: 30px;
  }
`
const ListSection = styled.section`
  ul {
    padding-left: 20px;
  }
`

const IndexPage = () => {
  return (
    <PageStyles>
      <Nav />
      <Main>
        <Hero>
          <HeroText>
            <h1>
              Kyle Whittemore
              <br />
              <span>Shamanic Healing</span>
            </h1>
            <p>
              Clear your luminous energy field to release unhealthy patterns, heal past traumas, and learn to co-create with spirit to unlock your potential.
            </p>
            <Button text={"Book a free consultation"} />
          </HeroText>
        </Hero>
        <ListSection id="services">
          <h2>Core Services</h2>
          <ul>
            {offerings.map(offering => (
              <li key={offering.url}>
                <span>
                  <p>{offering.text}</p>
                  <p>{offering.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </ListSection>
        <section id="process">
          <h2>The Process</h2>
          <p>
            We begin with a free consultation where I offer a complementary decoupling, answer your questions, and allow you to determine if I am a good fit for you.
            If I am a good fit, we will ideally work together over multiple sessions to progressively clear your field with decoupling, illuminations, extractions, 
            and acestral work, culminating in soul retrieval. I recommend about four sessions before a soul retrieval, and thereafter on an on-going basis as desired.
            Each session entails a brief interview to identify the issue we will work with, the intervention(s), and a discussion to begin the process of integration. 
            Further integration happens after our session and I may offer some 'homework' to facilitate the process. Sessions should be scheduled one to two weeks apart 
            allow each intervention to fully integrate. I primarily offer offer my services via video conferencing, but in-person sessions are possible with additional 
            arrangements. 
          </p>
        </section>
        <section>
          <h2>Working Remotely</h2>
          <p>
            While your body might exist in the here and now, your luminous energy field is not bound by time or space. 
            Our fields are incredibly responsive to intent - both mine and yours - and intent is bound only by the imagination. 
            While we may meet via video conference, the work is done in a place of timelessness - where we are all one.
            If you live in southern New Hampshire or Maine, arrangements can be made for an in-person session at your home.
          </p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>
            As a young man I was beset with dis-ease - I was uncomfortable in my own skin and the world in general. I had read alot, and was exposed to spiritual disciplines 
            that convinced me that there was a way to create serenity in myself and peace with the world around me. With all the exuberance and naievete of youth, I committed 
            myself to a jouney of healing and spiritual discovery for the benefit of all beings.
          </p>
          <p>
            My road took me to many amazing places to the soaring heights of wild and rugged mountains, to the depths of despair and addiction. Eventually I found out that wherever 
            I went, and whatever I did, there I was. I could try this or that, change jobs, locations, lovers, live like a vagabond, live like a king. I could wear a suit of altruism, 
            or one of nihilism. I could settle down or uproot and wander. I could find enlightenment on the magic bus, or on a cushion, or on a new adventure. Nothing ever changed
            because I didn't change.
          </p>
          <p>
            It wasn't until life brought me fully to my knees, until I was hopeless and at the end of the road, that I realized that the only way to find what I was looking for was to look within, 
            and to trust that if I showed up, with that same earnestness that I had when I had begun my journey so many years ago, Spirit would do for me what I could never have done for myself.
          </p>
          <p>
            I am honored to help others find their own path, to find healing, and to allow the boundless benevolence of Spirit to bring joy, peace, and fulfillment into their lives.
          </p>
        </section>
        <ListSection id="pricing">
          <h2>Pricing and Scheduling</h2>
          <p>I offer my services on a sliding scale, if you are unable to pay the full amount please reach out to make other arrangements</p>
          <ul>
            <li>Initial consult with decoupling: free!</li>
            <li>Standalone Decoupling: <s>$50</s> $39 special!</li>
            <li>Standalone Illumination: <s>$125</s> $89 special!</li>
            <li>Standard Session (appx 1.5 hrs with integration): $150</li>
            <li>Soul Retrieval (appx 2.5 hours with integration): $250</li>
          </ul>
          <p>If you have questions, or would like to schedule an appointment, please email me at <a href="MAILTO: kyle@intrepidvibrations.com">kyle@intrepidvibrations.com</a></p>
        </ListSection>
      </Main>
    </PageStyles>
  )
}

export default IndexPage

export const Head = () => <title>Intrepid Vibrations | Home</title>
