import "bootstrap/dist/css/bootstrap.min.css";

import Intro from './Intro';
import React from 'react';
import Search from './Search';
import InfoRoom from './InfoRoom';
import DeluxeDouble from "./DeluxeDouble1.jpg";
import Superior from "./SuperiorDoubleOrTwin_1.jpg";
import Executive from "./ExecutiveCityView1.jpg";
import Suite from "./SuiteGarden1.jpg";
function BookRoom() {
    return (
        <div>
            <div>
                <Intro />  
            </div>
            <div className="Room">
                <InfoRoom 
                    image={DeluxeDouble}
                    name="Phòng Superior Double Or Twin"
                    acreage="23m2"
                    typebed="Giường đôi hoặc 02 giường đơn"
                    capacity="2 người lớn"
                    description="Phòng nghỉ Stellar - Superior Double Or Twin mang đến sự ấm cúng bởi nét duyên dáng của lịch sử và những tiện nghi hiện đại nhất. Với sàn nhà kết hợp gỗ và gạch ốp, giường đôi thoải mái và đồ nội thất trang nhã, tất cả tạo nên sự cân bằng giữa “cổ điển” và “hiện đại”."
                />

            </div>
            <div className="Room">
                <InfoRoom 
                    image={Superior}
                    name="Phòng Deluxe Double"
                    acreage="23m2"
                    typebed="Giường đôi "
                    capacity="2 người lớn"
                    description="Phòng nghỉ Stellar - Deluxe Double, căn phòng ấm áp này mang lại sự hoàn hảo trong kỳ nghỉ tại Sài Gòn. Không gian làm việc kết nối với các tiện nghi phòng nghỉ, cùng giường ngủ với bộ chăn lông vũ êm ái, chất liệu cao cấp cùng dịch vụ phục vụ phòng tận nơi mang lại sự thoải mái và thư giãn tối đa."
                />
            </div>
            <div className="Room">
                <InfoRoom 
                    image={Executive}
                    name="Phòng Executive City View"
                    acreage="40m2"
                    typebed="02 Giường đơn"
                    capacity="2 người lớn"
                    view="Thành phố"
                    description="Với hai cửa sổ lớn cho quang cảnh tuyệt vời nhìn ra thành phố, Phòng Executive City View mang lại cho quý khách một không gian thoáng đãng, rộng mở. được trang trí bằng sàn gỗ kết hợp gạch, những món đồ nội thất phảng phất phong cách Đông Dương kết hợp những tiện nghi hiện đại tạo nên một tổng thể hài hoà, đương đại mà quý khách có thể trải nghiệm để cảm nhận nét đẹp Sài Gòn chuẩn xác nhất." />
            </div>
            <div className="Room">
                <InfoRoom 
                    image={Suite}
                    name="Phòng Suite Garden"
                    acreage="40m2"
                    typebed="01 giường queen"
                    capacity="2 người lớn"
                    view="Thành phố"
                    description="Phòng Suite Garden được phối hợp phong cách hiện đại với cảm hứng từ cây xanh, rộng rãi, hoàn hảo cho các kì nghỉ cuối tuần hay chuyến khám phá của quý khách. Ban công rộng và được sắp xếp để quý khách luôn cảm nhận được không khí trong lành, gió nhẹ lay và bóng mát từ các tán cây. Loại phòng nghỉ này đáp ứng đầy đủ nhu cầu ngắm nhìn đường phố, tận hưởng những giây phút đắm mình trong bồn tắm bể sục."  />
            </div>
            <div>
                <Search />
            </div>
        </div>
       
    );
}

export default BookRoom;
