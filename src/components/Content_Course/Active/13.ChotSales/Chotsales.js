import React, { Component } from "react";

class Tamly extends Component {
  render() {
    return (
      <div className="editcontent">
        {" "}
        <img
          src="https://res.cloudinary.com/smarttax/image/upload/v1640331797/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-16_mb0sif.png"
          alt=""
        />
        <span className="tooltiptext">
          <span>Course: Tuyệt chiêu để chốt sales</span>
          <br />

          {/* <span>Point: 7/10</span> */}
          <br />
          <span>Status: Hoàn Thành</span>
          <br />
        </span>
      </div>
    );
  }
}

export default Tamly;
