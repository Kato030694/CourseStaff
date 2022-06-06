import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
// import CarouselTable from './../Carousel/CarouselTable';
import Table from "./../TablePhongBan/TableStaff/Table";
import TableKinhDoanh from "./../TablePhongBan/KinhDoanh/TableKinhDoanh";
import TableKeToan from "./../TablePhongBan/KeToan/TableKeToan";
import TableTongHop from "./../TablePhongBan/TongHop/TableTongHop";
import InforCourse from "../Another/InforCourse/InforCourse";
// import News from '../Another/News/News';
import TimeLineNhanVien from "../Another/TimeLine/NhanVien/TimeLineNhanVien";
import "./navbarTable.css";
import Marketing from "../TablePhongBan/Marketing/Marketing";
import KTDichVu from "../TablePhongBan/KTDichVu/KTDichVu";
import MarqueeWeb from "../Another/MarqueeWeb/MarqueeWeb";
import TimeLineManager from "../Another/TimeLine/Manager/TimeLineManager";
import TimeLineSupervisor from "../Another/TimeLine/Supervisor/TimeLineSupervisor";

class NavbarTable extends Component {
  render() {
    return (
      <Router>
        <div className="container_navbartable">
          <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            className="edit__navbar"
          >
            <Container>
              <Navbar.Brand href="/esmartstaff" as={Link} to={"/esmartstaff"}>
                <img
                  src="https://res.cloudinary.com/smarttax/image/upload/v1637116606/Logo-04_hqeuft.png"
                  style={{ width: 50 }}
                  alt=""
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  {/* <Nav.Link href="" as={Link} to='/home'>Trang Chủ</Nav.Link> */}
                  <Nav.Link as={Link} to={"/esmartstaff"} href="/esmartstaff">
                    Trang Chủ
                  </Nav.Link>
                  <NavDropdown title="Phòng Ban" id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      href="/tablekinhdoanh"
                      as={Link}
                      to={"/tablekinhdoanh"}
                    >
                      Phòng Kinh Doanh
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/tableketoannoibo"}
                      href="/tableketoannoibo"
                    >
                      Phòng Kế Toán Nội Bộ
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/tabletonghop"}
                      href="/tabletonghop"
                    >
                      Phòng Tổng Hợp
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/tablemarketing"}
                      href="/tablemarketing"
                    >
                      Phòng Marketing
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/tableketoandichvu"}
                      href="/tableketoandichvu"
                    >
                      Phòng Kế Toán Dịch Vụ
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="TimeLine" id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      as={Link}
                      to={"/timelinemanager"}
                      href="/timelinemanager"
                    >
                      Manager
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={"/timelinesupervisor"}
                      href="/timelinesupervisor"
                    >
                      Supervisor
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/timelinenhanvien"
                      as={Link}
                      to={"/timelinenhanvien"}
                    >
                      Nhân Viên
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    as={Link}
                    to={"/thongtinkhoahoc"}
                    href="/thongtinkhoahoc"
                  >
                    Thông Tin Khóa Học
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div>
            <Switch>
              <Route path="/esmartstaff" exact>
                {/* <CarouselTable/> */}
                <MarqueeWeb />
                <Table />
              </Route>
              <Route path="/tablekinhdoanh">
                {/* <CarouselTable/> */}
                <TableKinhDoanh />
              </Route>
              <Route path="/tableketoannoibo">
                {/* <CarouselTable/> */}
                <TableKeToan />
              </Route>
              <Route path="/tabletonghop">
                {/* <CarouselTable/> */}
                <TableTongHop />
              </Route>
              <Route path="/tablemarketing">
                {/* <CarouselTable/> */}
                <Marketing />
              </Route>
              <Route path="/tableketoandichvu">
                {/* <CarouselTable/> */}
                <KTDichVu />
              </Route>

              <Route path="/timelinemanager">
                <TimeLineManager/>
              </Route>
              <Route path="/timelinesupervisor">
                <TimeLineSupervisor />
              </Route>
              <Route path="/timelinenhanvien">
                <TimeLineNhanVien />
              </Route>
              <Route path="/thongtinkhoahoc">
                <InforCourse />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default NavbarTable;
