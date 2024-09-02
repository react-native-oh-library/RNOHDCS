import React, {Component} from 'react';
import {SvgXml} from 'react-native-svg';

export default class Issue241 extends Component {
  static title = 'Issues#241';
  svgXml = `
    <svg
    width="300"
    height="120"
    viewBox="0 0 300 120"
    xmlns="http://www.w3.org/2000/svg">
    <!-- Materialization of anchors -->
    <path
      d="M60,10 L60,110
                M30,10 L300,10
                M30,65 L300,65
                M30,110 L300,110
                "
      stroke="grey" />
  
    <!-- Anchors in action -->
    <text alignment-baseline="hanging" x="60" y="10">A hanging</text>
  
    <text alignment-baseline="middle" x="60" y="65">A middle</text>
  
    <text alignment-baseline="baseline" x="60" y="110">A baseline</text>
  
    <!-- Materialization of anchors -->
    <circle cx="60" cy="10" r="3" fill="red" />
    <circle cx="60" cy="65" r="3" fill="red" />
    <circle cx="60" cy="110" r="3" fill="red" />
  
    <style>
      <![CDATA[
        text{
          font: bold 36px Verdana, Helvetica, Arial, sans-serif;
        }
      ]]>
    </style>
  </svg>
  `;
  render() {
    return <SvgXml xml={this.svgXml} />;
  }
}
