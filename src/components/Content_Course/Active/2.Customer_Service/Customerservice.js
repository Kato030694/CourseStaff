import React, { Component } from 'react';

class Customerservice extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
        src="https://res.cloudinary.com/smarttax/image/upload/v1640331797/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-01_basrfj.png"
        alt=""
      />
      <span className="tooltiptext">
        <span>Course: Customer Service</span>
        <br />
        <span>Finish day: 20/2/2020</span>
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

export default Customerservice;