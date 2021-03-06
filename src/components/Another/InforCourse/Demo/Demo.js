import React, { Component } from "react";
import "./Demo.css";

export default class Demo extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="blog_post">
          <div className="img_pod">
            <img
              src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
              alt="random image"
            />
          </div>
          <div className="container_copy">
            <h3>12 January 2019</h3>
            <h1>CSS Positioning</h1>
            <p>
              The position property specifies the type of positioning method
              used for an element (static, relative, absolute, fixed, or
              sticky).
            </p>
          </div>
          <a className="btn_primary" href="#">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
