import React, { Component } from "react";
import { Cell, Grid, Button } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <Grid style={{ width: "100%", margin: "auto" }}>
          <Cell col={12}>
            <div className="contact-border">
              <div className="contact-form">
                <h1>Say Hello!</h1>
                <p>Email: vpathalam@gmail.com </p>
                <a
                  href="mailto:vpathalam@gmail.com?subject=Hi%20Vikram!"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    raised
                    colored
                    ripple
                    class="mdl-button mdl-color--light-blue-900 mdl-color-text--white"
                  >
                    SEND EMAIL
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/vikram-pathalam/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>LinkedIn: linkedin.com/in/vikram-pathalam/ </p>
                </a>
                <a
                  href="https://github.com/vpathalam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>GitHub: github.com/vpathalam </p>
                </a>
                <a
                  href="https://scholar.google.com/citations?hl=en&user=WewV87EAAAAJ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>Google Scholar: scholar.google.com </p>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
