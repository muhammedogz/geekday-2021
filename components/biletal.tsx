import React, { useState } from "react";
import styled from "styled-components";
import style from "./biletal.module.css"


// Watch the Button tutorial
// http://react.school/ui/button

// Free React training
// http://react.school/join

// Free Material-UI template
// http://react.school/material-ui/templates



const Button = styled.button`
  background-color: #3f51b5;
  color: #ffe0b2;
  padding: 20px 30px;
  border-radius: 9px;
  outline: 0;
  transition: ease background-color 25;
  box-shadow: 2px 2px 2px #ff8a65;
  cursor: pointer;
  &:hover {
      background-color: #1a237e
  };

`;




export default function App() {
  return (
    <div className={style.div}>
        <div className={style.Center}>
        <a href="https://www.eventbrite.com/e/geekday-2021-tickets-143585657567" target="_blank">
            <button className={style.bilet} >{<>Bilet Al</>}</button>
        </a>
        </div>
    </div>
  );
}