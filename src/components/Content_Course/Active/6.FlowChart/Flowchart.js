import React, { Component } from 'react';

class Flowchart extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
              src="https://res.cloudinary.com/smarttax/image/upload/v1640331795/Icon_Course/Active/icon_kh%C3%B3a_h%E1%BB%8Dc-07_ssduyg.png"
              alt=""
            />
            <span className="tooltiptext">
              <span>Course: Flow Chart</span>
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

export default Flowchart;