import React, { Component } from "react";

class OKRs extends Component {
  render() {
    return (
      <div className="editcontent">
        {" "}
        <img
          src="https://res.cloudinary.com/smarttax/image/upload/v1640331796/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-04_trnvza.png"
          alt=""
        />
        <span className="tooltiptext">
          <span>Course: OKRs</span>
          <br />
          <span>Finish day: 17/2/2020</span>
          <br />
          {/* <span>Point: 8/10</span> */}
          <br />
          <span>Status: Hoàn Thành</span>
          <br />
        </span>
      </div>
    );
  }
}

export default OKRs;
