import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
      border-radius: 6px;
      padding: 15px 20px;
      font-size: 18px;
      border: none;
      color: white;
      background-color: #663399;
      cursor: pointer;
      
      &:hover {
        transform: scale(1.01);
      }
      &:active {
        transform: scale(1);
        opacity: .90;
      }
`

export default function PurpleButton({ text }) {
    return (
        <ButtonStyles>{text}</ButtonStyles>
    )
}