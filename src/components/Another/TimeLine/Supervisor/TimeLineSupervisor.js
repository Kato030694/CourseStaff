import React, { Component } from "react";
import "./TimeLineSupervisor.css";
export default class TimeLineSupervisor extends Component {
  render() {
    return (
      <div className="background__timeline">
        <div className="header__timeline">
          <header>
            <p>CHƯƠNG TRÌNH ĐÀO TẠO CẤP SUPERVISOR</p>
          </header>
        </div>
        <div className="wrapper">
          <div className="center-line">
            <a href className="scroll-icon">
              <i className="fas fa-caret-up" />
            </a>
          </div>
          {/* <div className="row row-2">
            <section>  
              <i className="icon fas fa-home" />
              <div className="details">
                <span className="title">Nhân Viên Dưới 6 Tháng</span>
              </div>
            </section>
          </div> */}
          <div className="row row-1">
            <section>
              <i className="icon fas fa-home" />
              <div className="details">
                <span className="title">
                  Lập kế hoạch làm việc 6 tháng tiếp theo
                </span>
                <span></span>
              </div>
              <p>01 Bản kế hoạch theo OKRs và SMART</p>
              <div className="bottom">
                {/* <a href="#popup1">Read more</a> */}
                <i>Trước ngày 10 của tháng 1 và tháng 7 hàng năm.</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Báo cáo thực hiện kế hoạch và Đánh giá hiệu quả công việc.</span>
                {/* <span>2nd Jan 2021</span> */}
              </div>
              <p>
              04 Báo cáo
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Thực hiện 3 tháng/lần</i>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Sáng kiến</span>
                {/* <span>3rd Jan 2021</span> */}
              </div>
              <p>
              02 Sáng kiến/tháng
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
                <span className="title">Bằng cấp</span>
                {/* <span>4th Jan 2021</span> */}
              </div>
              <p>
              Tốt nghiệp Đại học trở lên
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Khuyến khích</i>
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Hoàn thành chương trình đào tạo về chuyên môn.</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Chương trình
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Bắt buộc đối với các vị trí yêu cầu chứng chỉ.</i>
              </div>
            </section>
          </div>
          {/* <div className="row row-2">
            <section>
              <i className="icon fas fa-home" />
              <div className="details">
                <span className="title">Nhân Viên Từ 6 Tháng Trở Lên</span>
              </div>
            </section>
          </div> */}
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">
                Khoá học: Tạo động lực cho nhân viên
                </span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>01 Bài thu hoạch sau khóa học</p>
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
                <span className="title">
                Khóa học: 5 loại tư duy
                </span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>01 Bài phân tích sau khóa học</p>
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
                <span className="title">TOEIC</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>650 điểm</p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                {/* <i>Theo dõi trên task</i> */}
              </div>
            </section>
          </div>
         
        </div>
      </div>
    );
  }
}
