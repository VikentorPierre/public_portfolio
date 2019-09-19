import React, { Component } from "react";
import Portfolio from "./port";
import Skills from "./skill";
import pdf from "./resume.pdf";
import "../css/base.css";
import "../css/home.css";
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
                  <strong>IOS apps with swift5 and the latest Xcode</strong>
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
                <a href="mailto:viekntopierre@gmail.com"> Contact Me </a>
                <a href={pdf} target="_blank"> Resume </a>
                {/* https://www.linkedin.com/in/vikentor-pierre-155886161 */}
                <a href="https://www.linkedin.com/in/vikentor-pierre-155886161" target="_blank"> LinkIn </a>

                {/* <a href="https://www.linkedin.com/in/vikentor-pierre-155886161?trk=people-guest_profile-result-card_result-card_full-click" target="_blank"> LinkIn </a> */}
                <a href="https://github.com/VikentorPierre" target="_blank"> GitHub </a>
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
              <span className="copyright"> &copy; Copyright 2019, modevtech </span>
              <div className="helpful-link">
                <a href="mailto:vikentorpierre@gmail.com"> Contact Me </a>
                <a href={pdf} target="_blank"> Resume </a>
                <a href="https://www.linkedin.com/in/vikentor-pierre-155886161" target="_blank"> LinkIn </a>
                <a href="https://github.com/VikentorPierre" target="_blank"> GitHub </a>
              </div>

            </div>
          </footer>
        </section>
      </main>
    );
  }
}

export default Home;