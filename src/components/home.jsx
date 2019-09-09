import React, { Component } from "react";
import Portfolio from "./port";
import Skills from "./skill";
import "../css/base.css";
import "../css/home.css";
import Me from "../img/me.jpeg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <div id="hero--bg">
          <div className="hero">
            <section id="card">
              <ul>
                <li>
                  <span />
                  <strong> Web-app with the MERN stack </strong>
                </li>
                <li>
                  <span />
                  <strong>IOS apps with swift5 and latest xcode</strong>
                </li>
                <li>
                  <span />
                  <strong> UI/UX Designs with Figma.</strong>
                </li>
              </ul>
            </section>

            <section id="primary">
              <h2> your one stop shop developer on-demand</h2>

              <div>
                <a href="#"> Contact Me </a>
                <a href="#"> Resume </a>
                <a href="#"> LinkIn </a>
                <a href="#"> GitHub </a>
              </div>
            </section>
          </div>
        </div>
        <section className="wrapper" id="portfolio ">
          <Portfolio />
        </section>
        <section className="wrapper" id="skills">
          <Skills />
        </section>
        <section className="footer">
          <footer className="footer-wrapper">
            <div>
              <span> © SiteName  2019 Copyright </span>
              <a href="#"> Contact Me </a>
              <a href="#"> Resume </a>
              <a href="#"> LinkIn </a>
              <a href="#"> GitHub </a>

            </div>
          </footer>
        </section>
      </main>
    );
  }
}

export default Home;
