import React, { Component } from 'react';

class Teamwork extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
              src="https://res.cloudinary.com/smarttax/image/upload/v1640331796/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-19_nqctdu.png"
              alt=""
            />
            <span className="tooltiptext">
              <span>Course: Team Work</span>
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

export default Teamwork;