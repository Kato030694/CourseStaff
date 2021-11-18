import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import CarouselTable from './../Carousel/CarouselTable';
import Table from './../TablePhongBan/TableStaff/Table';
import TableKinhDoanh from './../TablePhongBan/KinhDoanh/TableKinhDoanh';
import TableKeToan from './../TablePhongBan/KeToan/TableKeToan';
import TableTongHop from './../TablePhongBan/TongHop/TableTongHop';
import InforCourse from "../Another/InforCourse/InforCourse";
import News from '../Another/News/News';
import "./navbarTable.css";

class NavbarTable extends Component {
  render() {
    return (
      <Router>
      <div className="container_navbartable">
        <Navbar collapseOnSelect expand="lg" fixed="top" className = "edit__navbar">
          <Container>
            <Navbar.Brand href="/esmartstaff" as={Link} to={'/esmartstaff'}>
              <img
                src="https://res.cloudinary.com/smarttax/image/upload/v1637116606/Logo-04_hqeuft.png"
                style={{ width: 50 }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
              {/* <Nav.Link href="" as={Link} to='/home'>Trang Chủ</Nav.Link> */}
                <NavDropdown title="Phòng Ban" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/tablekinhdoanh"  as={Link} to={"/tablekinhdoanh"}>
                    Kinh Doanh
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/tableketoan"} href="/tableketoan">
                    Kế Toán
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/tabletonghop"} href="/tabletonghop">
                    Tổng Hợp
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="" as={Link} to={"/thongtinkhoahoc"} href="/thongtinkhoahoc">Thông Tin Khóa Học</Nav.Link>
                <Nav.Link href="" as={Link} to={"/thongbao"} href="/thongbao">Thông Báo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div>
            <Switch>
            <Route path="/esmartstaff" exact>
              <CarouselTable/>
              <Table/>
            </Route>
            <Route path="/tablekinhdoanh">
              <CarouselTable/>
              <TableKinhDoanh/>
            </Route>
            <Route path="/tableketoan">
              <CarouselTable/>
              <TableKeToan/>
            </Route>
            <Route path="/tabletonghop">
              <CarouselTable/>
              <TableTongHop/>
            </Route>
            <Route path="/thongtinkhoahoc">
              <InforCourse/>
            </Route>
            <Route path="/thongbao">
              <News/>
            </Route>
            </Switch>
          </div>
      </div>
      </Router>
    );
  }
}

export default NavbarTable;
