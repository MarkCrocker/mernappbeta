import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-2 mb-5">Talk To Me</h1>
                  <p className="lead">
                    {" "}
                    Inspiring Words That Invoke Inspiration
                  </p>
                  <hr />
                  <a
                    href="register.html"
                    className="btn btn-lg landing-btn-color mr-2"
                  >
                    Sign Up
                  </a>
                  <a href="login.html" className="btn btn-lg btn-light">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
