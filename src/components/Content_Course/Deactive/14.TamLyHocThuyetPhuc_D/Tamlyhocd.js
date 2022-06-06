import React, { Component } from 'react';

class Tamlyhocd extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
              src="https://res.cloudinary.com/smarttax/image/upload/v1639990999/Icon_Course/Icon_NotLearn/icon_kh%C3%B3a_h%E1%BB%8Dc-09_tq8nu3.png"
              alt=""
            />
            <span className="tooltiptext">
              <span>Course: Tâm lý học thuyết phục</span>
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

export default Tamlyhocd;