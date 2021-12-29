import React, { Component } from 'react';

class Brainstorm extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
              src="https://res.cloudinary.com/smarttax/image/upload/v1640331796/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-17_bsugvk.png"
              alt=""
            />
            <span className="tooltiptext">
              <span>Course: Brainstorm</span>
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

export default Brainstorm;