import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './About.css';

const About = () => {

  
  return (
    <div>
      <div className="about-section">
        <h1>Meet the Team!</h1>
        {/* <h4>Version 1.0</h4> */}
        <h3>Developed & designed by:</h3>
      </div>

      <div className="card-container">
        <div className="card">
          <img className="profile-pic" src="../../profile-pics/126109065.jpg" alt="" />
          <h2>Heather Bluesky</h2>
          <p>Get in touch:</p>

          <div className="icon-wrapper icon-container">
            <div className="github-wrapper">
              <a className="github" href="https://github.com/HeatherBluesky">
                <div className="circle-border">
                  <i className="fab fa-github custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper linkedin-wrapper">
              <a href="https://www.linkedin.com/in/heatherbluesky/">
                <div className="circle-border">
                  <i className="fab fa-linkedin-in custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper portfolio-wrapper">
              <a href="https://linkedin.com">
                <div className="circle-border">
                  <i className="fas fa-user custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper email-wrapper">
              <a href="mailto:heatherbluesky@outlook.com">
                <div className="circle-border">
                  <i className="fas fa-envelope custom-icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="profile-pic" src="../../profile-pics/126283424.jpg" alt="" />
          <h2>Ewan Gomolka</h2>
          <p>Get in touch:</p>

          <div className="icon-wrapper icon-container">
            <div className="github-wrapper">
              <a className="github" href="https://github.com/ewangomolka">
                <div className="circle-border">
                  <i className="fab fa-github custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper linkedin-wrapper">
              <a href="https://www.linkedin.com/in/ewan-gomolka-35420b277/">
                <div className="circle-border">
                  <i className="fab fa-linkedin-in custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper portfolio-wrapper">
              <a href="https://linkedin.com">
                <div className="circle-border">
                  <i className="fas fa-user custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper email-wrapper">
              <a href="mailto:ewangomolka@gmail.com">
                <div className="circle-border">
                  <i className="fas fa-envelope custom-icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="profile-pic" src="../../profile-pics/83847281.jpg" alt="" />
          <h2>Andy Lam</h2>
          <p>Get in touch:</p>

          <div className="icon-wrapper icon-container">
            <div className="github-wrapper">
              <a className="github" href="https://github.com/LamKD98">
                <div className="circle-border">
                  <i className="fab fa-github custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper linkedin-wrapper">
              <a href="https://www.linkedin.com/in/andy-lam-810b81278/">
                <div className="circle-border">
                  <i className="fab fa-linkedin-in custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper portfolio-wrapper">
              <a href="https://linkedin.com">
                <div className="circle-border">
                  <i className="fas fa-user custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper email-wrapper">
              <a href="mailto:andylam98@hotmail.co.uk">
                <div className="circle-border">
                  <i className="fas fa-envelope custom-icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="profile-pic" src="../../profile-pics/127335158.jpg" alt="" />
          <h2>Connie</h2>
          <p>Get in touch:</p>

          <div className="icon-wrapper icon-container">
            <div className="github-wrapper">
              <a className="github" href="https://github.com/Corrine2212">
                <div className="circle-border">
                  <i className="fab fa-github custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper linkedin-wrapper">
              <a href="https://www.linkedin.com/in/corrine-sing-a27735b2/">
                <div className="circle-border">
                  <i className="fab fa-linkedin-in custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper portfolio-wrapper">
              <a href="https://linkedin.com">
                <div className="circle-border">
                  <i className="fas fa-user custom-icon"></i>
                </div>
              </a>
            </div>

            <div className="icon-wrapper email-wrapper">
              <a href="mailto:corrine.sing@gmail.com">
                <div className="circle-border">
                  <i className="fas fa-envelope custom-icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
