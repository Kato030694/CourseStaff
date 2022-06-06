import React, { Component } from 'react';

class Dongluclamviec extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
              src="https://res.cloudinary.com/smarttax/image/upload/v1640331796/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-10_upf3h5.png"
              alt=""
            />
            <span className="tooltiptext">
              <span>Course: Tạo động lực làm việc cho nhân viên</span>
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

export default Dongluclamviec;