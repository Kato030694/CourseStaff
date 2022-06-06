import React, { Component } from "react";

class Teamworkd extends Component {
  render() {
    return (
      <div className="editcontent">
        {" "}
        <img
          src="https://res.cloudinary.com/smarttax/image/upload/v1640139680/Icon_Course/Icon_NotLearn/teamwork-19_2_em4wtn.png"
          alt=""
        />
        <span className="tooltiptext">
          <span>Course: Team work</span>
          <br />

          {/* <span>Point: 7/10</span> */}
          <br />
          <span>Status: Chưa Học</span>
          <br />
        </span>
      </div>
    );
  }
}

export default Teamworkd;
