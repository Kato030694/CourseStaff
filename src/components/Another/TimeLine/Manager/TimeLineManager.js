import React, { Component } from "react";
import "./TimeLineManager.css";
export default class TimeLineManager extends Component {
  render() {
    return (
      <div className="background__timeline">
        <div className="header__timeline">
          <header>
            <p>CHƯƠNG TRÌNH ĐÀO TẠO CẤP MANAGER</p>
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
                <span className="title">Lập kế hoạch làm việc 6 tháng tiếp theo</span>
                <span></span>
              </div>
              <p>
              01 Bản kế hoạch theo OKRs và SMART
              </p>
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
                {/* <i>Mr Thuận, Si training và đánh giá</i> */}
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
              Tốt nghiệp đại học trở lên
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                {/* <i>Mr. Si, Sếp training và đánh giá</i> */}
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">hoàn thành chương trình đào tạo về chuyên môn.</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Chương trình
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Bắt buộc đối với các vị trí yêu cầu chứng chỉ</i>
              </div>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Khóa học về đào tạo lãnh đạo</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 Bài thu hoạch sau khóa học.
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                {/* <i>Trước ngày 10 của tháng 1 và tháng 7 hàng năm.</i> */}
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Nghiên cứu về tính cách của mỗi nhân viên theo 4 nhóm</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              (cầu toàn ưu tư, sôi nổi hoạt bát, linh hoạt hùng lực, thanh thản trầm tính) để xác định sự phù hợp và quyết định giao nhiệm vụ.

              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                <i>Mỗi quý sẽ hoàn thành 01 nghiên cứu cho 1 nhóm tính cách và viết bài mô tả về nghiên cứu</i>
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
              <p>
              650 - 750 điểm
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                {/* <i>Theo dõi trên task</i> */}
              </div>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <i className="icon fas fa-star" />
              <div className="details">
                <span className="title">Đào tạo, training cho nhân viên toàn công ty</span>
                {/* <span>5th Jan 2021</span> */}
              </div>
              <p>
              01 khoá/6 tháng
              </p>
              <div className="bottom">
                {/* <a href="#">Read more</a> */}
                {/* <i>Kyna</i> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
