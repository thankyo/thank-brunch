import React, { Component } from "react";
import Logo from './logo.svg';

export default class Brand extends Component {
  render() {
    return (
      <Logo width={100} height={32} alt="LoveIt logotype"/>
    )
  }
}