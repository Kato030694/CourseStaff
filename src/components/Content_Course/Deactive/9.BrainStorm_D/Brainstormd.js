import React, { Component } from 'react';

class Brainstormd extends Component {
    render() {
        return (
            <div className="editcontent">
            {" "}
            <img
              src="https://res.cloudinary.com/smarttax/image/upload/v1639991000/Icon_Course/Icon_NotLearn/icon_kh%C3%B3a_h%E1%BB%8Dc-17_zotkyf.png"
              alt=""
            />
            <span className="tooltiptext">
              <span>Course: Brainstorm</span>
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

export default Brainstormd;