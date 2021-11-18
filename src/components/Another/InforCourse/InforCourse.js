import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Clock from "react-live-clock";
import "./InforCourse.css";

class InforCourse extends Component {
  render() {
    return (
      <div className="container__course">
        <CardGroup>
          <Card>
            <Card.Img
              className="edit__img"
              variant="top"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/C%C3%A2u_chuy%E1%BB%87n_eSmart_truy%E1%BB%81n_c%E1%BA%A3m_h%E1%BB%A9ng_v%E1%BB%81_%C4%91%E1%BB%99ng_l%E1%BB%B1c_s%E1%BB%91ng_zgosfh.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Clock />
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="edit__img"
              variant="top"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/V%C4%83n_ph%C3%B2ng_ti%E1%BB%87n_nghi_th%C3%AAm_view_c%E1%BB%B1c_ch%E1%BA%A5t_zqjht6.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="edit__img"
              variant="top"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/Kh%C3%B4ng_gian_m%E1%BB%9Bi_kh%C6%A1i_ni%E1%BB%81m_h%E1%BB%A9ng_kh%E1%BB%9Fi_vy2xpa.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup className = "edit__card">
          <Card>
            <Card.Img
              className="edit__img"
              variant="top"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/C%C3%A2u_chuy%E1%BB%87n_eSmart_truy%E1%BB%81n_c%E1%BA%A3m_h%E1%BB%A9ng_v%E1%BB%81_%C4%91%E1%BB%99ng_l%E1%BB%B1c_s%E1%BB%91ng_zgosfh.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Clock />
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="edit__img"
              variant="top"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/V%C4%83n_ph%C3%B2ng_ti%E1%BB%87n_nghi_th%C3%AAm_view_c%E1%BB%B1c_ch%E1%BA%A5t_zqjht6.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="edit__img"
              variant="top"
              src="https://res.cloudinary.com/smarttax/image/upload/v1620802936/Kh%C3%B4ng_gian_m%E1%BB%9Bi_kh%C6%A1i_ni%E1%BB%81m_h%E1%BB%A9ng_kh%E1%BB%9Fi_vy2xpa.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default InforCourse;
