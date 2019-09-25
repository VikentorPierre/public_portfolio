import React from "react";
import pic01 from "../img/apex.png";
import pic02 from "../img/vespo.png";
import pic03 from "../img/loneme.png";
const Portfilio = () => {
  return (
    <div className="inner">
      <header class="header portfolio">
        <h2> portfolio </h2>
      </header>
      <article class="feature left">
        <span class="image">
          <img className="feature--img " src={pic02} alt="" />
        </span>
        <div class="content">
          {/* <h2>Integer vitae libero acrisus egestas placerat sollicitudin</h2> */}
          <p>
            A landing Page for a start-up located in Orlando. Started at the University Of Central Florida.
            Vespo is a customer business reward system. customer shop at any vendor and earn rewards.
          </p>
          <div>
            <a href="https://vespolandingpage.herokuapp.com" target="_blank" className="link-src">
              View Site
              </a>
            <a href="https://github.com/VikentorPierre/Vespo-landing-page" target="_blank" className="link-src" > GitHub </a>
          </div>
        </div>
      </article>
      <article class="feature right">
        <span class="image">
          <img className="feature--img" src={pic03} alt="" />
        </span>
        <div class="content">
          {/* <h2>Integer vitae libero acrisus egestas placerat sollicitudin</h2> */}
          <p>
            loneme is a full stack blog post side am currently working on. please note this sample is using MomngoDB atlas free version.
            so the backend database IP will keep on changing. So authentication and authorization is fully working, but when atlas change IP it stop working.
            Even so, the site is fully working with the abillity to create new posts, comment, like, and sign-up and login.
          </p>
          <div>
            <a href="https://vikentorpierre.github.io/lonme_01/" target="_blank" className="link-src">
              View Site
              </a>
            <a href="https://github.com/VikentorPierre/lonme_01" target="_blank" className="link-src" > GitHub </a>
          </div>

        </div>
      </article>
      <article class="feature left">
        <span class="image">
          <img className="feature--img " src={pic01} alt="" />
        </span>
        <div class="content">
          {/* <h2>Integer vitae libero acrisus egestas placerat sollicitudin</h2> */}
          <p>
            A full stack React.js and express.js web app that tracks Apex Legends players.
            This Application use <a href="https://tracker.gg/" style={{
              color: 'blue',
              cursor: 'pointer'
            }} > tracker.gg </a> Api to pull
            Apex Legends players.
          </p>
          <div>
            <a href="https://apextrackerapi.herokuapp.com/" target="_blank" className="link-src">
              View Site
              </a>
            <a href="https://github.com/VikentorPierre/ApexLegendAPITracker" target="_blank" className="link-src" > GitHub </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Portfilio;

