import React, { Component } from "react";
import './Footers.css';
// import {Navbar} from 'react-bootstrap';
// import * as Unicons from "@iconscout/react-unicons";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-basic">
          <footer>
            {/* <div className="social">
              <a href="#">
              <Unicons.UilHome className="unicon__footer"/>
              </a>
              <a href="#">
              <Unicons.UilFacebookF  className="unicon__footer"/>
              </a>
              <a href="#">
              <Unicons.UilYoutube  className="unicon__footer"/>
              </a>
              
            </div> */}
            {/* <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Services</a>
              </li>
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul> */}
            <p className="copyright">eSmart Corp © 2021</p>
          </footer>
        </div>
      </div>
    );
  }
}
