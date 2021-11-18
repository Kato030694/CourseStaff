import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import './CarouselTable.css'
class CarouselTable extends Component {
  render() {
    return (
      <div class="Container_Carousel">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/smarttax/image/upload/v1625799808/Kinh-nghiem-cua-nguoi-thanh-cong-ve-hop-tac-kinh-doanh-1024x549_o2pb2l.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Khóa Học 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/V%C4%83n_ph%C3%B2ng_v%E1%BB%9Bi_v%E1%BB%8B_tr%C3%AD_%C4%91%E1%BA%AFc_%C4%91%E1%BB%8Ba_ezzl3z.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Khóa Học 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/Kh%C3%B4ng_gian_m%E1%BB%9Bi_kh%C6%A1i_ni%E1%BB%81m_h%E1%BB%A9ng_kh%E1%BB%9Fi_vy2xpa.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Khóa Học 3</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselTable;
