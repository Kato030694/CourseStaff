import React, { Component } from "react";

class Kanband extends Component {
  render() {
    return (
      <div className="editcontent">
        {" "}
        <img
          src="https://res.cloudinary.com/smarttax/image/upload/v1639991000/Icon_Course/Icon_NotLearn/icon_kh%C3%B3a_h%E1%BB%8Dc-15_ywo41a.png"
          alt=""
        />
        <span className="tooltiptext">
          <span>Course: Hoàn thành mọi việc với Kanban</span>
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

export default Kanband;
