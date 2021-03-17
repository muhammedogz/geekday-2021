import React, { Component } from 'react';
import style from "./geek-main-logo.module.css"

const address = "https://geekday.btgtu.com/wp-content/uploads/2021/03/g867-1.png"

export default class Header extends Component {
  render() {
    return (
    <div className={style.container} >
        <img className={style.img} src={address}  />
    </div>
    );
  }
} 