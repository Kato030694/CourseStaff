import React, { Component } from "react";
import "./TimeLineManager";
export default class TimeLineManager extends Component {
  render() {
    return (
      <div className="background__timeline">
        <div className="header__timeline">
          <header>
            <p>CHƯƠNG TRÌNH ĐÀO TẠO NHÂN VIÊN</p>
          </header>
        </div>
        <div className="wrapper">
          <div className="center-line">
            <a href="#" className="scroll-icon">
              <i className="fas fa-caret-up" />
            </a>
          </div>
          <div className="row row-2">
            <section>  
              <i className="icon fas fa-home" />
              <div className="details">
                <span className="title">Nhân Viên Dưới 6 Tháng</span>
                {/* <span>2nd Jan 2021</span> */}
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
            <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">2 tháng thử việc</span>
                <span></span>
              </div>
              <p>
                1. Báo cáo thử việc (1 lần/tuần) <br />
                2. Đọc sách và viết bình luận. (4 cuốn nhập môn)
              </p>
              <div className="bottom">
                {/* <a href="#popup1">Read more</a> */}
                <i>Trưởng Phòng kiểm tra và đánh giá</i>
              </div>
              <div id="popup1" className="overlay light">
                <a className="cancel" href="#" />
                <div className="popup">
                  <h2>What the what?</h2>
                  <div className="content">
                    <p>Click outside the popup to close.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Tháng thứ 3</span>
                {/* <span>2nd Jan 2021</span> */}
              </div>
              <p>
                1. Typing ( 80 WPM )
                <br />
                2. OKRs (Đạt 8 điểm bài kiểm tra)
                <br />
                3. Dịch vụ khách hàng (Đạt 8 điểm bài kiểm tra) <br />
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Mr. Si, Bộ Phận IT training và đánh giá</i>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Tháng thứ 4</span>
                {/* <span>3rd Jan 2021</span> */}
              </div>
              <p>
                1. Làm việc hiệu quả (Đạt 8 điểm bài kiểm tra) <br />
                2. Báo cáo trong công việc (Đạt 8 điểm bài kiểm tra)
                <br />
                3. 5S (Không đánh giá)
                <br />
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Mr Thuận, Si training và đánh giá</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Tháng thứ 5</span>
                {/* <span>4th Jan 2021</span> */}
              </div>
              <p>
                1. Flowchart ( Đạt 8 điểm bài kiểm tra ) <br />
                2. 6 hats (Không kiểm tra)
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Mr. Si, Sếp training và đánh giá</i>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Tháng thứ 6</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
                1. Biểu đồ xương cá ( Không kiểm tra ) <br />
                2. Brainstorm ( Không kiểm tra )
                <br />
                3. 5 Whys ( Không kiểm tra )
                <br />
                4. 5 Công cụ để tư duy ( Không kiểm tra )<br />
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Sếp training và đánh giá</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
            <i className="icon fas fa-home" />
              <div className="details">
                <span className="title">Nhân Viên Từ 6 Tháng Trở Lên</span>
                </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Lập kế hoạch làm việc 6 tháng tiếp theo</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Bản kế hoạch theo OKRs và SMART
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Trước ngày 10 của tháng 1 và tháng 7 hàng năm.</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Báo cáo thực hiện kế hoạch và Đánh giá hiệu quả công việc.</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              04 Báo cáo
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Thực hiện 3 tháng/lần.</i>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Sáng kiến</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Sáng kiến/tháng
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Theo dõi trên task</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Khoá học: Hoàn thành mọi việc với Kanban</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Bài thu hoạch sau khóa học
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Kyna</i>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Khóa học: Tâm lý học thuyết phục</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Bài thu hoạch sau khóa học
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Kyna</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Khóa học: 5 loại tư duy</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Bài phân tích sau khóa học
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Sếp training</i>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
