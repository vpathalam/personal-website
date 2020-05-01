import React, { Component } from "react";
import Profile from "../../resources/avatar.png";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid
          className="landing-grid"
          style={{ width: "100%", margin: "auto" }}
        >
          <Cell col={12}>
            <h1 className="about-intro">Let me introduce myself...</h1>
            <div className="profile-text">
              <img alt="logo" className="profile" src={Profile} />
              <body>
                <p>
                  I am a current fourth-year student at Northeastern University
                  pursuing a B.S. in Computer Science. My results-oriented
                  experience, combined with my passion for software development,
                  has enabled me to become an effective contributor through work
                  with multiple startups and in the defense industry.
                </p>
                <p>
                  I consider myself as an adaptable engineer who has an
                  understanding of a number of languages (notably Java, Python,
                  C++, Javascript) and development styles (RESTFUL application
                  deployment, embedded implementations, machine learning
                  frameworks). I spend most of my time learning, be it new tech,
                  stock trades, or personal development.
                </p>
              </body>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
