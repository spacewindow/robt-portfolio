import { css } from "@emotion/react";

const allStyles = css`
  @font-face {
    font-family: "Interstate";
    src: url("../fonts/interstateplus_regular-webfont.eot");
    src: url("../fonts/interstateplus_regular-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/interstateplus_regular-webfont.ttf") format("truetype"),
      url("../fonts/interstateplus_regular-webfont.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Interstate";
    src: url("../fonts/interstateplus_bold-webfont.eot");
    src: url("../fonts/interstateplus_bold-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("../fonts/interstateplus_bold-webfont.ttf") format("truetype"),
      url("../fonts/interstateplus_bold-webfont.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Merriweather";
    src: url("../fonts/merriweather-bold-webfont.woff2") format("woff2"),
      url("../fonts/merriweather-bold-webfont.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Merriweather";
    src: url("../fonts/merriweather-bolditalic-webfont.woff2") format("woff2"),
      url("../fonts/merriweather-bolditalic-webfont.woff") format("woff");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Merriweather";
    src: url("../fonts/merriweather-italic-webfont.woff2") format("woff2"),
      url("../fonts/merriweather-italic-webfont.woff") format("woff");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Merriweather";
    src: url("../fonts/merriweather-regular-webfont.woff2") format("woff2"),
      url("../fonts/merriweather-regular-webfont.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  /* Base for label styling */
  /* checkbox aspect */
  /* checked mark aspect */
  /* checked mark aspect changes */
  /* disabled checkbox */
  /* accessibility */
  /* hover style just for information */
  /* .edm-grid {
  background-image: url(../images/email/email-litmus-grid.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
} */
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    font-size: 20px;
    overflow-x: hidden;
    input[type="button"] {
      -webkit-appearance: button;
      cursor: pointer;
    }
    input[disabled] {
      cursor: default;
    }
  }
  body {
    margin: 0;
    padding-top: 0.1px;
    color: #222222;
    position: relative;
    font-family: "Interstate", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  article {
    display: block;
  }
  aside {
    display: block;
  }
  details {
    display: block;
  }
  figcaption {
    display: block;
  }
  figure {
    display: block;
    margin: 1em 40px;
  }
  footer {
    display: block;
    justify-content: center;
    height: 15rem;
    background-image: url(../images/me.png),
      linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)),
      url(../images/white-brick.jpg);
    background-repeat: no-repeat, no-repeat, repeat;
    background-position: left bottom, 0 0, 0 0;
    background-size: contain, auto, auto 12rem;
    > .grid-cell {
      justify-content: center;
      align-items: center;
    }
    h2 {
      text-align: center;
      font-size: 1.4216rem;
      line-height: 2rem;
      max-width: 25rem;
      margin: 0 auto;
    }
    p {
      text-align: center;
      font-size: 1.0664rem;
      line-height: 2rem;
    }
  }
  header {
    display: block;
  }
  hgroup {
    display: block;
  }
  main {
    display: block;
  }
  menu {
    display: block;
  }
  nav {
    display: block;
  }
  section {
    display: block;
    flex-shrink: 0;
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  summary {
    display: block;
  }
  audio {
    display: inline-block;
    vertical-align: baseline;
    &:not([controls]) {
      display: none;
      height: 0;
    }
  }
  canvas {
    display: inline-block;
    vertical-align: baseline;
  }
  progress {
    display: inline-block;
    vertical-align: baseline;
  }
  video {
    display: inline-block;
    vertical-align: baseline;
    width: 100%;
  }
  [hidden] {
    display: none;
  }
  template {
    display: none;
  }
  a {
    background-color: transparent;
    &:active {
      outline: 0;
    }
    &:hover {
      outline: 0;
    }
    &:link {
      color: #222222;
    }
    &:visited {
      color: #222222;
    }
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
    font-size: 2.5256rem;
    line-height: 4rem;
    position: relative;
    font-family: "Merriweather", Helvetica, Arial, sans-serif;
    letter-spacing: 0.03em;
    font-weight: 900;
    text-align: left;
    margin: 1rem 0;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    bottom: -0.25em;
  }
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -0.5em;
  }
  img {
    border: 0;
    position: relative;
    width: 100%;
  }
  svg {
    &:not(:root) {
      overflow: hidden;
    }
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  pre {
    overflow: auto;
    font-family: monospace, monospace;
    font-size: 1em;
  }
  code {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  kbd {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  button {
    color: inherit;
    font: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
    border: 0;
    border-radius: 5em;
    height: 2em;
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 1em;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }
  input {
    color: inherit;
    font: inherit;
    margin: 0;
    line-height: normal;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
  optgroup {
    color: inherit;
    font: inherit;
    margin: 0;
    font-weight: bold;
  }
  select {
    color: inherit;
    font: inherit;
    margin: 0;
    text-transform: none;
  }
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
    overflow: auto;
  }
  input[type="reset"] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  button[disabled] {
    cursor: default;
  }
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type="number"] {
    &::-webkit-inner-spin-button {
      height: auto;
    }
    &::-webkit-outer-spin-button {
      height: auto;
    }
  }
  input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    border: 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td {
    padding: 0;
  }
  th {
    padding: 0;
  }
  * {
    box-sizing: border-box;
    &:before {
      box-sizing: border-box;
    }
    &:after {
      box-sizing: border-box;
    }
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pseudofill {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  #root {
    overflow: auto;
  }
  body.showgrid {
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 95%,
        #cdcdcd 95%,
        #cdcdcd 100%
      );
      background-size: 1rem 1rem;
      background-repeat: repeat;
      background-position: left top;
      z-index: 10;
      pointer-events: none;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      background-image: repeating-linear-gradient(
        to right,
        #bada55 0px,
        #bada55 calc(100% / 12 - 1rem),
        transparent calc(100% / 12 - 1rem),
        transparent calc(100% / 12)
      );
      opacity: 0.4;
      background-position: left 0.5rem top;
      z-index: 20;
      pointer-events: none;
    }
  }
  .grid {
    width: 100%;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .grid-cell {
    position: relative;
    width: auto;
    min-height: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    display: flex;
    flex: 1;
  }
  .grid-cell.sub-grid {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .grid1 {
    width: calc((100% * 0.08333333) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid1.no-gutter {
    width: calc(100% * 0.08333333);
    margin: 0;
  }
  .grid2 {
    width: calc((100% * 0.16666667) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid2.no-gutter {
    width: calc(100% * 0.16666667);
    margin: 0;
  }
  .grid3 {
    width: calc((100% * 0.25) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid3.no-gutter {
    width: calc(100% * 0.25);
    margin: 0;
  }
  .grid4 {
    width: calc((100% * 0.33333333) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid4.no-gutter {
    width: calc(100% * 0.33333333);
    margin: 0;
  }
  .grid5 {
    width: calc((100% * 0.41666667) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid5.no-gutter {
    width: calc(100% * 0.41666667);
    margin: 0;
  }
  .grid6 {
    width: calc((100% * 0.5) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid6.no-gutter {
    width: calc(100% * 0.5);
    margin: 0;
  }
  .grid7 {
    width: calc((100% * 0.58333333) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid7.no-gutter {
    width: calc(100% * 0.58333333);
    margin: 0;
  }
  .grid8 {
    width: calc((100% * 0.66666667) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid8.no-gutter {
    width: calc(100% * 0.66666667);
    margin: 0;
  }
  .grid9 {
    width: calc((100% * 0.75) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid9.no-gutter {
    width: calc(100% * 0.75);
    margin: 0;
  }
  .grid10 {
    width: calc((100% * 0.83333333) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid10.no-gutter {
    width: calc(100% * 0.83333333);
    margin: 0;
  }
  .grid11 {
    width: calc((100% * 0.91666667) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid11.no-gutter {
    width: calc(100% * 0.91666667);
    margin: 0;
  }
  .grid12 {
    width: calc((100% * 1) - 2rem);
    flex: none;
    margin: 0 1rem;
  }
  .grid12.no-gutter {
    width: calc(100% * 1);
    margin: 0;
  }
  .offset1 {
    margin-left: calc((100% * 0.08333333) + 0.5rem);
  }
  .offset1.no-gutter {
    margin-left: calc(100% * 0.08333333);
  }
  .offset2 {
    margin-left: calc((100% * 0.16666667) + 0.5rem);
  }
  .offset2.no-gutter {
    margin-left: calc(100% * 0.16666667);
  }
  .offset3 {
    margin-left: calc((100% * 0.25) + 0.5rem);
  }
  .offset3.no-gutter {
    margin-left: calc(100% * 0.25);
  }
  .offset4 {
    margin-left: calc((100% * 0.33333333) + 0.5rem);
  }
  .offset4.no-gutter {
    margin-left: calc(100% * 0.33333333);
  }
  .offset5 {
    margin-left: calc((100% * 0.41666667) + 0.5rem);
  }
  .offset5.no-gutter {
    margin-left: calc(100% * 0.41666667);
  }
  .offset6 {
    margin-left: calc((100% * 0.5) + 0.5rem);
  }
  .offset6.no-gutter {
    margin-left: calc(100% * 0.5);
  }
  .offset7 {
    margin-left: calc((100% * 0.58333333) + 0.5rem);
  }
  .offset7.no-gutter {
    margin-left: calc(100% * 0.58333333);
  }
  .offset8 {
    margin-left: calc((100% * 0.66666667) + 0.5rem);
  }
  .offset8.no-gutter {
    margin-left: calc(100% * 0.66666667);
  }
  .offset9 {
    margin-left: calc((100% * 0.75) + 0.5rem);
  }
  .offset9.no-gutter {
    margin-left: calc(100% * 0.75);
  }
  .offset10 {
    margin-left: calc((100% * 0.83333333) + 0.5rem);
  }
  .offset10.no-gutter {
    margin-left: calc(100% * 0.83333333);
  }
  .offset11 {
    margin-left: calc((100% * 0.91666667) + 0.5rem);
  }
  .offset11.no-gutter {
    margin-left: calc(100% * 0.91666667);
  }
  section.block {
    height: 80vh;
  }
  section.tall {
    height: 100vh;
  }
  h2 {
    font-size: 1.8952rem;
    line-height: 3rem;
    font-family: "Merriweather", Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
  h3 {
    font-size: 1.0664rem;
    line-height: 2rem;
    font-family: "Interstate", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  h4 {
    font-size: 1.0664rem;
    line-height: 2rem;
    font-family: "Interstate", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  .size-1 {
    font-size: 1.0664rem;
    line-height: 2rem;
    font-family: "Interstate", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    margin: 0.25rem 0 0.5rem;
    font-size: 0.8rem;
    line-height: 1rem;
    line-height: 1.5rem;
  }
  li {
    font-size: 0.8rem;
    line-height: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.2rem;
  }
  p.p__intro {
    font-size: 1.0664rem;
    line-height: 2rem;
  }
  p.small {
    font-size: 0.6rem;
    line-height: 1rem;
  }
  p.xsmall {
    font-size: 0.4504rem;
    line-height: 1rem;
  }
  .index-title {
    p {
      a {
        &:link {
          display: inline-block;
          position: relative;
          width: auto;
          text-decoration: none;
          color: #6f6f6f;
          &:after {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            bottom: -0.25rem;
            border-bottom: 2px dotted #aaaaaa;
          }
        }
        &:hover {
          display: inline-block;
          position: relative;
          width: auto;
          text-decoration: none;
          color: #6f6f6f;
          &:after {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            bottom: -0.25rem;
            border-bottom: 2px dotted #aaaaaa;
          }
        }
        &:visited {
          display: inline-block;
          position: relative;
          width: auto;
          text-decoration: none;
          color: #6f6f6f;
          &:after {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            bottom: -0.25rem;
            border-bottom: 2px dotted #aaaaaa;
          }
        }
      }
    }
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  .labelled-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    [type="text"] {
      width: 70%;
      height: 2rem;
    }
    [type="email"] {
      width: 70%;
      height: 2rem;
    }
    [type="password"] {
      width: 70%;
      height: 2rem;
    }
  }
  [type="checkbox"] {
    &:not(:checked) {
      position: absolute;
      left: -9999px;
      + {
        label {
          display: block;
          position: relative;
          padding-left: 1.95em;
          height: 1.5rem;
          line-height: 1.5rem;
          cursor: pointer;
          margin-bottom: 0.5rem;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 1.25em;
            height: 1.25em;
            border: 2px solid #ccc;
            background: #fff;
            border-radius: 4px;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          &:after {
            content: "✔";
            position: absolute;
            top: 0.1em;
            left: 0.3em;
            font-size: 1.3em;
            line-height: 0.8;
            color: #333333;
            transition: all 0.2s;
            opacity: 0;
            transform: scale(0);
          }
        }
      }
      &:focus {
        + {
          label {
            &:before {
              border: 2px dotted blue;
            }
          }
        }
      }
    }
    &:checked {
      position: absolute;
      left: -9999px;
      + {
        label {
          display: block;
          position: relative;
          padding-left: 1.95em;
          height: 1.5rem;
          line-height: 1.5rem;
          cursor: pointer;
          margin-bottom: 0.5rem;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 1.25em;
            height: 1.25em;
            border: 2px solid #ccc;
            background: #fff;
            border-radius: 4px;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          &:after {
            content: "✔";
            position: absolute;
            top: 0.1em;
            left: 0.3em;
            font-size: 1.3em;
            line-height: 0.8;
            color: #333333;
            transition: all 0.2s;
            opacity: 1;
            transform: scale(1);
          }
        }
      }
      &:focus {
        + {
          label {
            &:before {
              border: 2px dotted blue;
            }
          }
        }
      }
    }
    &:disabled {
      &:not(:checked) {
        + {
          label {
            &:before {
              box-shadow: none;
              border-color: #bbb;
              background-color: #ddd;
            }
          }
        }
      }
      &:checked {
        + {
          label {
            &:before {
              box-shadow: none;
              border-color: #bbb;
              background-color: #ddd;
            }
            &:after {
              color: #999;
            }
          }
        }
      }
      + {
        label {
          color: #aaa;
        }
      }
    }
  }
  label {
    &:hover {
      &:before {
        border: 2px solid #4778d9 !important;
      }
    }
  }
  [type="radio"] {
    &:checked {
      position: absolute;
      left: -9999px;
      + {
        label {
          position: relative;
          padding-left: 2rem;
          cursor: pointer;
          line-height: 2rem;
          color: #333333;
          font-weight: 400;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.2em;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid #ddd;
            border-radius: 100%;
            background: #fff;
          }
          &:after {
            content: "";
            width: 1rem;
            height: 1rem;
            position: absolute;
            top: 0.45em;
            left: 0.25rem;
            border-radius: 100%;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
      }
    }
    &:not(:checked) {
      position: absolute;
      left: -9999px;
      + {
        label {
          position: relative;
          padding-left: 2rem;
          cursor: pointer;
          line-height: 2rem;
          color: #333333;
          font-weight: 400;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.2em;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid #ddd;
            border-radius: 100%;
            background: #fff;
          }
          &:after {
            content: "";
            width: 1rem;
            height: 1rem;
            position: absolute;
            top: 0.45em;
            left: 0.25rem;
            border-radius: 100%;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
          }
        }
      }
    }
  }
  button.icon-only {
    background: transparent;
    span {
      display: none;
    }
    svg {
      width: 2rem;
      height: 2rem;
      fill: white;
    }
  }
  .section--steps {
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 3rem;
    .grid {
      .grid-cell {
        p {
          padding-left: 2.5em;
        }
        h4 {
          display: flex;
          margin: 0.2rem 0;
          &:before {
            font-size: 0.6em;
            font-weight: 700;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-top: 0.6em;
            margin-right: 1em;
            width: 2em;
            height: 2em;
            color: #ffffff;
            background: #f8b547;
            border-radius: 50%;
            padding: 0.3em;
          }
        }
        &:nth-of-type(1) {
          h4 {
            &:before {
              content: "1";
            }
          }
        }
        &:nth-of-type(2) {
          h4 {
            &:before {
              content: "2";
            }
          }
        }
        &:nth-of-type(3) {
          h4 {
            &:before {
              content: "3";
            }
          }
        }
      }
    }
  }
  #__bs_notify__ {
    top: 95% !important;
    right: 10px !important;
    border-radius: 15px !important;
    height: 60px !important;
    display: none !important;
  }
  .index__title {
    padding-top: 3rem;
    h1 {
      margin-bottom: 0.25rem;
    }
  }
  .index__subtitle {
    padding-bottom: 0.5rem;
    margin-right: 10rem;
    overflow: visible;
    &:after {
      content: "";
      width: calc((100% * 0.25) - 2rem);
      flex: none;
      margin: 0 1rem;
      position: absolute;
      bottom: 0rem;
      left: 0;
      margin: 0;
      width: 20vw;
      border-bottom: 2px solid #aaaaaa;
    }
    &:after.no-gutter {
      width: calc(100% * 0.25);
      margin: 0;
    }
  }
  .index__welcome {
    margin-top: 1rem;
  }
  .app__svg-icons {
    display: none;
  }
  .app__body {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
    transition: transform 0.5s 0.1s cubic-bezier(0.02, 0.8, 0.24, 0.99);
    background: white;
    z-index: 1;
  }
  .app__body.menu {
    transition: transform 0.5s cubic-bezier(0.8, 0.12, 0.9, 0.37);
  }
  .app__menu__button {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0;
    right: 1rem;
    z-index: 20;
    background: white;
    border-radius: 100%;
  }
  .app__menu__close-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    z-index: 2;
    fill: white;
  }
  .app__menu {
    padding: 3rem 1rem 1rem 1rem;
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 102vh;
    background: #333333;
    overflow: hidden;
    transition: width 0s linear 0.5s;
    z-index: 0;
    h3 {
      color: #ff9900;
      text-align: left !important;
    }
    a {
      font-size: 0.8rem;
      line-height: 1rem;
      color: white;
      display: block;
      margin-bottom: 0.5em;
    }
  }
  .app__logo {
    width: 3.6rem;
    height: 3.6rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    z-index: 20;
    border-radius: 100%;
    transition: all 0.3s ease-out;
    transform: translateY(-35%);
    transform-origin: 50% 50%;
    use {
      transition: all 0.3s ease-out;
    }
    #logo-circle {
      fill: #ffffff;
      opacity: 0;
    }
    #logo {
      fill: #222222;
      opacity: 1;
    }
  }
  .index {
    .app__logo {
      #logo-circle {
        fill: #222222;
      }
    }
    .app__menu__links {
      a {
        color: #222222 !important;
      }
    }
    .footer-links {
      display: none;
    }
    p {
      line-height: 1.3rem !important;
    }
  }
  .app__menu__links {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    line-height: 1rem;
    text-transform: uppercase;
    margin-right: 1rem;
    transition: all 0.3s ease-out;
    a {
      color: #222222;
      margin: 0.5rem;
      text-decoration: none;
    }
  }
  .app__header {
    position: fixed;
    height: 1.8rem;
    width: 100%;
    z-index: 100;
    transition: transform 0.5s 0.1s cubic-bezier(0.02, 0.8, 0.24, 0.99);
    overflow: visible;
    &:before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 300%;
      pointer-events: none;
      opacity: 0;
    }
    .grid-cell {
      overflow: visible;
    }
    &:after {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-out;
      background: #ffffff;
    }
  }
  .init {
    .app__header {
      &:before {
        opacity: 1;
      }
      &:after {
        opacity: 0;
        opacity: 0;
        transition: none;
      }
    }
  }
  .app__header.menu {
    transition: transform 0.5s cubic-bezier(0.8, 0.12, 0.9, 0.37);
  }
  .sticky {
    .app__header {
      &:after {
        opacity: 0;
      }
    }
  }
  .footer-links {
    position: relative;
    height: auto;
    margin: 4rem 0 5rem;
    font-family: "Merriweather", Helvetica, Arial, sans-serif;
    color: #333333;
    a {
      position: absolute;
      top: 0;
      display: flex;
      margin: 0.5rem;
      border-radius: 0.5rem;
      width: 20rem;
      height: 100%;
      text-decoration: none;
      align-items: center;
    }
    a.previous {
      left: 0;
      flex-direction: row-reverse;
    }
    a.next {
      right: 0;
    }
  }
  .footer-links__thumb {
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      height: 3px;
      width: 2rem;
      font-size: 3rem;
      border-bottom: 2px solid #333333;
    }
    img {
      display: none;
      position: relative;
      width: 50%;
      filter: invert(100%);
    }
  }
  .previous {
    .footer-links__thumb {
      align-items: flex-start;
      margin-left: 1rem;
      &:after {
        left: 0;
        right: auto;
      }
    }
  }
  .next {
    .footer-links__thumb {
      align-items: flex-end;
      margin-right: 1rem;
    }
    .footer-links__title {
      text-align: right;
    }
  }
  .footer-links__title {
    position: relative;
    top: 0.5rem;
    font-weight: 700;
    margin-top: 0.4em;
    font-size: 1.0664rem;
    line-height: 2rem;
  }
  .footer-links__client {
    font-size: 0.6rem;
    line-height: 1rem;
    font-family: "Interstate", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: #aaaaaa;
    margin: 0.5em 0;
  }
  .footer__signoff {
    display: flex;
    width: 30rem;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 6rem 0 4rem;
    h2 {
      width: 100%;
      margin-bottom: 0.5rem;
    }
    a {
      position: relative;
      width: 50%;
      color: #222222;
      text-decoration: none;
      overflow: visible;
    }
    .footer__email {
      margin-right: 1rem;
      &:after {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 0.7rem;
        top: 0.1rem;
        border-right: 1px solid black;
        right: -0.5rem;
      }
    }
    .footer__phone {
      font-size: 0.9em;
    }
  }
  .footer__signoff__links {
    font-size: 0.8rem;
    line-height: 1rem;
    width: 100%;
    text-align: center;
  }
  .footer-links__chevron {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    background: #333333;
    border-radius: 50%;
    svg {
      width: 70%;
      height: 70%;
      fill: #ffffff;
    }
  }
  .phone {
    position: relative;
    height: 20rem;
    width: 11.25rem;
    margin: 2rem auto;
  }
  .display {
    height: 32rem;
    padding: 0;
    .top-content {
      margin-top: 2rem;
    }
  }
  .display__screen {
    overflow: hidden;
  }
  .display--desktop {
    .display__screen.rsFullscreen {
      border: 0;
      border-radius: 0;
      background: black;
      .video-slide {
        position: absolute;
        top: 0;
        width: 100%;
        height: auto;
      }
      .image-slide {
        width: 100%;
      }
    }
    .display__screen {
      .rsOverflow {
        position: absolute;
        top: 0;
      }
      position: absolute;
      width: 94%;
      height: auto;
      top: 12%;
      left: 3%;
      &:before {
        content: "";
        pointer-events: none;
        position: relative;
        display: block;
        width: 62.5%;
        height: auto;
      }
    }
    .grid-cell--display {
      justify-content: flex-end;
    }
    .display__screen__wrapper {
      display: block;
      position: relative;
      width: 32rem;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      &:before {
        content: "";
        pointer-events: none;
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        padding-top: 100%;
        background: url(../images/screen-desktop.png);
        background-size: cover;
      }
    }
  }
  .display__nav {
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: auto;
    .swiper-pagination-bullet {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  .display__nav.align-right {
    justify-content: flex-end;
  }
  .display__nav.start {
    .display__arrow--left {
      fill: #aaaaaa;
    }
  }
  .display__nav.end {
    .display__arrow--right {
      fill: #aaaaaa;
    }
  }
  .display__arrow {
    fill: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
  }
  .section--dark {
    .display__arrow {
      fill: #ffffff;
    }
    background: #333333;
    color: #ffffff;
  }
  .video-slide {
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
    video {
      position: absolute;
      height: auto;
      width: 100%;
    }
  }
  element.style {
    cursor: -webkit-grabbing;
    width: 1114px;
    height: 557px;
  }
  .rsDefault {
    background: transparent;
    .rsOverflow {
      background: transparent;
    }
    .rsSlide {
      background: transparent;
    }
    .rsVideoFrameHolder {
      background: transparent;
    }
    .rsThumbs {
      background: transparent;
    }
  }
  .project__header {
    color: white;
    height: 25rem;
    background-size: cover;
    background-position: center right 10%;
    background-repeat: no-repeat;
    padding: 2.5rem 0;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    .grid {
      height: 100%;
      align-items: flex-end;
    }
  }
  .project__header__title {
    h1 {
      text-align: left;
      text-transform: none;
      font-weight: 400;
      margin: 0;
    }
    h3 {
      text-align: left;
      font-family: "Interstate", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-size: 1.0664rem;
      line-height: 2rem;
      margin: 0.3rem 0;
    }
  }
  .project__header__hero {
    position: relative;
    display: block;
    width: auto;
    height: 20rem;
    margin: 2rem auto 0;
  }
  .slide {
    position: absolute;
    max-width: 600px;
    img {
      width: 100%;
      border: 1px solid #aaaaaa;
    }
  }
  .section--intro {
    padding: 4rem 0;
    background: #efefef;
    h2 {
      font-size: 1.0664rem;
      line-height: 2rem;
      font-weight: 400;
      max-width: 20em;
    }
    h3 {
      color: #333333;
      font-size: 1.0664rem;
      line-height: 2rem;
      margin: 1rem 0;
      font-weight: 400;
    }
  }
  .credits {
    padding-left: 2rem;
  }
  .divider {
    width: 100%;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 80%;
      margin-left: 10%;
      border-top: 2px solid green;
    }
  }
  #icons {
    display: none;
  }
  .image-frame {
    margin-bottom: 2rem;
    .grid-cell {
      flex-direction: row;
      align-items: flex-start;
      margin-left: calc(100% * 0.08333333);
      border: 1px solid #333333;
      img {
        &:nth-of-type(1) {
          width: 45.5%;
        }
        &:nth-of-type(2) {
          width: 54.8%;
        }
      }
    }
  }
  .image-slide {
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .hero-slide {
    flex-direction: row;
    justify-content: center;
    .image-slide {
      height: auto;
      width: 80%;
      border-radius: 0.5rem;
      border: 1rem solid #aaaaaa;
    }
  }
  .display__captions {
    position: relative;
    width: 100%;
    height: 14rem;
    h4 {
      font-size: 0.8rem;
      line-height: 1rem;
      margin: 1rem 0;
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
      line-height: 1.5rem !important;
      margin-top: 0;
      transition: all 0.5s linear;
    }
    .caption {
      transition: all 0.3s ease-in 0.3s;
      transform: translateX(0%);
      position: absolute;
      top: 0rem;
      margin: 0.5rem 0;
      strong {
        font-size: 1.1em;
        display: inline-block;
        margin-right: 0.2em;
      }
      &:not(.current) {
        transition: all 0.3s ease-in;
        opacity: 0;
        transform: translateX(10%);
      }
    }
  }
  .display__nav-below {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    color: black;
    width: 80%;
    margin: 0 auto;
    span {
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
  .display__fullscreen-button {
    width: auto;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    height: 1.5rem;
    svg {
      height: 90%;
      left: 0;
      top: 0;
    }
    span {
      text-transform: uppercase;
      display: block;
      font-size: 0.6rem;
      line-height: 1rem;
      right: 0;
    }
  }
  .rsSlide {
    background: black;
  }
  .rsArrow {
    opacity: 0;
  }
  .rsFullscreen {
    .rsArrow {
      opacity: 1;
    }
    .rsFullscreenBtn {
      opacity: 1;
    }
  }
  .rsFullscreenBtn {
    opacity: 0;
  }
  #wattyl-video.placeholder {
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
  .highlight {
    position: absolute;
    height: 5%;
    border: 1px solid red;
    width: 50%;
    top: 30%;
    left: 18%;
    z-index: 2;
  }
  .e-newsletters {
    img {
      border: 0;
    }
  }
  .section--overflow {
    overflow: visible;
    .slide {
      height: auto;
      overflow: visible;
      img {
        position: relative;
        width: 100%;
        height: auto;
        border: 0;
      }
      img[src*="mod-block-1"] {
        position: absolute;
        top: 49%;
        left: 14.1%;
        width: 70.5%;
        height: auto;
        z-index: 2;
      }
      img[src*="mod-block-2"] {
        position: absolute;
        top: 30.8%;
        left: 14.1%;
        width: 70.5%;
        height: auto;
        z-index: 2;
      }
      img[src*="mod-block-3"] {
        position: absolute;
        top: 63.6%;
        left: 13.9%;
        width: 70.7%;
        height: auto;
        z-index: 2;
      }
      img[src*="mod-block-4"] {
        position: absolute;
        top: 66.6%;
        left: 49.7%;
        width: 35%;
        height: auto;
        z-index: 2;
      }
    }
  }
  .slide-wrapper {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .me-pic {
    align-self: center;
    border-radius: 50%;
  }
  .works {
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
    h3 {
      text-align: center;
    }
  }
  .work {
    margin-bottom: 4rem;
    &:hover {
      background-color: #efefef;
    }
    a {
      text-decoration: none;
      color: #222222;
    }
    h3 {
      text-transform: none;
      text-align: left;
      margin: 0;
    }
    p {
      margin: 1rem 0 2rem;
      text-transform: uppercase;
      font-size: 0.6rem;
      line-height: 1rem;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        width: 3rem;
        bottom: -1rem;
        border-bottom: 2px solid #aaaaaa;
      }
    }
  }
  .work__details {
    padding: 0 0.5rem 1rem;
  }
  .work__thumb {
    display: block;
    position: relative;
    width: 100%;
    height: 10rem;
    background-size: cover;
    background-position: center center;
    border: 1px solid #efefef;
    &:before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      pointer-events: none;
      background-image: radial-gradient(
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0.5) 100%
      );
      mix-blend-mode: soft-light;
      z-index: 1;
    }
  }
  .work__tag {
    color: #fafafa;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
    line-height: 0.8rem;
  }
  .thumb-annotations {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    p {
      width: 33%;
      color: black;
      font-size: 0.4504rem;
      line-height: 1rem;
      text-align: center;
      padding: 0;
    }
  }
  .display__count {
    position: absolute;
    top: 0;
    left: 0;
  }
  .current-count {
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .full-count {
    position: relative;
    font-size: 0.6rem;
    line-height: 1rem;
    font-weight: 700;
    color: #aaaaaa;
    &:before {
      content: "/";
      margin-right: 0.3em;
    }
  }
  .section--palegrey {
    background: #fafafa;
  }
  .slider-cell {
    align-items: flex-end;
  }
  .approach {
    svg {
      width: 82%;
      height: 4rem;
      fill: #ff9900;
    }
    h1 {
      width: 100%;
      margin-top: 2rem;
    }
    h4 {
      margin: 0.2rem 0;
    }
    .grid-cell {
      padding: 0 1rem;
    }
  }
  .about {
    flex-direction: row;
    padding: 2rem 1rem 0 25%;
    h1 {
      text-align: left;
      margin-top: 0;
    }
    .top-content {
      width: calc(70% - 3rem);
      padding-top: 1.5rem;
      padding-right: 1rem;
      padding-bottom: 2rem;
    }
    .bottom-content {
      width: calc(30% - 3rem);
      padding-top: 1.5rem;
      padding-bottom: 2rem;
      margin-left: -1rem;
      a {
        position: relative;
        display: flex;
        font-size: 0.8rem;
        line-height: 1.4rem;
        padding-left: 2.5rem;
        margin-bottom: 0.5rem;
        svg {
          position: absolute;
          left: 0;
          display: block;
          fill: #aaaaaa;
          height: 2rem;
          width: 2rem;
          margin-right: 0.5em;
        }
      }
    }
  }
  .single-image {
    > img {
      width: 85%;
    }
  }
  .process {
    color: white;
    p {
      position: relative;
      padding-left: 5em;
    }
    svg {
      position: absolute;
      top: -0.4em;
      left: 0;
      width: 3.5em;
      height: 3.5em;
      fill: #ffffff;
    }
  }
  .process-hero {
    img {
      align-self: center;
      width: 100%;
      border: 1px solid #aaaaaa;
    }
  }
  .additional-features {
    .grid-cell {
      padding-right: 2rem;
    }
  }
  .section--grey {
    background: #efefef;
  }
  .display__nav__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    cursor: pointer;
  }
  .display__nav__arrow--left {
    border-width: 0.5rem 0.75rem 0.5rem 0;
    border-color: transparent #c8c8c8 transparent transparent;
    margin-right: 0.75rem;
  }
  .start {
    .display__nav__arrow--left {
      border-color: transparent rgba(200, 200, 200, 0.6) transparent transparent;
    }
  }
  .display__nav__arrow--right {
    border-width: 0.5rem 0 0.5rem 0.75rem;
    border-color: transparent transparent transparent #c8c8c8;
    margin-left: 0.75rem;
  }
  .end {
    .display__nav__arrow--right {
      border-color: transparent transparent transparent rgba(200, 200, 200, 0.6);
    }
  }
  .display__nav__bullet {
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: rgba(200, 200, 200, 0.6);
    margin: 0 0.35rem;
  }
  .display__nav__bullet.current {
    background: #c8c8c8;
  }
  .store-locator {
    ul {
      padding-left: 0.5em;
    }
    li {
      list-style-type: none;
      &:before {
        content: "•";
        color: red;
        position: absolute;
        left: -0.3em;
      }
    }
  }
  #mother-thumb {
    overflow: visible;
    &:hover {
      background: transparent;
      cursor: not-allowed;
    }
    h3 {
      &:after {
        position: absolute;
        left: 0;
        bottom: -1em;
        font-size: 0.6em;
        content: "(CASE STUDY COMING SOON)";
        font-family: "Interstate", Helvetica, Arial, sans-serif;
        font-weight: 300;
        margin-left: 0.5rem;
        color: #aaaaaa;
      }
    }
  }
  .grid--column-grid {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
  }
  .grid-cell--display {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .display--mobile {
    .display__screen__wrapper {
      display: block;
      position: relative;
      width: 12rem;
      height: auto;
      &:before {
        content: "";
        pointer-events: none;
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        padding-top: 196%;
        background: url(../images/screen-mobile.png);
        background-size: cover;
      }
    }
    .display__screen {
      position: absolute;
      width: 79%;
      height: 70%;
      top: 14%;
      left: 10%;
    }
  }
  .section--image-blocks {
    height: 25rem;
    flex-direction: row;
    padding: 0;
  }
  .image-block__caption {
    width: 60%;
  }
  .image-block {
    position: relative;
    height: 100%;
    width: 50%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    .grid-cell {
      height: auto;
      padding-top: 1rem;
    }
  }
  .section--image-full {
    height: 30rem;
    padding: 0;
  }
  .image-full {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    .grid-cell {
      height: 100%;
      padding-top: 3rem;
      h4 {
        margin-top: 0;
      }
    }
  }
  .section--scroll {
    flex-direction: row;
    align-items: stretch;
    .image-block {
      position: relative;
      height: auto;
    }
    img.anim {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    img[src*="mod-block-1"] {
      position: absolute;
      top: 50.9%;
      left: 8.8%;
      width: 81.2%;
      height: auto;
      z-index: 2;
    }
    img[src*="mod-block-2"] {
      position: absolute;
      top: 32.3%;
      left: 8.8%;
      width: 81.2%;
      height: auto;
      z-index: 2;
    }
    img[src*="mod-block-3"] {
      position: absolute;
      top: 64.1%;
      left: 8.6%;
      width: 81.7%;
      height: auto;
      z-index: 2;
    }
    img[src*="mod-block-4"] {
      position: absolute;
      top: 67%;
      left: 49.7%;
      width: 40.3%;
      height: auto;
      z-index: 2;
    }
  }
  .mod-blocks {
    position: absolute;
    top: 0;
    width: 80%;
    height: auto;
    overflow: visible;
    z-index: 2;
    width: 70%;
    left: 5%;
    &:before {
      content: "";
      pointer-events: none;
      z-index: -1;
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      padding-top: 254%;
    }
  }
  #email-main {
    img.sizer {
      width: 70%;
      left: 5%;
    }
  }
  #email-dynamic {
    background-color: #fafafa;
    img {
      width: 70%;
      left: 5%;
    }
  }
  .is_stuck {
    top: 3rem !important;
  }
  .section--details {
    padding: 4rem 0;
    background: #efefef;
    .grid {
      .grid-cell {
        &:first-of-type {
          padding-right: 2rem;
        }
        &:last-of-type {
          padding-left: 2rem;
          &:before {
            left: auto;
            right: 0;
          }
        }
      }
    }
    img {
      display: block;
      border: 2px solid #efefef;
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
      margin-top: 2rem;
      padding-left: 0.5rem;
      color: #333333;
      line-height: 1.5rem !important;
    }
  }
  .section--details.first {
    padding: 4rem 0 3rem;
  }
  .section--details.last {
    padding: 3rem 0 4rem;
  }
  .vignette {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: auto;
      top: 0;
      left: 0;
      width: 100%;
      padding-top: 75%;
      z-index: 3;
      background-image: radial-gradient(
        rgba(0, 0, 0, 0) 40%,
        rgba(0, 0, 0, 0.3) 100%
      );
      opacity: 0.1;
    }
  }
  .image-full.vignette {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 3;
      background-image: radial-gradient(
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.5) 100%
      );
      opacity: 0.1;
    }
  }
  .mobile-store-locator {
    .display--video {
      background-image: linear-gradient(to right, #f8c680, #f6cd7e);
    }
    .image-full__caption {
      padding-top: 3rem;
      h4 {
        text-shadow: none;
        color: #222222;
      }
      p {
        text-shadow: none;
        color: #222222;
      }
    }
  }
  .wattyl-100-years {
    .display--mobile {
      background-image: linear-gradient(to right, #536694, #2a355b);
      p {
        color: #ffffff;
        text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
  .section--vids {
    padding: 0;
    .main-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      video {
        transform: scale(0.7);
      }
    }
  }
  .about-slider {
    margin: 3rem 0 0;
    width: 110%;
    height: auto;
    left: -65px;
    background: transparent !important;
    &:before {
      content: "";
      pointer-events: none;
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      padding-top: 90%;
      background-size: cover;
    }
    .rsOverflow {
      background: transparent !important;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .rsSlide {
      background: transparent !important;
    }
    .rsVideoFrameHolder {
      background: transparent !important;
    }
    .rsThumbs {
      background: transparent !important;
    }
    .rsArrow {
      opacity: 1;
    }
    .rsArrowIcn {
      top: 40%;
    }
    .rsNav {
      position: absolute;
      top: 0;
    }
    .rsThumbsContainer {
      transform: none !important;
      width: 90% !important;
      margin-left: 5%;
    }
    .rsThumb {
      width: 19%;
      div {
        text-align: center;
        font-family: "Merriweather", Helvetica, Arial, sans-serif;
        font-size: 0.8rem;
        line-height: 1rem;
      }
      &:not(.rsNavSelected) {
        opacity: 0.4;
      }
    }
  }
  .phone-wrap {
    display: block;
    position: relative;
    width: 12rem;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top left;
    height: auto;
    &:before {
      content: "";
      pointer-events: none;
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      padding-top: 196%;
      background-size: cover;
    }
  }
  .phone-wrap1 {
    background-image: url(../images/mobile-store-locator/sl-phone1.jpg);
    &:after {
      content: "►";
      position: absolute;
      height: 100%;
      width: 1em;
      color: #aaaaaa;
      top: 50%;
      right: -30%;
    }
  }
  .phone-wrap2 {
    background-image: url(../images/mobile-store-locator/sl-phone1.jpg);
    background-image: url(../images/mobile-store-locator/sl-phone2.jpg);
    &:after {
      content: "►";
      position: absolute;
      height: 100%;
      width: 1em;
      color: #aaaaaa;
      top: 50%;
      right: -30%;
    }
  }
  .phone-wrap3 {
    background-image: url(../images/mobile-store-locator/sl-phone3.jpg);
  }
  .text-wrap {
    h4 {
      line-height: 1.4 !important;
      margin-top: 1rem !important;
    }
  }
  .caption-block {
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    padding: 2rem 0 0 3rem;
    h4 {
      color: #ffffff;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    }
    p {
      color: #ffffff;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
      line-height: 1.5rem !important;
    }
    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      color: white;
      padding-left: 1.7em;
      &:after {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 2em;
        bottom: 0;
        right: 0;
        bottom: -0.2em;
        border-bottom: 2px dotted #fff;
      }
      svg {
        position: absolute;
        display: inline-block;
        left: 0;
        fill: #ffffff;
        width: 1.7em;
        height: 1.7em;
        margin-right: 0.2em;
      }
    }
  }
  #campaign-ux {
    height: 25rem;
    background-image: url(../images/campaign-ux-FULL.jpg);
  }
  #songs-responsive {
    height: 25rem;
    background-image: url(../images/songs-responsive-FULL.jpg);
    background-position: center;
  }
  #store-locator-vid {
    h4 {
      text-shadow: none;
      color: #333333;
    }
    p {
      text-shadow: none;
      color: #333333;
    }
  }
  #wizard-context {
    .grid-cell--display {
      justify-content: center;
    }
    .display__screen__wrapper {
      width: 23rem;
    }
  }
  #email-mobile {
    height: 25rem;
    background-image: url(../images/email-mobile-FULL.jpg);
  }
  #email-desktop {
    height: 25rem;
    background-size: 100% auto;
    background-position: center center;
    background-image: url(../images/email-desktop-FULL.jpg);
  }
  #michael-thwaites-ipad {
    height: 25rem;
    background-image: url(../images/michael-thwaites-ipad-FULL.jpg);
    h4 {
      text-shadow: none;
      color: #333333;
    }
    p {
      text-shadow: none;
      color: #333333;
    }
  }
  #michael-thwaites-imagery {
    height: 25rem;
    background-image: url(../images/michael-thwaites-imagery-FULL.jpg);
  }
  .michael-thwaites {
    .display--slider {
      background: #fafafa;
    }
  }
  .swiper-pagination-custom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20%;
  }
  @media (min-width: 1200px) {
    html {
      font-size: 25px;
    }
    h1 {
      font-size: 2.5256rem;
      line-height: 4rem;
    }
    h2 {
      font-size: 1.8952rem;
      line-height: 3rem;
    }
    h3 {
      font-size: 1.0664rem;
      line-height: 2rem;
    }
    h4 {
      font-size: 1.0664rem;
      line-height: 2rem;
    }
    .size-1 {
      font-size: 1.0664rem;
      line-height: 2rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    li {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    p.p__intro {
      font-size: 1.0664rem;
      line-height: 2rem;
    }
    p.small {
      font-size: 0.6rem;
      line-height: 1rem;
    }
    p.xsmall {
      font-size: 0.4504rem;
      line-height: 1rem;
    }
    .app__menu {
      a {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .app__menu__links {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    .footer-links__title {
      font-size: 1.0664rem;
      line-height: 2rem;
    }
    .footer-links__client {
      font-size: 0.6rem;
      line-height: 1rem;
    }
    .footer__signoff__links {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    footer {
      h2 {
        font-size: 1.4216rem;
        line-height: 2rem;
      }
      p {
        font-size: 1.0664rem;
        line-height: 2rem;
      }
    }
    .project__header__title {
      h3 {
        font-size: 1.0664rem;
        line-height: 2rem;
      }
    }
    .section--intro {
      h2 {
        font-size: 1.0664rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.0664rem;
        line-height: 2rem;
      }
    }
    .display__captions {
      h4 {
        font-size: 0.8rem;
        line-height: 1rem;
      }
      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .display__nav-below {
      span {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .display__fullscreen-button {
      span {
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .work {
      p {
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .work__tag {
      font-size: 0.6rem;
      line-height: 1rem;
    }
    .thumb-annotations {
      p {
        font-size: 0.4504rem;
        line-height: 1rem;
      }
    }
    .current-count {
      font-size: 0.6rem;
      line-height: 1rem;
    }
    .full-count {
      font-size: 0.6rem;
      line-height: 1rem;
    }
    .section--details {
      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .about-slider {
      .rsThumb {
        div {
          font-size: 0.8rem;
          line-height: 1rem;
        }
      }
    }
  }
  @media (min-width: 1500px) {
    html {
      font-size: 30px;
    }
  }
  @media (max-width: 899px) {
    html {
      font-size: 17px;
    }
    h1 {
      font-size: 1.6592rem;
      line-height: 3rem;
    }
    h2 {
      font-size: 1.3824rem;
      line-height: 2rem;
    }
    h3 {
      font-size: 0.96rem;
      line-height: 2rem;
    }
    h4 {
      font-size: 0.96rem;
      line-height: 2rem;
    }
    .size-1 {
      font-size: 0.96rem;
      line-height: 2rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    li {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    p.p__intro {
      font-size: 0.96rem;
      line-height: 2rem;
    }
    p.small {
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    p.xsmall {
      font-size: 0.5552rem;
      line-height: 1rem;
    }
    .app__menu {
      a {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .app__menu__links {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    .footer-links__title {
      font-size: 0.96rem;
      line-height: 2rem;
    }
    .footer-links__client {
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    .footer__signoff__links {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    footer {
      h2 {
        font-size: 1.152rem;
        line-height: 2rem;
        font-size: 1.0664rem;
        line-height: 2rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 0.96rem;
        line-height: 2rem;
        font-size: 0.8rem;
        line-height: 1rem;
        padding-left: 35%;
      }
      background-size: auto 110%, auto, auto 12rem;
      background-position: left -0.5rem bottom -1rem, 0 0, 0 0;
      height: 8rem;
    }
    .project__header__title {
      h3 {
        font-size: 0.96rem;
        line-height: 2rem;
      }
    }
    .section--intro {
      h2 {
        font-size: 0.96rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 0.96rem;
        line-height: 2rem;
      }
    }
    .display__captions {
      h4 {
        font-size: 0.8rem;
        line-height: 1rem;
      }
      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .display__nav-below {
      span {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .display__fullscreen-button {
      span {
        font-size: 0.6664rem;
        line-height: 1rem;
      }
    }
    .work {
      p {
        font-size: 0.6664rem;
        line-height: 1rem;
      }
    }
    .work__tag {
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    .thumb-annotations {
      p {
        font-size: 0.5552rem;
        line-height: 1rem;
      }
    }
    .current-count {
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    .full-count {
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    .section--image-blocks {
      flex-direction: column;
      height: 19rem;
    }
    .section--details {
      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .about-slider {
      .rsThumb {
        div {
          font-size: 0.8rem;
          line-height: 1rem;
        }
      }
    }
  }
  @media (max-width: 550px) and (orientation: portrait) {
    html {
      font-size: calc(0.5em + 4vw);
    }
    .grid {
      padding: 0;
    }
    .grid1 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid2 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid3 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid4 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid5 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid6 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid7 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid8 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid9 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid10 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid11 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid12 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .offset1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset2 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset3 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset4 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset5 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset6 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset7 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset8 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset9 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset10 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset11 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    section.block {
      height: auto;
      height: auto;
    }
    h1 {
      font-size: 1.8942rem;
      line-height: 4rem;
      font-size: 1.8942rem;
      line-height: 4rem;
    }
    h2 {
      font-size: 1.4214rem;
      line-height: 3rem;
      font-size: 1.4214rem;
      line-height: 3rem;
    }
    h3 {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    h4 {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    .size-1 {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    p {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
    }
    li {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
    }
    p.p__intro {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    p.small {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    p.xsmall {
      font-size: 0.3378rem;
      line-height: 1rem;
      font-size: 0.3378rem;
      line-height: 1rem;
    }
    .index__title {
      margin-top: 1rem;
    }
    .index__subtitle {
      &:after {
        width: calc(100% - 2rem);
        margin: 0 1rem;
        width: 50%;
        bottom: 0;
        margin: 0;
      }
    }
    .app__body.menu {
      transform: translateX(-90%);
    }
    .app__menu {
      width: 90%;
      a {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .app__logo {
      width: 2.6rem;
      height: 2.6rem;
    }
    .app__menu__links {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.5552rem;
      line-height: 1rem;
    }
    .app__header.menu {
      transform: translateX(-90%);
    }
    .footer-links {
      height: 5rem;
      margin: 0.5rem 0 1rem;
      a {
        width: 45%;
      }
    }
    .footer-links__thumb {
      width: 75%;
      &:after {
        display: none;
      }
    }
    .footer-links__title {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.6664rem;
      line-height: 1rem;
      top: 0rem;
      margin: 0;
    }
    .footer-links__client {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
      display: none;
    }
    .footer__signoff {
      font-size: 0.5552rem;
      line-height: 1rem;
      justify-content: flex-start;
      width: auto;
      margin: 1rem 0rem 1rem 6rem;
      h2 {
        text-align: left;
        font-size: 0.8rem;
        line-height: 1rem;
        line-height: 1.4;
      }
      a {
        font-size: 0.7em;
        display: block;
        width: auto;
        text-align: left;
        line-height: 1.4;
        &:after {
          display: none;
        }
      }
      .footer__email {
        font-size: 0.8em;
        &:after {
          display: none;
        }
      }
      .footer__phone {
        font-size: 0.7em;
      }
    }
    .footer__signoff__links {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
      justify-content: flex-start;
      width: auto;
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    .footer-links__chevron {
      width: 1rem;
      height: 1rem;
      border: 1px solid white;
    }
    footer {
      h2 {
        font-size: 1.0662rem;
        line-height: 2rem;
        font-size: 1.0662rem;
        line-height: 2rem;
      }
      p {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
      }
    }
    .display--mobile {
      height: auto !important;
      .grid-cell--display {
        height: 22rem;
      }
      .display__screen__wrapper {
        width: 10rem;
      }
      .image-full {
        .display__screen__wrapper {
          width: 8rem;
        }
      }
      .image-block--right {
        height: 20rem;
      }
    }
    .project__header {
      height: 18rem;
      background-position: center center;
      padding: 0;
    }
    .project__header__title {
      h1 {
        font-size: 1.6592rem;
        line-height: 3rem;
        margin-bottom: 0.5rem;
        line-height: 2.4rem !important;
      }
      h3 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        font-size: 0.6664rem;
        line-height: 1rem;
      }
    }
    .project__header__hero {
      height: auto;
      width: 100%;
      margin: 1.5rem auto 0;
    }
    .slide {
      position: relative;
      width: 92.5%;
      margin: 0rem 0 1rem 5%;
    }
    .section--intro {
      padding: 1rem 0 2rem;
      flex-direction: column;
      h2 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
        line-height: 1.6rem !important;
      }
      h3 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
        margin-bottom: 0;
      }
      p {
        display: inline-block;
        width: auto;
        margin-bottom: 0em !important;
        &:not(:last-of-type) {
          &:after {
            content: ", ";
          }
        }
      }
    }
    .characters {
      .section--split.the-player {
        .bottom-content {
          order: 1;
        }
        .top-content {
          order: 2;
        }
      }
      .section--split {
        .top-content {
          > .video-slide {
            position: relative;
            video {
              position: relative;
            }
          }
        }
        .bottom-content {
          > .video-slide {
            position: relative;
            video {
              position: relative;
            }
          }
        }
      }
    }
    .credits {
      display: block;
      padding-left: 0;
    }
    .display__captions {
      height: 8rem;
      h4 {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
      p {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
      .caption {
        bottom: auto;
      }
    }
    .display__nav-below {
      span {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .display__fullscreen-button {
      span {
        font-size: 0.45rem;
        line-height: 1rem;
        font-size: 0.45rem;
        line-height: 1rem;
      }
    }
    .works {
      h3 {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .work {
      margin-bottom: 2rem;
      p {
        font-size: 0.45rem;
        line-height: 1rem;
        font-size: 0.45rem;
        line-height: 1rem;
      }
    }
    .work__tag {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    .thumb-annotations {
      p {
        font-size: 0.3378rem;
        line-height: 1rem;
        font-size: 0.3378rem;
        line-height: 1rem;
      }
    }
    .current-count {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    .full-count {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    .reverse-mobile {
      flex-direction: column-reverse;
    }
    .index-title {
      margin-top: 0rem;
      margin-bottom: 1rem;
      h1 {
        font-size: 1.8952rem;
        line-height: 3rem;
        line-height: 1.6 !important;
        margin-bottom: 1rem;
      }
    }
    .approach {
      svg {
        width: 100%;
      }
      h1 {
        width: calc(100% - 1.5rem);
        margin: 0 0.75rem;
        padding: 0;
        text-align: center;
        margin-top: 2rem;
      }
      .grid-cell {
        width: calc(100% - 1.5rem);
        margin: 0 0.75rem;
        padding: 0;
        text-align: center;
        margin-bottom: 2rem;
      }
      h4 {
        margin-top: 0;
      }
    }
    .about {
      flex-direction: column;
      padding: 0;
      .top-content {
        width: calc(100% - 1.5rem);
        padding-bottom: 0;
      }
      .bottom-content {
        width: calc(100% - 1.5rem);
        margin-left: 0.5rem;
      }
      h1 {
        text-align: center;
      }
      h2 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .process {
      p {
        margin-bottom: 1rem;
        padding-left: 0;
      }
      svg {
        position: relative;
        width: 100%;
        top: auto;
        height: 5em;
      }
    }
    .grid--column-grid {
      flex-direction: row;
    }
    .bottom-content {
      order: 2;
    }
    .top-content {
      order: 0;
    }
    .grid-cell--display {
      height: auto;
    }
    .section--image-blocks {
      flex-direction: column;
      height: 32rem;
    }
    .image-block {
      height: 50%;
      width: 100%;
      background-size: 138% auto;
    }
    .section--image-full {
      height: 12rem;
      height: 28rem;
      .image-full {
        background-size: auto 100%;
        background-position: bottom center;
      }
    }
    .mod-blocks {
      width: 100%;
      left: 0%;
      width: 100%;
      left: 0%;
    }
    #email-main {
      img.sizer {
        width: 100%;
        left: 0%;
      }
    }
    #email-dynamic {
      img {
        width: 95%;
        left: 2.5%;
      }
    }
    .section--details.first {
      padding: 1.5rem 0 0;
    }
    .section--details.last {
      padding: 0 0 1.5rem;
    }
    .section--details {
      .grid {
        .grid-cell {
          padding: 0;
          &:first-of-type {
            padding: 1rem 0;
          }
          &:last-of-type {
            padding: 1rem 0;
          }
        }
      }
      p {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .section--vids {
      .main-slide {
        position: relative;
        height: 20rem;
        video {
          transform: scale(0.9);
        }
      }
    }
    .player {
      .image-block--right {
        order: -1;
      }
    }
    .wizard {
      height: auto !important;
    }
    .about-slider {
      width: 100%;
      height: auto;
      left: 0px;
      height: 14rem;
      margin-top: 1rem;
      .rsThumbsContainer {
        width: 100% !important;
        margin: 0 !important;
      }
      .rsThumb {
        width: 20%;
        margin: 0 !important;
        div {
          font-size: 0.6rem;
          line-height: 1rem;
          font-size: 0.6rem;
          line-height: 1rem;
          font-size: 0.5rem;
          margin: 0;
        }
      }
    }
    .mobile-store-locator {
      .image-full__caption {
        padding-top: 1rem;
      }
    }
    .phone-wrap {
      width: 40%;
      padding-bottom: 1rem;
    }
    .phone-wrap1 {
      &:after {
        top: auto;
        right: auto;
        left: -55%;
        bottom: -47%;
        transform: rotate(90deg);
      }
    }
    .phone-wrap2 {
      &:after {
        top: auto;
        right: auto;
        left: -55%;
        bottom: -47%;
        transform: rotate(90deg);
      }
    }
    .text-wrap {
      width: 60%;
    }
    .section--steps {
      .grid-cell {
        flex-direction: row;
        margin: 0 0.5rem 0.5rem;
      }
    }
    .caption-block {
      position: relative;
      width: 100%;
      height: auto;
      padding: 1rem;
      h4 {
        margin: 0rem;
      }
    }
    #campaign-ux {
      height: 20rem;
      background-image: url(../images/campaign-ux-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #songs-responsive {
      height: 22rem;
      background-image: url(../images/songs-responsive-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #email-mobile {
      height: 22rem;
      background-image: url(../images/email-mobile-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #email-desktop {
      height: 15rem;
      background-image: url(../images/email-desktop-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #michael-thwaites-ipad {
      height: 22rem;
      background-image: url(../images/michael-thwaites-ipad-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #michael-thwaites-imagery {
      height: 22rem;
      background-image: url(../images/michael-thwaites-imagery-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
  }
  @media (max-width: 480px) and (orientation: landscape) {
    html {
      font-size: calc(0.5em + 4vw);
    }
    .grid {
      padding: 0;
    }
    .grid1 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid2 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid3 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid4 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid5 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid6 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid7 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid8 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid9 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid10 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid11 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .grid12 {
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
    .offset1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset2 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset3 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset4 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset5 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset6 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset7 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset8 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset9 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset10 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .offset11 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    section.block {
      height: auto;
      height: auto;
    }
    h1 {
      font-size: 1.8942rem;
      line-height: 4rem;
      font-size: 1.8942rem;
      line-height: 4rem;
    }
    h2 {
      font-size: 1.4214rem;
      line-height: 3rem;
      font-size: 1.4214rem;
      line-height: 3rem;
    }
    h3 {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    h4 {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    .size-1 {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    p {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
    }
    li {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
    }
    p.p__intro {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
    }
    p.small {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    p.xsmall {
      font-size: 0.3378rem;
      line-height: 1rem;
      font-size: 0.3378rem;
      line-height: 1rem;
    }
    .index__title {
      margin-top: 1rem;
    }
    .index__subtitle {
      &:after {
        width: calc(100% - 2rem);
        margin: 0 1rem;
        width: 50%;
        bottom: 0;
        margin: 0;
      }
    }
    .app__body.menu {
      transform: translateX(-90%);
    }
    .app__menu {
      width: 90%;
      a {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .app__logo {
      width: 2.6rem;
      height: 2.6rem;
    }
    .app__menu__links {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.5552rem;
      line-height: 1rem;
    }
    .app__header.menu {
      transform: translateX(-90%);
    }
    .footer-links {
      height: 5rem;
      margin: 0.5rem 0 1rem;
      a {
        width: 45%;
      }
    }
    .footer-links__thumb {
      width: 75%;
      &:after {
        display: none;
      }
    }
    .footer-links__title {
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.7998rem;
      line-height: 2rem;
      font-size: 0.6664rem;
      line-height: 1rem;
      top: 0rem;
      margin: 0;
    }
    .footer-links__client {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
      display: none;
    }
    .footer__signoff {
      font-size: 0.5552rem;
      line-height: 1rem;
      justify-content: flex-start;
      width: auto;
      margin: 1rem 0rem 1rem 6rem;
      h2 {
        text-align: left;
        font-size: 0.8rem;
        line-height: 1rem;
        line-height: 1.4;
      }
      a {
        font-size: 0.7em;
        display: block;
        width: auto;
        text-align: left;
        line-height: 1.4;
        &:after {
          display: none;
        }
      }
      .footer__email {
        font-size: 0.8em;
        &:after {
          display: none;
        }
      }
      .footer__phone {
        font-size: 0.7em;
      }
    }
    .footer__signoff__links {
      font-size: 0.6rem;
      line-height: 1rem;
      font-size: 0.6rem;
      line-height: 1rem;
      justify-content: flex-start;
      width: auto;
      font-size: 0.6664rem;
      line-height: 1rem;
    }
    .footer-links__chevron {
      width: 1rem;
      height: 1rem;
      border: 1px solid white;
    }
    footer {
      h2 {
        font-size: 1.0662rem;
        line-height: 2rem;
        font-size: 1.0662rem;
        line-height: 2rem;
      }
      p {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
      }
    }
    .display--mobile {
      height: auto !important;
      .grid-cell--display {
        height: 22rem;
      }
      .display__screen__wrapper {
        width: 10rem;
      }
      .image-full {
        .display__screen__wrapper {
          width: 8rem;
        }
      }
      .image-block--right {
        height: 20rem;
      }
    }
    .project__header {
      height: 18rem;
      background-position: center center;
      padding: 0;
    }
    .project__header__title {
      h1 {
        font-size: 1.6592rem;
        line-height: 3rem;
        margin-bottom: 0.5rem;
        line-height: 2.4rem !important;
      }
      h3 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        font-size: 0.6664rem;
        line-height: 1rem;
      }
    }
    .project__header__hero {
      height: auto;
      width: 100%;
      margin: 1.5rem auto 0;
    }
    .slide {
      position: relative;
      width: 92.5%;
      margin: 0rem 0 1rem 5%;
    }
    .section--intro {
      padding: 1rem 0 2rem;
      flex-direction: column;
      h2 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
        line-height: 1.6rem !important;
      }
      h3 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
        margin-bottom: 0;
      }
      p {
        display: inline-block;
        width: auto;
        margin-bottom: 0em !important;
        &:not(:last-of-type) {
          &:after {
            content: ", ";
          }
        }
      }
    }
    .characters {
      .section--split.the-player {
        .bottom-content {
          order: 1;
        }
        .top-content {
          order: 2;
        }
      }
      .section--split {
        .top-content {
          > .video-slide {
            position: relative;
            video {
              position: relative;
            }
          }
        }
        .bottom-content {
          > .video-slide {
            position: relative;
            video {
              position: relative;
            }
          }
        }
      }
    }
    .credits {
      display: block;
      padding-left: 0;
    }
    .display__captions {
      height: 8rem;
      h4 {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
      p {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
      .caption {
        bottom: auto;
      }
    }
    .display__nav-below {
      span {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .display__fullscreen-button {
      span {
        font-size: 0.45rem;
        line-height: 1rem;
        font-size: 0.45rem;
        line-height: 1rem;
      }
    }
    .works {
      h3 {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    .work {
      margin-bottom: 2rem;
      p {
        font-size: 0.45rem;
        line-height: 1rem;
        font-size: 0.45rem;
        line-height: 1rem;
      }
    }
    .work__tag {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    .thumb-annotations {
      p {
        font-size: 0.3378rem;
        line-height: 1rem;
        font-size: 0.3378rem;
        line-height: 1rem;
      }
    }
    .current-count {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    .full-count {
      font-size: 0.45rem;
      line-height: 1rem;
      font-size: 0.45rem;
      line-height: 1rem;
    }
    .reverse-mobile {
      flex-direction: column-reverse;
    }
    .index-title {
      margin-top: 0rem;
      margin-bottom: 1rem;
      h1 {
        font-size: 1.8952rem;
        line-height: 3rem;
        line-height: 1.6 !important;
        margin-bottom: 1rem;
      }
    }
    .approach {
      svg {
        width: 100%;
      }
      h1 {
        width: calc(100% - 1.5rem);
        margin: 0 0.75rem;
        padding: 0;
        text-align: center;
        margin-top: 2rem;
      }
      .grid-cell {
        width: calc(100% - 1.5rem);
        margin: 0 0.75rem;
        padding: 0;
        text-align: center;
        margin-bottom: 2rem;
      }
      h4 {
        margin-top: 0;
      }
    }
    .about {
      flex-direction: column;
      padding: 0;
      .top-content {
        width: calc(100% - 1.5rem);
        padding-bottom: 0;
      }
      .bottom-content {
        width: calc(100% - 1.5rem);
        margin-left: 0.5rem;
      }
      h1 {
        text-align: center;
      }
      h2 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .process {
      p {
        margin-bottom: 1rem;
        padding-left: 0;
      }
      svg {
        position: relative;
        width: 100%;
        top: auto;
        height: 5em;
      }
    }
    .grid--column-grid {
      flex-direction: row;
    }
    .bottom-content {
      order: 2;
    }
    .top-content {
      order: 0;
    }
    .grid-cell--display {
      height: auto;
    }
    .section--image-blocks {
      flex-direction: column;
      height: 32rem;
    }
    .image-block {
      height: 50%;
      width: 100%;
      background-size: 138% auto;
    }
    .section--image-full {
      height: 12rem;
      height: 28rem;
      .image-full {
        background-size: auto 100%;
        background-position: bottom center;
      }
    }
    .mod-blocks {
      width: 100%;
      left: 0%;
      width: 100%;
      left: 0%;
    }
    #email-main {
      img.sizer {
        width: 100%;
        left: 0%;
      }
    }
    #email-dynamic {
      img {
        width: 95%;
        left: 2.5%;
      }
    }
    .section--details.first {
      padding: 1.5rem 0 0;
    }
    .section--details.last {
      padding: 0 0 1.5rem;
    }
    .section--details {
      .grid {
        .grid-cell {
          padding: 0;
          &:first-of-type {
            padding: 1rem 0;
          }
          &:last-of-type {
            padding: 1rem 0;
          }
        }
      }
      p {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
    .section--vids {
      .main-slide {
        position: relative;
        height: 20rem;
        video {
          transform: scale(0.9);
        }
      }
    }
    .player {
      .image-block--right {
        order: -1;
      }
    }
    .wizard {
      height: auto !important;
    }
    .about-slider {
      width: 100%;
      height: auto;
      left: 0px;
      height: 14rem;
      margin-top: 1rem;
      .rsThumbsContainer {
        width: 100% !important;
        margin: 0 !important;
      }
      .rsThumb {
        width: 20%;
        margin: 0 !important;
        div {
          font-size: 0.6rem;
          line-height: 1rem;
          font-size: 0.6rem;
          line-height: 1rem;
          font-size: 0.5rem;
          margin: 0;
        }
      }
    }
    .mobile-store-locator {
      .image-full__caption {
        padding-top: 1rem;
      }
    }
    .phone-wrap {
      width: 40%;
      padding-bottom: 1rem;
    }
    .phone-wrap1 {
      &:after {
        top: auto;
        right: auto;
        left: -55%;
        bottom: -47%;
        transform: rotate(90deg);
      }
    }
    .phone-wrap2 {
      &:after {
        top: auto;
        right: auto;
        left: -55%;
        bottom: -47%;
        transform: rotate(90deg);
      }
    }
    .text-wrap {
      width: 60%;
    }
    .section--steps {
      .grid-cell {
        flex-direction: row;
        margin: 0 0.5rem 0.5rem;
      }
    }
    .caption-block {
      position: relative;
      width: 100%;
      height: auto;
      padding: 1rem;
      h4 {
        margin: 0rem;
      }
    }
    #campaign-ux {
      height: 20rem;
      background-image: url(../images/campaign-ux-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #songs-responsive {
      height: 22rem;
      background-image: url(../images/songs-responsive-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #email-mobile {
      height: 22rem;
      background-image: url(../images/email-mobile-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #email-desktop {
      height: 15rem;
      background-image: url(../images/email-desktop-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #michael-thwaites-ipad {
      height: 22rem;
      background-image: url(../images/michael-thwaites-ipad-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
    #michael-thwaites-imagery {
      height: 22rem;
      background-image: url(../images/michael-thwaites-imagery-MOB.jpg);
      background-size: 100% auto;
      background-position: bottom center;
    }
  }
  @media (min-width: 900px) {
    .app__body.menu {
      transform: translateX(-30%);
    }
    .app__header.menu {
      transform: translateX(-30%);
    }
    .display--mobile {
      height: 28rem;
    }
    .display {
      .display__nav {
        justify-content: flex-start;
      }
      .bottom-content {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 2rem;
      }
    }
    .phone-royalSlider {
      justify-content: space-between;
      .display__nav {
        justify-content: flex-start;
      }
      .bottom-content {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 2rem;
      }
    }
    .section--split {
      flex-direction: row;
      img {
        width: 100%;
      }
      h2 {
        width: calc(100% - 3rem);
        margin: 1rem 1.5rem 0rem;
      }
    }
    .characters {
      .section--split {
        height: 28rem;
        .mobile-player {
          left: 14%;
          right: auto;
        }
        .mobile-runner {
          right: 10%;
          left: auto;
        }
      }
    }
    .section--overflow {
      .slide {
        width: calc(45% - 2rem);
        margin-top: -20%;
      }
    }
    .approach {
      flex-direction: row;
    }
    .process {
      h2 {
        padding-left: 2.5rem;
      }
    }
    #slider-songs-full {
      width: calc(58% - 2rem);
    }
    .section--tall-desk {
      height: 32rem !important;
    }
  }
  @media (max-width: 899px) and (min-width: 1200px) {
    footer {
      h2 {
        font-size: 1.0664rem;
        line-height: 2rem;
      }
      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
  }
  @media (max-width: 899px) and (max-width: 899px) {
    footer {
      h2 {
        font-size: 0.96rem;
        line-height: 2rem;
      }
      p {
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
  }
  @media (max-width: 899px) and (max-width: 550px) and (orientation: portrait) {
    footer {
      h2 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
      }
      p {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
  }
  @media (max-width: 899px) and (max-width: 480px) and (orientation: landscape) {
    footer {
      h2 {
        font-size: 0.7998rem;
        line-height: 2rem;
        font-size: 0.7998rem;
        line-height: 2rem;
      }
      p {
        font-size: 0.6rem;
        line-height: 1rem;
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }
  }
  @media (max-width: 550px) and (orientation: portrait) and (min-width: 1200px) {
    .index-title {
      h1 {
        font-size: 1.8952rem;
        line-height: 3rem;
      }
    }
  }
  @media (max-width: 480px) and (orientation: landscape) and (min-width: 1200px) {
    .index-title {
      h1 {
        font-size: 1.8952rem;
        line-height: 3rem;
      }
    }
  }
  @media (max-width: 550px) and (orientation: portrait) and (max-width: 899px) {
    .index-title {
      h1 {
        font-size: 1.3824rem;
        line-height: 2rem;
      }
    }
  }
  @media (max-width: 480px) and (orientation: landscape) and (max-width: 899px) {
    .index-title {
      h1 {
        font-size: 1.3824rem;
        line-height: 2rem;
      }
    }
  }
  @media (max-width: 550px) and (orientation: portrait) and (max-width: 550px) and (orientation: portrait) {
    .index-title {
      h1 {
        font-size: 1.4214rem;
        line-height: 3rem;
        font-size: 1.4214rem;
        line-height: 3rem;
      }
    }
  }
  @media (max-width: 480px) and (orientation: landscape) and (max-width: 550px) and (orientation: portrait) {
    .index-title {
      h1 {
        font-size: 1.4214rem;
        line-height: 3rem;
        font-size: 1.4214rem;
        line-height: 3rem;
      }
    }
  }
  @media (max-width: 550px) and (orientation: portrait) and (max-width: 480px) and (orientation: landscape) {
    .index-title {
      h1 {
        font-size: 1.4214rem;
        line-height: 3rem;
        font-size: 1.4214rem;
        line-height: 3rem;
      }
    }
  }
  @media (max-width: 480px) and (orientation: landscape) and (max-width: 480px) and (orientation: landscape) {
    .index-title {
      h1 {
        font-size: 1.4214rem;
        line-height: 3rem;
        font-size: 1.4214rem;
        line-height: 3rem;
      }
    }
  }
`;

export default allStyles;
