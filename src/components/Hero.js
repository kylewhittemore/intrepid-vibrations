import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const HeroStyles = styled.header`
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
    margin-top: -60px;
  }
  p {
    margin-bottom: 30px;
  }
`
export default function Hero() {
    return (
        <HeroStyles>
          <HeroText>
            <h1>
              Intrepid Vibrations
              <br />
              <span>Shamanic Healing</span>
            </h1>
            <p>
              Clear your luminous energy field to release unhealthy patterns, heal past traumas, and learn to co-create with spirit to unlock your potential.
            </p>
            <a href="https://app.acuityscheduling.com/schedule.php?owner=31368049&appointmentType=58509330">
                <Button text={"Book a free consultation"} />
            </a>
          </HeroText>
        </HeroStyles>
    )
}